#include<stdio.h>
void main()
                                    // electricity bill
{ float unit,bill,surcharge;
  printf("enter the units = ");
  scanf("%f",&unit);

  if (unit<=100)
  {
    bill=50+(unit*0.60);                       // 100 unit * 0.60 = 60 rs 
    printf("total bill = %.2f",bill);
  }
  else if (unit>100 && unit<=300)              // 200 unit * 0.80 = 160 rs
  {
    bill=50+60+(unit-100)*0.80;
    printf("total bill = %.2f",bill);
  }
  else if (unit>300)                           // 300 unit up *0.90 per unit charge
  {
    bill=50+60+160+(unit-300)*0.90;
    printf("total bill = %.2f",bill);
  }
  if (bill>300)
  {
    surcharge=bill+(bill*15)/100;
    printf("\ntotal surcharge = %.2f",surcharge);
  }
  getch();

}