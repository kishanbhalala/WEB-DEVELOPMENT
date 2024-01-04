#include<stdio.h>
void main()
{     
      //convert to other currency into rupees

      float dollar=82.50,pound=102.30,euro=87.80,a,b,c,total;
       
       a=50000*dollar;
       b=25555*pound;
       c=30000*euro;

       printf("50000 dollar = %.2f rupees",a);
       printf("\n25555 pound = %.2f rupees",b);
       printf("\n30000 euro = %.2f rupees",c);

       total=a+b+c;
       printf("\ntotal rupees = %.2f",total);

       getch();








}