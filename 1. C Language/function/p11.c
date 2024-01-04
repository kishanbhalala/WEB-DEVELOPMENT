#include<stdio.h>
int pettern()
{
	int i,j,a=10;
	
	for(i=1; i<=5; i++)
	{
		for(j=1; j<=5; j++)
		{
			printf("%d ",a++);
		}
		printf("\n");
		a=a+5;
	}
}
int main()
{
	pettern();
}