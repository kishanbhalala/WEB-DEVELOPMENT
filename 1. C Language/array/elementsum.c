#include<stdio.h>
void main()
{
  int arr[10],i;
  int sum=0;
 
  for(i=0; i<10; i++)
  {
     printf("index arr[%d] = ",i);
     scanf("%d",&arr[i]);
  }
  for(i=0; i<10; i++)
  {  
     sum=sum+arr[i];
    // printf("%d\t",arr[i]);
  }
     
     printf("\n total sum = %d",sum);
}