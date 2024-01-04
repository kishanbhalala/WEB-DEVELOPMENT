#include<stdio.h>
void main()
{  
   float i,n,a=0.5;
   printf("enter up to value = ");
   scanf("%f",&n);

   i=0.5;                                //exp1
   while(i<=n)                       //exp2  
   { 

     printf("%.1f\t",a);
     a=a+i;

     i++;                               //exp3
    
   }
   
 	
}




//0.5,1,2.5,5.... series