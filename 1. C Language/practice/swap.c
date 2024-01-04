/*#include<stdio.h>
void main()
{
  int a,b,c;                      //using third value swap
                             
  printf("A value \n");           
  scanf("%d",&a);
  printf("B value \n");
  scanf("%d",&b);

  c=a;
  a=b;
  b=c;
  
  printf("\nA swap = %d",a);
   printf("\nB swap = %d",b);

}*/

#include<stdio.h>
void main()
{
  int a,b;                       //without third value swap
 
  printf("A value \n");
  scanf("%d",&a);
  printf("B value \n");
  scanf("%d",&b);

  a=a+b;
  b=a-b;
  a=a-b;
  
  printf("\nA swap = %d",a);
   printf("\nB swap = %d",b);

}