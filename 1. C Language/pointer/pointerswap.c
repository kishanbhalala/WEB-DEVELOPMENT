#include<stdio.h>
int main()
{
	int i,j,*a,*b,c;
	
	printf("enter the value = ");
	scanf("%d",&i);
	printf("enter the value = ");
	scanf("%d",&j);
	
	printf("befor swapp\ni = %d\nj = %d\n",i,j);
	a=&i;
	b=&j;
	
	c=*a;
	*a=*b;
	*b=c;
	
	printf("after swapp\ni = %d\nj = %d\n",i,j);
	//printf("\nswapping value is = %d\n",i);
	//printf("swapping value is = %d",j);
}