#include<stdio.h>
void main()
{
  int i,j,sp=30;
  
  i=1;
  while(i<=5)
  {   
      j=1;
      while(j<=sp)
      {
          printf(" ");
          j++;
      }

      j=1;
      while(j<=5)
      {
         if(i==1 || i==5 || j==1 || j==5)
         {
            printf("* ");
         }
         else
         {
            printf("  ");  //2 space
         }
       j++;  
      }

   printf("\n");
   i++; 
  }
  
}