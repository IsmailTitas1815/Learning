int main()
{
    int n, r = 0,temp;

    printf("Enter a number to reverse\n");
    scanf("%d", &n);

    while (n != 0)
    {
        temp = n%10;
        if(temp%2==1)
        {
            r = r * 10;
            r = r + temp;
            n = n/10;
        }
        else
            n=n/10;
        }

    printf("Reverse of the number = %d\n", r);

    return 0;
}


//#include<stdio.h>
//int FirstDigitLastDigit(int num)
//{
//    int arr[100], i = 0, p,q, k;
//    while(num > 0)
//    {
//        int mod = num % 10;
//        num = num / 10;
//        arr[i]=mod;
//        i++;
//    }
//    for(int a = 0;a<=i;a++){
//        printf("\n%d",arr[a]);
//    }
//    if(i-1<=3){
//        p = i-1;
//    }
//    else{
//        p = 2;
//    }
//
//    if(i-1<=2){
//        q = i-1;
//    }
//    else{
//        q = 1;
//    }
//    printf("First Digit:");
//    for(int j= 0; j<=q; j++)
//    {
//        printf("%d",arr[i-1-j]);
//    }
//    printf(" Last Digit:");
//
//    for(k = p; k>=0; k--)
//    {
//        printf("%d", arr[k]);
//    }
//}
//int main()
//{
//    int num;
//    scanf("%d",&num);
//
//    FirstDigitLastDigit(num);
//    return 0;
//}
