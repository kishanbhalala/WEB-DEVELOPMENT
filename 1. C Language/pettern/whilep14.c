#include<stdio.h>
void main()
{
  int i,j,a=1;

  i=1;
  while(i<=5)
  {
       j=1;
       while(j<=i)
       {
            printf("%d ",a++);
            j++;
       }
    
       printf("\n");
       i++;
      
  }

}