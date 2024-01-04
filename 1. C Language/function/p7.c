#include<stdio.h>
int leapyear()
{
	int a;
	printf("enter the A = ");
	scanf("%d",&a);
	
	if(a%4==0)
	{
		printf("yes it is leapyear");
	}
	else
	{
		printf("no it is not leap year");
	}
	
	return a;
}
int main()
{
	leapyear();
    
}