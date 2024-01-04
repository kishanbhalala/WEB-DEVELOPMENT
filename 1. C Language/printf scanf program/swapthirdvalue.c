#include<stdio.h>
void main()
//swapping value using third variable

{int a,b,c;
printf("enter the value \n");
scanf("%d%d",&a,&b);

c=a;
a=b;
b=c;

printf(" after swapping = %d",a);
printf("\nafter swapping = %d",b);

getch();



}