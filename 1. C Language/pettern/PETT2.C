#include<stdio.h>
#include<conio.h>
void main()
{ int i,j;                          //nested for loop
  clrscr();
   for(i=5; i>=1; i--)         //raw
       { for(j=5; j>=1; j--)   //colam
	 printf("%d ",i);
	 printf("\n");
       }
getch();
}
