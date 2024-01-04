#include<stdio.h>
#include<conio.h>
void main()
	    //0.5,1,2.5,5......printf series
{
  float i,n,a=0.5;
  clrscr();
  printf("enter the up to limit =");
  scanf("%f",&n);
  for(i=0.5; i<=n; i++)
 {
   printf("%.2f\t",a);
   a=a+i;
 }
getch();
}
