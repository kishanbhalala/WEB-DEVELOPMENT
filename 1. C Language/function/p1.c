#include<stdio.h>
int result()
{
   int hindi,eng,guj,total;
   float per;

    printf("hindi markes = ");
	scanf("%d",&hindi);
	printf("english markes = ");
	scanf("%d",&eng);
	printf("gujrati markes = ");
	scanf("%d",&guj);
	
	total=hindi+eng+guj;
	per=(float)total/3;
	
	printf("\nTotal markes = %d",total);
	printf("\npercentage = %.2f",per);
}
int main()
{    
    printf("This is a result\n");
	result();
	printf("\nend of result");
}