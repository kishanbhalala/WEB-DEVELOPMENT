#include<stdio.h>
#include<conio.h>
void main()                   //upper to lower and lower to uper case convert
{ char ch;
 clrscr();
 printf("enter the character = ");
 scanf("%c",&ch);

if(ch>=65 && ch<=90)
 { ch=ch+32;
   printf("small character = %c",ch);
 }
else if(ch>=97 && ch<=122)
 { ch=ch-32;
   printf("capital character = %c",ch);
 }

getch();

}