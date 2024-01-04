#include<stdio.h>
void main()
{ 
   int n,i=1;                        //exp=1
   printf("enter the value =");
   scanf("%d",&n);
   do
   {
     printf("%d\t",i);
     i++;                           //exp=3 
   }
   while(i<=n);                     //exp=2 

}




// 1 to n print