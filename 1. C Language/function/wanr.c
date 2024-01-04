//with argument no return
#include<stdio.h>
int addition(int x,int y)
{
	printf("addition is = %d",x+y);
}
int main()
{
	int x,y;
	
	printf("enter the x and y = ");
	scanf("%d%d",&x,&y);
	
	addition(x,y);
}
/*
float addition(int x,float y)
{
	printf("addition is = %.2f",x+y);
}
int main()
{
	float x,y;
	
	printf("enter the x and y = ");
	scanf("%f%f",&x,&y);
	
	addition(x,y);
}*/