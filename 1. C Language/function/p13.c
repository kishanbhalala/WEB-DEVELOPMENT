#include<stdio.h>
int convert(float inch,float cm)
{
	printf("cenetemeter  is = %.2f",inch*cm);
}
int main()
{
	float inch,cm=2.54;
	
	printf("enter the inch = ");
	scanf("%f",&inch);
	
	convert(inch,cm);
}