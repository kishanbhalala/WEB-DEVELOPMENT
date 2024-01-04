#include<stdio.h>
void main()
{
  int i,j;

  i='A';
  do
  {
       j='A';
       do
       {
           printf("%c ",i);
           j++;

       }while(j<='E');

    printf("\n");
    i++;
  
  }while(i<='E');

}
  
