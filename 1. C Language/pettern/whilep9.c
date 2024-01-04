#include<stdio.h>
void main()
{
  int i,j,a=11;

  i=1;
  while(i<=5)
  {
       j=1;
       while(j<=5)
       {
            printf("%d ",a++);
            j++;
       }
    
       printf("\n");
       i++;
       a=a+5;
  }

}