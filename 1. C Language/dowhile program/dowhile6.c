#include<stdio.h>
void main()
{ 
   int i,n;
                        
     printf("enter the value =");
     scanf("%d",&n);

   i=1;                            //exp=1
   do
   {
     printf("%d\t",i);
     i=i+2;                           //exp=3 
   }
   while(i<=n);                     //exp=2 

}




// odd number print