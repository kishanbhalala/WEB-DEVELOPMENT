// write a c program using function to generate the fibonaci series 
//   using  recursion
#include<stdio.h>
int fibonaci(int n)
{
	if(n==0)
		return 0;
	else if (n==1)
		return 1;
	else 
		return fibonaci(n-1) + fibonaci(n-2);
}

int main()
{
	int i,n;
	
	printf("enter the number = ");
	scanf("%d",&n);
	
	for(i=0; i<n; i++)
	{
		printf("%d ",fibonaci(i));
	}
}
