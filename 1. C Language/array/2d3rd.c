#include<stdio.h>
void main()
{
  int arr[3][3];
  int i,j,a=0,b=0,c=0;

  for(i=0; i<3; i++)
  {  
      for(j=0; j<3; j++)
      {
            printf("index[%d][%d] = ",i,j);
            scanf("%d",&arr[i][j]);
      }
  }
  
  printf("\n");
  for(i=0; i<3; i++)
  {   
      for(j=0; j<3; j++)
      {  
         printf("%d ",arr[i][j]);
         if(i==j)
         {
            a=a+arr[i][j]; 
         }
         else if(i<j)
         {
             b=b+arr[i][j]; 
         }
         else if(i>j)
         {
             c=c+arr[i][j]; 
         }
      }
      printf("\n");
  }
  printf("\n sum is diagonal = %d = ",a);
  printf("\n sum is upper tringle = %d",b);
  printf("\n sum is lower tringle = %d",c);
 
}