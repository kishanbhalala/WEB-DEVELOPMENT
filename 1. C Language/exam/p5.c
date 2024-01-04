#include<stdio.h>
void main()
{
	int a,b,c,d,e,total,grade;
	float per;
	
	printf("enter 5 subject = \n");
	scanf("%d%d%d%d%d",&a,&b,&c,&d,&e);
	
	total = a+b+c+d+e;
	per = (float)total/5;
	
	printf("\nsubject total = %d",total);
	printf("\npercentage = %.2f",per);
	
	if(per>80)
		printf("\ngrade A");
	else if(per>70)
		printf("\ngrade B");
	else if(per>65)
		printf("\ngrade C");
	
}