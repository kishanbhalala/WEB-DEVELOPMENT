#include<stdio.h>
void main()
{
  int i,j,sp=20;
  
  i=1;
  while(i<=5)
  {
      j=1;
      while(j<=sp)
      {
         printf("  ");   //2 space
         j++;
      }
      j=1;
      while(j<=i)
      {
         printf("* ");
         j++;
      }
  
      sp--;
      printf("\n");
      i++;    
 
  }

}