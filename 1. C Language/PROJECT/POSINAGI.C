#include<stdio.h>
#include<conio.h>
void main()
{
  int value;
  clrscr();    // find positive or nagitive
  printf("enter the any value =\n");
  scanf("%d",&value);

  if(value>0)
  {
   printf("\npositive value = %d",value);
  }
  else
  {
   printf("\nnagitive value = %d",value);
  }

getch();

}