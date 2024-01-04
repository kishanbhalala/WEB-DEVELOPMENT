#include<stdio.h>
int pettern(int i)
{
	return i;
}
int main()
{
	int i,j,k;
	
	i=1;
	while(i<=5)
	{
		j=1;
		while(j<=5)
		{
			printf("%d ",i);
			j++;
		}
		printf("\n");
		i++;
	}
		
	k=pettern(i);

}