#include<stdio.h>
void main()
{
  int i,j;

  i=5;
  do
  {
       j=5;
       do
       {
           printf("%d ",i);
           j--;

       }while(j>=1);

    printf("\n");
    i--;
  
  }while(i>=1);

}
  
