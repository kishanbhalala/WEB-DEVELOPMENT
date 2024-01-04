#include<stdio.h>
#include<conio.h>
void main()
{ char i,a;                 //A-a,B-b,C-c.....print
  clrscr();

 for(i=65; i<=90; i++)
 { a=i+32;
  printf("%c-%c\t",i,a);
 }

 getch();

}