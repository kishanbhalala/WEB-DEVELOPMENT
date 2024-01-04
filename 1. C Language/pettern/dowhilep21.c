#include<stdio.h>
void main()
{
  int i,j,a=1;
  i=1;
  do
  {
      j=1;
      do
      {   if(a%2==1)
          { 
              printf("1 ");
          }
          else
          {
              printf("0 ");
          }
          j++;
          a++;   
      }while(j<=i);
   
    printf("\n");
    i++;

  }while(i<=5);

}