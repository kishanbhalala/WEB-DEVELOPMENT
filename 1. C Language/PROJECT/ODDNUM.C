#include<stdio.h>
#include<conio.h>
void main()
	    //odd number up to n print
{
  int i,n;
  clrscr();
  printf("enter the number =");
  scanf("%d",&n);
  for(i=1; i<=n; i=i+2)            //i+=2 pn lakhi sakay
  {
   printf("%d\t",i);
  }
getch();
}
