#include<stdio.h>
void main()
//swapping value without using third variable

{int a,b;
printf("enter the value \n");
scanf("%d%d",&a,&b);

a=a+b;
b=a-b;
a=a-b;

printf(" after swapping = %d",a);
printf("\nafter swapping = %d",b);

getch();



}