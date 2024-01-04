#include<stdio.h>
#include<conio.h>
void main()                //even number sum

{ int i,n,sum=0;
  clrscr();
  printf("enter the limit = ");
  scanf("%d",&n);
    for(i=2; i<=n; i=i+2)
    { sum=sum+i;
     printf("%d\t",i);
    }
     printf("\n total sum is even number = %d",sum);
getch();

}
