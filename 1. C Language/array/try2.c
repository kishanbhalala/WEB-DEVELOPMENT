#include<stdio.h>
void main()
{
  int a[5],b[5];
  int i;

  for(i=0; i<5; i++)
  {
     printf("enter A = ");
     scanf("%d",&a[i]);
  }  
     printf("\n");
  for(i=0; i<5; i++)
  {
     printf("enter B = ");
     scanf("%d",&b[i]);
  }

     printf("\nA \tB \tTotal");

  for(i=0; i<5; i++)
  {
     printf("\n%d \t%d \t%d",a[i],b[i],a[i]+b[i]);
  }

}