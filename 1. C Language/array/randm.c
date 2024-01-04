#include<stdio.h>
#include<stdlib.h>
void main()
{

  int a,i,j,b=0;

  for(i=1; i<=5; i++)
  {
	for(j=1; j<=5; j++)
      {   
           a=rand()%50+1;
           printf("%d ",a);
           if(b<a)
           b=a;
      }
      printf("\n");
  }
 
  printf("\nmax  : %d",b);


}