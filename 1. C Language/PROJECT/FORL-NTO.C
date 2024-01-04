#include<stdio.h>
#include<conio.h>
void main()
	    // -n to n  (any count) print
{
  int i,n;
  clrscr();
  printf("any number =");
  scanf("%d",&n);
  for(i=-n; i<=n; i++)
  {
   printf("%d\t",i);
  }
getch();

}