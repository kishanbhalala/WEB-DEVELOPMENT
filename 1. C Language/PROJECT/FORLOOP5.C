#include<stdio.h>
#include<conio.h>
void main()
	    //1,2,4,8,16....i=i*2 series print
{
  int i,n;
  clrscr();
  printf("enter the up to limit =");
  scanf("%d",&n);
  for(i=1; i<=n; i=i*2)
  {
   printf("%d\t",i);
  }
getch();
}
