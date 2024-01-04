#include<stdio.h>
int coin()
{
	int a[8]={2000,500,200,100,50,20,10,5};
	int i,n;
	
	printf("enter amount = ");
	scanf("%d",&n);
	
	for(i=0; i<8; i++)
	{
	    if(n>=a[i])
		{
			printf("\n%d notes is = %d ",a[i],n/a[i]);
			n=n%a[i];
		}
	}
}
int main()
{
	coin();
}