#include<stdio.h>
void main()
                                    // income tax
{ float income,a,b,c,d;
  printf("enter the income = ");
  scanf("%f",&income);

  if (income<=2500)
  {
    a=income*0/100;
    printf("total income tax = %.2f",a);
  }
  else if (income<=5000)
  {
    b=(income-2500)*10/100;
    printf("total income tax = %.2f",b);
  }
  else if (income<=10000)
  {
    c=250+(income-5000)*20/100;
    printf("total income tax = %.2f",c);
  }
  else if (income>10000)
  {
    d=1000+250+(income-10000)*30/100;
    printf("total income tax = %.2f",d);
  }
getch();  
  
}


