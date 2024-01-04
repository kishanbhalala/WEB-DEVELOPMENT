#include<stdio.h>
void main()
{
  int i,j;

  i=1;
  while(i<=5)
  {
       j=1;
       while(j<=5)
       {
            printf("%d ",i*2);
            j++;
       }
    
       printf("\n");
       i++;
  }

}