#include <stdio.h>
struct customer
{
    char name[20];
    int acc_number;
    double balance;
} dist1, dist2, sum;

int main()
{
    int i;
    struct customer cs[50];

    printf("Enter Records of customer: \n");
    for(i=0; i<5; i++)
    {
        printf("\nName :");
        scanf("%s", &cs[i].name);
        printf("\nAccount Number :");
        scanf("%lf", &cs[i].acc_number);
        printf("\nBalance :");
        scanf("%lf", &cs[i].balance);
    }
    for(int j=0; j<5; j++)
    {
        if(cs[j].balance < 500)
        {
            printf("\nName : %s", cs[j].name);
        }
    }

    for(int k=0; k<5; k++)
    {
        if(cs[k].balance > 1000)
        {
            cs[k].balance += 100;
        }
    }

    printf("\nIncremented Balance : \n");
    for(int l=0; l<5; l++)
    {
        if(cs[l].balance >= 1100)
        {
            printf("%d\n", cs[l].balance);
        }
    }

    return 0;
}
