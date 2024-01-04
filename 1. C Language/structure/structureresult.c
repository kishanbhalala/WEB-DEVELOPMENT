#include<stdio.h>
struct student
{
	int rollno,hindi,english,gujrati,total;
	float per;
	char name[50];
};
int main()
{
	struct student a[5];
	int i;
	
	for(i=0; i<2; i++)
	{
		printf("enter roll number = ");
		scanf("%d",&a[i].rollno);
		printf("enter name = ");
		scanf("%s",&a[i].name);
		printf("enter hindi markes = ");
		scanf("%d",&a[i].hindi);
		printf("enter english markes = ");
		scanf("%d",&a[i].english);
		printf("enter gujrati markes = ");
		scanf("%d",&a[i].gujrati);
		
		printf("\n");
		
	}
	printf("\nrollno\tname\thindi\tenglish\tgujrati\t total\t per\n");
	for(i=0; i<2; i++)
	{
		a[i].total=a[i].hindi+a[i].english+a[i].gujrati;
		a[i].per=(float)(a[i].total)/3;
		
		printf("%d\t%s\t%d\t%d\t%d\t%d\t%.2f\n",a[i].rollno,
		a[i].name,a[i].hindi,a[i].english,a[i].gujrati,a[i].total,a[i].per);
	}
		
}