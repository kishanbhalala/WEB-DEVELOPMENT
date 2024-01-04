#include<stdio.h>
void display(int hindi, int gujrati, int english, int total, float per)
{
	printf("hindi markes = %d\n",hindi);
	printf("gujrati markes = %d\n",gujrati);
	printf("english markes = %d\n",english);
	printf("\nTotal markes = %d\n",total);
	if(per<33 || hindi<33 || gujrati<33 || english<33)
		printf("percentage = --\n");
	else
		printf("percentage = %2f\n",per);
}
void calc(int hindi, int gujrati, int english)
{
	int total;
	float per;
	
	total=hindi+gujrati+english;
	per=(float)total/3;
	
	display(hindi,gujrati,english,total,per); 
	{
		if(hindi<33 || gujrati<33 || english<33)
			printf("Fail\n");
		else if(per>80)
			printf("grade A\n");
		else if(per>60 && per<=80)
			printf("grade B\n");
		else if(per>33 && per<=60)
			printf("grade C\n");
	}
}
void sub()
{
	int hindi,gujrati,english;
	
	printf("enter the markes \n");
	scanf("%d%d%d",&hindi,&gujrati,&english);
	
	calc(hindi,gujrati,english);
}
int main()
{
	sub();
}