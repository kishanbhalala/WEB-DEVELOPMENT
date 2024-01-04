#include<stdio.h>
void main()
{
  int i,j,a=65;
  i=1;
  do
  {
      j=1;
      do
      {   if(i%2==1)
          { 
              printf("%c ",a);
          }
          else
          {
              printf("%c ",a+32);
          }
          j++;
          a++;   
      }while(j<=i);
   
    printf("\n");
    i++;

  }while(i<=5);

}