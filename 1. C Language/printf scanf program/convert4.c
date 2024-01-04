#include<stdio.h>
void main()

{   //convert to inch into cm 1 inch = 2.54 cm

float inch1=60.33,inch2=150.44,a,b,total;

a=inch1*2.54;
b=inch2*2.54;
   
printf(" 60.33 inch = %.2f cm",a);
printf("\n150.44 inch = %.2f cm",b);

total=a+b;
printf("\n total cetemeter = %.2f ",total);

getch();


}