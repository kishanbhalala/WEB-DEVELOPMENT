#dinclude<stdio.h>
#include<conio.h>
void main()
{
   float dollar,rs1;
   float pound,rs2;
   clrscr();

   printf("dollar = ");
   scanf("%f",&dollar);
      rs1=dollar*82.50;
      printf(" %.2f rs \n " ,rs1);

      printf("pound = ");
      scanf("%f",&pound);
      rs2=pound*102;
      printf(" %.2f rs",rs2);



   getch();







}