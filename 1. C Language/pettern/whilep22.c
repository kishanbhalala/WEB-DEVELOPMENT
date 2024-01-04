#include<stdio.h>
void main()
{
  int i,j;

  i='A';
  while(i<='E')
  {
       j=i;
       while(j>='A')
       {
            printf("%c ",j);
            j--;
       }
    
       printf("\n");
       i++;
      
  }

}