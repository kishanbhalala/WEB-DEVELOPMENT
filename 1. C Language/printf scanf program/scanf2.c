#include<stdio.h>
void main()
{
   // other currency into rupees

   float dollar,pound,euro,a,b,c;

   
   printf("enter the dollar = ");
   scanf("%f",&dollar);
   a=dollar*82.55;
   printf("rupees = %.2f\n",a);

   printf("enter the pound = ");
   scanf("%f",&pound);
   b=pound*101.44;
   printf("rupees = %.2f\n",b);

   printf("enter the euro = ");
   scanf("%f",&euro);
   c=euro*87.65;
   printf("rupees = %.2f",c);
   

   getch();




}