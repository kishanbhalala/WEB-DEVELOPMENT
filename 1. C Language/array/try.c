#include<stdio.h>
void main()
{
   int a[5];   // decalre
   int i;
 
   for(i=0; i<5; i++)   // input data
   {
     printf("enter =");
     scanf("%d",&a[i]);
   }
   
   for(i=0; i<5; i++)     // printing
   {
     printf("\n a[%d]= %d",i,a[i]);
   }

}