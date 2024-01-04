#include<stdio.h>
void main()
{
  int i,j,sp=30;
  
  i=1;
  do
  {
      j=1;
      do
      {
         printf(" ");
         j++; 
      }while(j<=sp);  
         
      j=1;
      do
      {
         printf("* ");
         j++;
      }while(j<=i);

    
      sp--;
      printf("\n");
      i++;
  }while(i<=5);
  
}