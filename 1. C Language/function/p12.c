#include<stdio.h>
int pettern()
{
	int i,j;
	
	for(i='A'; i<='E'; i++)
	{
		for(j=i; j>='A'; j--)
		{
			printf("%c ",j);
		}
		printf("\n");
	}
}
int main()
{
	
  pettern();

}