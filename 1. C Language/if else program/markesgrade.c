#include<stdio.h>
void main()
{ int hindi,guj,eng,total,grade;
 float per;

 printf("1.hindi markes = ");
 scanf("%d",&hindi);
 printf("2.gujrati markes = ");
 scanf("%d",&guj);
 printf("3.english markes = ");
 scanf("%d",&eng);
 

total=hindi+guj+eng;
printf("total markes = %d",total);
per=(float)total/3; 
printf("\ntotal percentage = %.2f\n",per);

if (per<1 || per>100)
{
   printf("invalid per");
}
else if (per>75)
{
   printf("grade A");
}
else if (per>60 && per<=75)
{
    printf("grade B");
}
else if (per>45 && per<=60)
{
    printf("grade C");
}
else if (per>35 && per<=45)
{
    printf("grade D");
}
else
printf("fail");

getch();
}