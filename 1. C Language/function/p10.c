#include<stdio.h>
int ABCD()
{
	int i,a;
	
	i=65;
	do
	{
		a=i+32;
		printf("%c-%c ",i,a);
		i++;
		
	}while(i<=90);
	
	
}
int main()
{
	ABCD();
}