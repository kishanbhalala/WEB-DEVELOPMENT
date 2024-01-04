#include<stdio.h>
#include<conio.h>
void main ()
{
 int guj=88,sci=77,eng=75,hindi=82,com=85,total;
 float per;
     clrscr();
  printf("gujrati markes: %d",guj);
  printf("\nscience markes: %d",sci);
  printf("\nenglish markes: %d",eng);
  printf("\nhindi markes: %d",hindi);
  printf("\ncomputer markes: %d",com);

 total =guj+sci+eng+hindi+com;
   printf("\ntotal markes %d",total);
  per = (float)total /5;
   printf("\npercentage: %.2f",per);

  getch();

}
