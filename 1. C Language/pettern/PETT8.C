#include<stdio.h>
#include<conio.h>
void main()
{ int i,j,a='A';                          //nested for loop
  clrscr();
   for(i=1; i<=5; i++)         //raw
       { for(j=1; j<=5; j++)   //colam
	 printf("%c ",a++);
	 printf("\n");
       }
getch();
}
