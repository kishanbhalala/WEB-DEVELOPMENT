#include<stdio.h>
int main()
{  // find largest number of given three number 

   int a,b,c;
   printf("enter the value\n");
   scanf("%d%d%d",&a,&b,&c);

 if (a>b)
 {
    printf("a value is large = %d",a);
 }
 else if (b>c)
 {
    printf("b value is large = %d",b);
 }
else
 { 
    printf("c value is large = %d",c);
 }
return 0; 
 
}
