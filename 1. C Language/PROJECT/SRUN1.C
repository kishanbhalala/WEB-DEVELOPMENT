#include<stdio.h>
#include<conio.h>
void main()
{
   int maths,eng,total;
   float per;
   clrscr();
   printf("maths mark = ");
   scanf("%d",&maths);
   printf("eng mark = ");
   scanf("%d",&eng);
    total=maths+eng;
    printf("\ntotal = %d",total);
    per=(float)total/2;
    printf("\n percentage = %.2f",per);
    getch();


}