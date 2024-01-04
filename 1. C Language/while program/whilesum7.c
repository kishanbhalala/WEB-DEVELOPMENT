#include<stdio.h>
void main()
{  
   int  i,n,a=1,b=0,c;
   printf("enter up to value = ");
   scanf("%d",&n);

   i=1;                                //exp1
   while(i<=n)                       //exp2  
   { 
     c=a+b;
     a=b;
     b=c;

     printf("%d\t",c);
    
     i++;                               //exp3
   }
   
 	
}




//1,1,2,3,5,8.... series