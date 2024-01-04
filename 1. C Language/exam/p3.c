//write a c program to find the sum of digits in a number 
#include<stdio.h>
void main()
{
	int i,n,sum=0,a;
	
	printf("enter = ");
	scanf("%d",&n);
	
	/*while(n>0)
	{
		a = n%10;
		sum = sum+a;        // digit sum 
		n = n/10;
	}
	printf("%d ",sum);*/
	
	for (i=1; i<=n; i++)
	{
		printf("%d ",i);
		sum=sum+i;	
	}
	printf("\nsum is = %d ",sum);
}