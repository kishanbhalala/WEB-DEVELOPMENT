#include<stdio.h>
#include<conio.h>
void main()                   /* (++),(--)increment/decrement
				(a++,a-- post)    (++a,--a pre) */
{ int a=5,b;
 clrscr();                    // a++=a+1   a--=a-1
  a=5;                        // a=5+1=6   a=5-1=4
  b=a++;

 printf("1.= %d",a);
 printf("\n2.= %d",b);
getch();





}