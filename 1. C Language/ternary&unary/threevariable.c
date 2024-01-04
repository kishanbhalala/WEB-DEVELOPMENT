#include<stdio.h>
void main()
{
int a,b,c,large;
printf("enter the variable \n");
scanf("%d%d%d",&a,&b,&c);

large=a>b?(a>c?a:c):(b>c?b:c);
printf("\n large = %d",large);


getch();






}