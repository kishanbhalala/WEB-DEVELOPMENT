//with argument with return
#include<stdio.h>
int addition(int x,int y)
{
	return x+y;
}
int main()
{
	int x,y,k;
	
	printf("enter the x and y = ");
	scanf("%d%d",&x,&y);
	
	k=addition(x,y);
	printf("value of k is = %d",k);
}

/*int addition(float x,int y)
{
	return x+y;
}
int main()
{
	float x,y,k;
	
	printf("enter the x and y = ");
	scanf("%f%f",&x,&y);
	
	k=addition(x,y);
	printf("value of k is = %.2f",k);
}*/