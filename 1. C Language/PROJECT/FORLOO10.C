#include<stdio.h>
#include<conio.h>
void main()
	    //A,c,E,g,I....print series
{
  char i;
  clrscr();
 // printf("enter the up to limit =");
 // scanf("%d",&n);
  for(i=65; i<=90; i++)
 { if(i%2!=0)
  {
   printf("%c\t",i);
   i=i+2;
   printf("%c\t",i+32);
   i=i+1;
  }
 }
getch();
}