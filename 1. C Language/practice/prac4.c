#include<stdio.h>
void main()
{
  int arr[5],i,inch;
  float a,cm=2.54;

  for(i=0; i<5; i++)
  {
     printf("enter the inches = ");
     scanf("%d",&arr[i]);
  }
  for(i=0; i<5; i++) 
  {
     a=arr[i]*cm;
     printf("\ntotal = %.2f",a);
  }


}