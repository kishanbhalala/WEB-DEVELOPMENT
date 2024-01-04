//no argument with return

#include<stdio.h>
/*int addition()
{
  int a,b;
  printf("enter A =");
  scanf("%d",&a);
  printf("enter B =");
  scanf("%d",&b);
  
  return a+b;

}
int main()
{  
    int x=addition();
    printf("addition = %d",x);

}*/

float addition()
{
  float a,b;
  printf("enter A =");
  scanf("%f",&a);
  printf("enter B =");
  scanf("%f",&b);
  
   return a+b;

}
int main()
{  
    float x=addition();
	printf("addition = %.2f",x);
	
}
