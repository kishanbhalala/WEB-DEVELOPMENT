#include<stdio.h>
int tree(int n)
{   
    int sp=30;
	
	for(int i=1; i<=n; i++)
	{
		for(int j=1; j<=sp; j++)
		{
			printf(" ");
		}
		for(int j=1; j<=i; j++)
		{
			printf("* ");
		}
		printf("\n");
        sp--;
	}
	
}
int main()
{
	tree(3);
	tree(5);
	tree(7);
	
}