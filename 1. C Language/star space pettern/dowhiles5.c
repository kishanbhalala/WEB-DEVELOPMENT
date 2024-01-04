#include<stdio.h>
void main()
{
  int i,j,sp=20;
 
  i=1;
  do
  { 
     j=1;
     do{
         printf(" ");
         j++;  
       }while(j<=sp);
 
     j=i;
     do{
         printf("* ");
         j++; 
       }while(j<=5);
 
   sp++;
   printf("\n");
   i++;
   
  }while(i<=5); 

}