#include<stdio.h>
int celsius()
{
  
   float cel,fernhit;

    printf("enter the celsius = ");
	scanf("%f",&cel);

    fernhit=cel*9/5+32;
	 
  return fernhit;
}
int main()
{
    float x=celsius();
    printf("fernhit = %.2f",x);    
}    