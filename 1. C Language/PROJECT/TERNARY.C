#include<stdio.h>
#include<conio.h>
void main()
{ // ternary oparator condition ? true : false
 int a,b,c,large;
 clrscr();
 printf("enter the value\n");
 scanf("%d%d%d",&a,&b,&c);
// a>b?printf("%d is large",a):printf("%d is large",b);  // 2 variable hoi tyre
large=a>b?(a>c?a:c):(b>c?b:c);
 printf("\n largest number is = %d",large);
getch();


}