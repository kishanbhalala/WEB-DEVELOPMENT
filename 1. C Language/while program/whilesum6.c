#include<stdio.h>
void main()
{  
   int  i,n,a=1;
   printf("enter up to value = ");
   scanf("%d",&n);

   i=1;                                //exp1
   while(i<=n)                       //exp2  
   {
     printf("%d\t",i*a);
     a=a*2;
     i++;                               //exp3
   }
   
 	
}




//1,4,12,32,80.... series