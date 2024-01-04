#include<stdio.h>
void main()
{
   int i,j;

   i=1;
   while(i<=5)          //rows
   { 
       j=1;
       while(j<=5)      //colm
       {
           printf("%d ",i);
           j++;       
       }
 
       printf("\n");
       i++; 
   }
 
}