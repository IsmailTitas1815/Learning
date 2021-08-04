from rest_framework import serializers

from ReduxShop.models import UserProfile, Order, Product , OrderDetails


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('id', 'email', 'password')
        extra_kwargs = {
            "password": {"write_only": True, "style": {
                "input_type": "password"
            }}
        }

    def create(self, validated_data):
        user = UserProfile.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],

        )

        return user


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        exclude = ['id']


class OrderDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderDetails
        exclude = ['id']



class OrderSerializer(serializers.ModelSerializer):
    products = ProductSerializer()
    orderDetails = OrderDetailsSerializer()

    class Meta:
        model = Order
        fields = "__all__"

    def create(self, validated_data):
        products_data = validated_data.pop("products")
        orderDetails_data = validated_data.pop("orderDetails")
        products = ProductSerializer.create(
            ProductSerializer(), validated_data=products_data)
        orderDetails = OrderDetailsSerializer.create(
            OrderDetailsSerializer(), validated_data=orderDetails_data)

        order, created = Order.objects.update_or_create(
            products=products,
            orderDetails=orderDetails,
            orderTime=validated_data.pop('orderTime'),
            totalPrice=validated_data.pop('totalPrice'),
            user=validated_data.pop('user')
        )

        return order