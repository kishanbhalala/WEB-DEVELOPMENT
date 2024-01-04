#include<stdio.h>
void main()
{  
   int  i,n;
   printf("enter up to value = ");
   scanf("%d",&n);

   i=1;                                //exp1
   while(i<=n)                       //exp2  
   {
     if(i%2==0)
     {
        printf("%d\t",i*i);
     }
   else
     {
        printf("%d\t",i);  
     }
  
     i++;                               //exp3
   }
   
}




//1,4,3,16,5.....odd, sqare series