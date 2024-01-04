#include<stdio.h>
int series(int i,int n)
{
	for(i=1; i<=n; i++)
		printf("%d ",i*i);
}
int main()
{
	int i,n;
	
	printf("enter value = ");
	scanf("%d",&n);
	
	
	series(i,n);
}