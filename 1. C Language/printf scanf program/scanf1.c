#include<stdio.h>
void main()
{
     // three subject total and percentage

     int gujrati,hindi,english,total;
     float percentage;

     printf("gujrati markes = ");
     scanf("%d",&gujrati);
     
     printf("hindi markes = ");
     scanf("%d",&hindi);

     printf("english markes = ");
     scanf("%d",&english);
  
     total=gujrati+hindi+english;
     printf("\ntotal markes = %d",total);

     percentage=(float)total*100/300;
     printf("\npercentage = %.2f",percentage);

getch();

}
