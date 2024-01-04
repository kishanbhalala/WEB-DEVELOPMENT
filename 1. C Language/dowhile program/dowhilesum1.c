#include<stdio.h>
void main()
{ 
   int i,n,sum=0;
                        
     printf("enter the value =");
     scanf("%d",&n);

   i=1;                            //exp=1
   do
   {
     sum=sum+i;
     printf("%d\t",i);
     i=i+2;                           //exp=3 
   }
   while(i<=n);                     //exp=2 
   
   printf("total sum is = %d",sum);

}




// odd number sum up to n.... print