#include<stdio.h>
int fun(int n)
{
	printf("inside function = %d\n",n);
	
	if(n<4)
	{
		fun(++n);
	}
	printf("after condition = %d\n",n);
}
void main()
{
	fun(1);
}