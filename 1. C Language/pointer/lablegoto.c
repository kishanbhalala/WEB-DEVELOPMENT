#include<stdio.h>
void main()
{
	int i=1,n;
	
	printf("enter number = ");
	scanf("%d",&n);
	
	lable:
	if(i <= 10)
	{
		printf("%d * %d = %d\n",n,i++,n*i);
		goto lable;	
	}	
}