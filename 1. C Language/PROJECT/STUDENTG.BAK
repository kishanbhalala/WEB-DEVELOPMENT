#include<stdio.h>
#include<conio.h>
void main()
{ int hindi,eng,guj,total;
  float per;
  clrscr();
   printf("enter the subject markes\n");
   scanf("%d%d%d",&hindi,&eng,&guj);
   total=hindi+eng+guj;
   printf("\ntotal markes = %d",total);
  per=(float)total/3;
  printf("\ntotal percentage = %.2f\n",per);

if(per<1 || per>100)
  printf("invalid markes");
else if(per>75)
  printf("grade A");
else if(per>60 && per<=75)
  printf("grade B");
else if(per>45 && per<=60)
  printf("grade C");
else if(per>35 && per<=45)
  printf("grade D");
else
  printf("fail");
getch();
}