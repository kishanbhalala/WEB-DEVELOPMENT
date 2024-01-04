#include<stdio.h>
void main()
{
  int i,j,sp=30;

  i=1;
  while(i<=5)
  {
       j=1;
       while(j<=sp)
       {
           printf(" ");
           j++;
       }

       j=1;
       while(j<=i)
       {   
           printf("* ");
           j++;
       }
    sp--;
    printf("\n");
    i++;
  }

  i=-1;
  while(i<=4)
  {
        j=1;
        while(j<=sp)
        {
            printf(" ");
            j++;
        }
        
        j=i;
        while(j<=4)
        {
             printf("* ");
             j++;
        }
     sp++;
     printf("\n");
     i++;
  }
 
}