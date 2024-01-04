#include<stdio.h>
#include<conio.h>
void main()
{  //qutation and reminder find

int a,b,c,d;
clrscr();
printf("enter the a value =");
scanf("%d",&a);
printf("enter the b value =");
scanf("%d",&b);

c=a/b;      //divide   /
d=a%b;      //modules %

printf("  quatiton = %d",c);
printf("\n  reminder = %d",d);

getch();


}