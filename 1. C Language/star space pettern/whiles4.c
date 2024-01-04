#include<stdio.h>
void main()
{
  int i,j,sp=15;
 
  i=1;
  while(i<=5)
  {
     j=1;
     while(j<=sp)
     {
        printf(" ");
        j++;
     }
     j=i;
     while(j<=5)
     {
        printf("* ");
        j++;
     }

    printf("\n");
    i++;
   
  }

}