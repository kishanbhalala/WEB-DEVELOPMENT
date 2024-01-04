#include<stdio.h>
void main()
{  
   int  i,n,sum=0;
   printf("enter up to value = ");
   scanf("%d",&n);
   i=2;                                //exp1
   while(i<=n)                       //exp2  
   {  
      sum=sum+i; 
      printf("%d +\t",i);
      i=i+2;                         //exp3
   }
   printf("\n total sum is = %d",sum);
 	
}




//even number sum up to n