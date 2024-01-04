#include<stdio.h>
void main()
{  // enter one value find its divisible by 5 or not     (a%5==0)

   int a;
   printf("enter the value = ");
   scanf("%d",&a);

 if (a%5==0)
 {
    printf("yes is divisible 5 = %d",a);
 }
 else
 {
    printf("not divisible 5 = %d",a);
 }
getch();  
 
}
