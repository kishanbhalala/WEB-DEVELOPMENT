#include<stdio.h>
int main()
{
	int a=20,*p,**q;
	p=&a;
	q=&p;
	
	printf("value of a is = %d",a);
	printf("\naddress of a is = %u",&a);
	
	printf("\naddress of a is using p is = %d",p);
	printf("\naddress of p is = %u",&p);
	
	printf("\nvalue of a using q is = %d",*p);
	
	printf("\naddress of p is using q is = %d",q);
	printf("\naddress of q is = %u",&q);
	printf("\naddress of a using p = %d",**q);
} 

//pointer = store to address