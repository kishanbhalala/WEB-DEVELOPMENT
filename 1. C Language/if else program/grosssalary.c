#include<stdio.h>
void main()
{                                                    // gross salary
  float salary,HRA,DA,gross;
  printf("enter the salary = ");
  scanf("%f",&salary);

  if (salary<=10000)
  {
    HRA=salary*10/100;
    DA=salary*20/100; 
  }
  else if (salary<=20000)
  {
    HRA=salary*15/100;
    DA=salary*30/100; 
  }
  else if (salary<=30000)
  {
    HRA=salary*20/100;
    DA=salary*35/100; 
  }
  else if (salary>30000)
  {
    HRA=salary*25/100;
    DA=salary*40/100; 
  }
  gross=HRA+DA+salary;
  printf("total gross salary = %.2f",gross);
 
 getch();

}