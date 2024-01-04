#include<stdio.h>
void main()
{
  int i,j,a='A';
  i=1;
  do
  {
      j=1;
      do
      {
          printf("%c ",a++);
          j++;
      
      }while(j<=5);
    
    printf("\n");
    i++; 
  }while(i<=5);

}