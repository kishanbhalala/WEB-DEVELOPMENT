#include<stdio.h>
void main()
{
  int a[10],i;
  int odd=0,even=0;

  for(i=0; i<10; i++)
  {
     printf("index a[%d] =",i);
     scanf("%d",&a[i]);
  }
  for(i=0; i<10; i++) 
  {
     if(a[i]%2==0)
     {
         even=even+a[i];
     }
     else
     {
         odd=odd+a[i];
     }
  }
  for(i=0; i<1; i++)
  {
       printf("\n even sum = %d",even);
       printf("\n odd sum = %d",odd);
  }
  
}