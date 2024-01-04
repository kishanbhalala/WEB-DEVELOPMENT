#include<stdio.h>

void main()

{   //convert to celsius into fernhit  formula [0c*(9/5)+32=32f]

float cel1,cel2,cel3,a,b,c;

printf("enter the celsius =");
scanf("%f",&cel1);
printf("enter the celsius =");
scanf("%f",&cel2);
printf("enter the celsius =");
scanf("%f",&cel3);

a=cel1*(9/5)+32;
b=cel2*(9/5)+32;
c=cel3*(9/5)+32;


printf("fernhit = %.2f ",a);
printf("\nfernhit = %.2f",b);
printf("\nfernhit = %.2f",c);

getch();

}