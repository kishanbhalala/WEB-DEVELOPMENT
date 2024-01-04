#include<stdio.h>
float triangle(float area,float length)
{
	float x;
	x=(1.73/4)*length*length;
	return x;
}
int main()
{
	float area,length,k;
	
	printf("enter the length = ");
	scanf("%f",&length);
	
	k=triangle(area,length);
	printf("area of triangle = %.2f",k);
}