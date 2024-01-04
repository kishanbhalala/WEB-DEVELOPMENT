//write ac program to check given number is perfect or not
#include<stdio.h>
void main()
{
	int i,n,sum=0;
	
	printf("enter = ");
	scanf("%d",&n);
	
	for(i=1; i<n; i++)
	{
		if(n%i==0)
		{
			sum=sum+i;
			printf("%d ",i);
		}
	}
	if(sum==n)
	{
		printf("\n%d is perfect num",n);
	}
	else
	{
		printf("\n%d is not perfect",n);
	}
	
}