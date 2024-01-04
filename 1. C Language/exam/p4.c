//write a c program to check given number is an armstrong or not
#include<stdio.h>
void main()
{
	int n,sum=0,arm,a;
	
	printf("enter number = ");
	scanf("%d",&n);
	
	a=n;                   
	
	while(n>0)
	{
		arm=n%10;
		sum=sum+(arm*arm*arm);
		n=n/10;
	}
	if(a==sum)
	{
		printf("yes armstrong number");
	}
	else
	{
		printf("not armstrong number");
	}	
}
/* 153 = 1*1*1 = 1
        5*5*5 = 125
		3*3*3 = 27
		
		total sum 1+125+27 = 153 armstrongnumber
*/