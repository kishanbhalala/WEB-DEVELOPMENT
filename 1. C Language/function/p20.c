#include<stdio.h>
int star()
{
	int i,j,s,sp=30;
	
	for(i=1; i<=5; i++)
	{
		for(s=1; s<=sp; s++)
		{
			printf(" ");
		}
		for(j=1; j<=i; j++)
		{
			printf("* ");
		}
		printf("\n");
		sp--;
	}
	for(i=1; i<=4; i++)
	{
		for(s=-1; s<=sp; s++)
		{
			printf(" ");
		}
		for(j=i; j<=4; j++)
		{
			printf("* ");
		}
		printf("\n");
		sp++;
	}
}
int main()
{ 
    printf("kajuktri\n");
	star();
}