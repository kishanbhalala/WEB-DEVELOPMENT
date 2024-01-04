#include<stdio.h>
int m,s,e,total;
float per;

void display()
{
	printf("maths\tscience\tenglish\tTotal\tper");
	printf("\n%d\t%d\t%d\t%d\t%.2f",m,s,e,total,per);
}
void calc()
{
	total=m+s+e;
	per=(float)total/3;
	
	//display();
}
void set()
{
	printf("enter maths mark = ");
	scanf("%d",&m);
	printf("enter science mark = ");
	scanf("%d",&s);
	printf("enter english mark = ");
	scanf("%d",&e);
	
	//calc();
}
int main()
{
	set();
	calc();
	display();
}