#include<stdio.h>
void main()
{  
   int  i,n;
   printf("enter up to value = ");
   scanf("%d",&n);

   i=1;                                //exp1
   while(i<=n)                       //exp2  
   {
     printf("%d\t",i);
     i=i*2;                               //exp3
   }
   
 	
}




//1,2,4,8,16.... series