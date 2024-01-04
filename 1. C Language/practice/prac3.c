#include<stdio.h>
void main()
{
  int i,j,sp=30;
  
  for(i=1; i<=5; i++)
  {
     for(j=1; j<=sp; j++)
     {
         printf(" ");
     }
     for(j=5; j>=i; j--)
     {   
         if(i==1|| j==5|| i==j)
         {
              printf("* ");
         }
         else
         {
              printf("  ");
         }
     }
     sp++;
     printf("\n");
  }
 
}