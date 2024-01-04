#include<stdio.h>
int series(int i)
{
	return i;
}
int main()
{
	int i,n,k;
	
	printf("up to = ");
	scanf("%d",&n);
	
	for(i=2; i<=n; i+=2)
		printf("%d\t",i);
		
	k=series(i);

}