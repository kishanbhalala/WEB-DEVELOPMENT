#include<stdio.h>
#include<conio.h>
void main()
{  float bill,unit,surcharge;
   clrscr();
   printf("enter the unit =");
   scanf("%f",&unit);

if(unit<=100)
   //100 unit under per unit 0.60   50 rs all users charge include
  { bill=unit*0.60+50;
    printf("100 under under total charge = %.2f",bill);
  }
else if(unit>100 && unit<=300)
   // 100 unit na 60 rs baki na units na per unit*0.80 laagse
  {  bill=60+(unit-100)*0.80+50;
     printf("101 to 300 under unit total chrge = %.2f",bill);
  }
     else
    // 100 unit na 60 , 200 unit na 160, 300 unit upr jaay to per unit*0.90 laaagse
  { bill=60+160+(unit-300)*0.90+50;
    printf("300 up unit total charge = %.2f",bill);
  }
    if(bill>300)
  { surcharge=(bill*15/100)+bill;
    printf("\n 300 rs up bill surcharge = %.2f",surcharge);
  }
getch();
}