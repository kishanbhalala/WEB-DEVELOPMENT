#include<stdio.h>
void main()
{  // enter year find its leap year or not

   int a;
   printf("enter the year = ");
   scanf("%d",&a);

 if (a%4==0)
 {
    printf("yes this leap year");
 }
 else
 {
    printf("no this not leap year");
 }
getch();  
 
}
