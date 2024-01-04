#include<stdio.h>
#include<conio.h>
void main()
{ int i,j;                          //nested for loop
  clrscr();
   for(i='A'; i<='E'; i++)         //raw
       { for(j='A'; j<='E'; j++)   //colam
	 printf("%c ",i);
	 printf("\n");
       }
getch();
}
