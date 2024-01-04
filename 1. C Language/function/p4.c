#include<stdio.h>
int simpleintrest()
{
   float intrest,amt,year,fi;
   

    printf("enter the amount = ");
	scanf("%f",&amt);
	printf("enter the intrest = ");
	scanf("%f",&intrest);
	printf("enter the year = ");
	scanf("%f",&year);
	
	fi=intrest*amt*year/100;
	
	return fi;
}
int main()
{  
	printf("this is simple intrest\n");
	float x=simpleintrest();
	printf("final intrest = %.2f",x);
	printf("\n end");
}