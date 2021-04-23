#include<stdio.h>

int FirstDigitLastDigit(int number)
{
    int arr[100],arr2[100],length = 0,temp,i,j,k;
    while(number > 0)
    {
        temp = number % 10;
        arr[length]=temp;
        length++;
        number = number / 10;
    }

    for(i=0,j=length-1; j>=0; j--,i++)
    {
        arr2[i] = arr[j];

    }

    if(length<3)
    {
        printf("First Digit:");
        for(int i= 0; i<2; i++)
        {
            printf("%d",arr2[i]);
        }

        printf(" Last Digit:");
        for(int i= 0; i<2; i++)
        {
            printf("%d",arr2[i]);
        }
    }

    else
    {
        printf("First Digit:");
        for(int i= 0; i<2; i++)
        {
            printf("%d",arr2[i]);
        }

        printf(" Last Digit:");
        for(j = length-3; j<length; j++)
        {
            printf("%d", arr2[j]);

        }
    }


}
int main()
{
    int number;
    scanf("%d",&number);
    FirstDigitLastDigit(number);
    return 0;
}


