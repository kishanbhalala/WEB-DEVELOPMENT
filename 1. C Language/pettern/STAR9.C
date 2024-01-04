#include<stdio.h>
#include<conio.h>
void main()
{
  int i,j,s,sp=35;
  clrscr();
  for(i=1; i<=5; i++)
  {    for(s=1; s<=sp; s++)
       {
	 printf(" ");   //1 space
       }
       for(j=1; j<=i; j++)
       {
	 if(i==5 || j==1 || j==i )
	 {
	   printf("* ");
	 }
	 else
	 {
	   printf("  "); //2 space
	 }
       }
       printf("\n");
       sp--;
  }
getch();
}