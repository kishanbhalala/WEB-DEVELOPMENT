#include<stdio.h>
void main()
{
	int i,j;
	int a[10] = {'k','i','s','h','a','n'};
	
	for(i=0; i<=5; i++)
	{
		for(j=0; j<=i; j++)
		{
			printf("%c ",a[j]);
		}
		printf("\n");
	}
} 
/*
#include<stdio.h>
#include<string.h>
void main()
{
	char a[]="hello";
	int len = strlen(a);
	int i,j;
	
	for(i=0; i<len; i++)
	{
		for(j=0; j<=i; j++)
		{
			printf("%c ",a[j]);
		}
		printf("\n");
	}
}
*/