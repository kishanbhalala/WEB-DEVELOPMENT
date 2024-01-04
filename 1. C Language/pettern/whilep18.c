#include<stdio.h>
void main()
{
  int i,j,a=97;

  i=1;
  while(i<=5)
  {
       j=1;
       while(j<=i)
       {    
          if(j%2==1)
          { 
             printf("%c ",a);
          }
          else
          {
             printf("%c ",a-32);
          }
          j++;
          a++;
       } 
       printf("\n");
       i++;
  }

}