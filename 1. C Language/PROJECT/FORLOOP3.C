#include<stdio.h>
#include<conio.h>
void main()
	    //1,4,9,16,25.....print sqare      (1*1)(2*2)(3*3)
{
  int i,n;
  clrscr();
  printf("enter the up to limit =");
  scanf("%d",&n);
  for(i=1; i<=n; i++)
  {
   printf("%d,",i*i);
  }

getch();
}
