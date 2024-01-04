#include<stdio.h>
void main()
      // simple intrest year= /100,month= /(12*100),days= /(365*100)
{ float amount,intrest,year,fi;

printf("enter the amount =");
scanf("%f",&amount);
printf("enter the intrest =");
scanf("%f",&intrest);
printf("enter the year =");
scanf("%f",&year);

fi=amount*intrest*year/100;
printf("/nfinal intrest = %.2f",fi);

getch();



}

