#include<stdio.h>

void main()

{   //convert to celsius into fernhit  formula [0c*(9/5)+32=32f]

float cel1=10,cel2=-3,cel3=0,a,b,c;


a=cel1*(9/5)+32;
b=cel2*(9/5)+32;
c=cel3*(9/5)+32;

printf("10 celsius = %.2f fernhit",a);
printf("\n -3 celsius = %.2f fernhit",b);
printf("\n 0  celsius = %.2f fernhit",c);



getch();

}