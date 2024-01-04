#include<stdio.h>
int pettern(int i,int j,int a)
{
	i=1;
	do
	{
		j=1;
		do
		{
			printf("%c ",a++);
			j++;
		}while(j<=i);
		
		printf("\n");
     i++;
	}while(i<=5);
}
int main()
{
	int i,j,a=65;
	
	pettern(i,j,a);
}