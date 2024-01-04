#include<stdio.h>
int lightbill()
{
	float bill,unit,surcharge;
	
	printf("enter the unit =");
	scanf("%f",&unit);
	
	if(unit<=100)
	{
		bill=unit*0.60+50;
		printf("100 under total charge = %.2f",bill);
	}		
	else if(unit>100 && unit<=300)
	{
		bill=60+(unit-100)*0.80+50;
		printf("101 to 300 under charge = %.2f",bill);
	}
	else
	{
		bill=60+160+(unit-300)*0.90+50;
		printf("300 up unit charge = %.2f",bill);
	}
	
	if(bill>300)
	{
		surcharge=(bill*15/100)+bill;
		printf("\n300 rs up bill of surcharge = %.2f",surcharge);
	}
}
int main()
{
	printf("light bill\n");
    lightbill();
	printf("\n..........");
}