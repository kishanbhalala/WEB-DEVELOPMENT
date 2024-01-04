#include<stdio.h>
void main()
{ 
   int i,n,a=1;
                        
     printf("enter the value =");
     scanf("%d",&n);

   i=1;                            //exp=1
   do
   { 
     printf("%d\t",i*a);
     a=a*2; 
     i++;                              //exp=3 
   }
   while(i<=n);                     //exp=2 
   

}




// 1,4,12,32.... print