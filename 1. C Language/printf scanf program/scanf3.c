#include<stdio.h>
void main()
{ // 1feet = 12 inch

float feet1,inch1=12;
float feet2,inch2=12;
 
printf("enter the feet =");
scanf("%f",&feet1);
printf("inch = %.2f \n",feet1*inch1);

printf("enter the feet =");
scanf("%f",&feet2);
printf("inch = %.2f ",feet2*inch2);


getch();


}