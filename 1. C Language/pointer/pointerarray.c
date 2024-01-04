#include<stdio.h>
int main()
{
	int a[5]={10,30,44,55,66,};
	int *p,i;
	p=&a;
	
	for(i=0; i<5; i++)
	{
		//printf("%d\t%u\n",a[i],&a[i]);
		printf("%d\t%u\n",*(p+i),(p+i));
		
	}
}