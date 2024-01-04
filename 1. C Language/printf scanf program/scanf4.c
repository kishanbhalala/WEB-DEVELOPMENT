#include<stdio.h>
void main()
{ // i inch = cm 2.54

float inch1,cm1=2.54;
float inch2,cm2=2.54;
 
printf("enter the inch =");
scanf("%f",&inch1);
printf("cm = %.2f \n",cm1*inch1);

printf("enter the inch =");
scanf("%f",&inch2);
printf("cm = %.2f ",cm2*inch2);


getch();


}