#include<stdio.h>
#include<conio.h>
void main()
	    //even number  sum up to n print sum=sum+i
{
  int i,n,sum=0;
  clrscr();
  printf("enter the number =");
  scanf("%d",&n);
  for(i=2; i<=n; i=i+2)            //i+=2 pn lakhi sakay
  {sum=sum+i;
   printf("%d\t",i);
  }
  printf("\n total sum odd number = %d",sum);
getch();
}
