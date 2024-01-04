#include<stdio.h>
void main()
{ 
   int i,n;
                        
     printf("enter the value =");
     scanf("%d",&n);

   i=-n;                            //exp=1
   do
   {
     printf("%d\t",i);
     i++;                           //exp=3 
   }
   while(i<=n);                     //exp=2 

}




// -n to n print