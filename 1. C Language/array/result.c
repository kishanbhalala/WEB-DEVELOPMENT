#include<stdio.h>
void main()
{
  int guj[5],hindi[5],eng[5];
  int i,total;
  float per;

  for(i=0; i<5; i++)
  {
      printf("gujrati = ");
      scanf("%d",&guj[i]);
  }
      printf("\n"); 
  
  for(i=0; i<5; i++)
  {
      printf("hindi = ");
      scanf("%d",&hindi[i]);
  }
      printf("\n");
  
  for(i=0; i<5; i++)
  {
      printf("english = ");
      scanf("%d",&eng[i]);
  }
      printf("\n");
      printf("gujrati\t hindi\t english   total\t  percentage\t grade");
  
  for(i=0; i<5; i++)
  {     
       total=guj[i]+hindi[i]+eng[i];
       per=(float)total/3;
   
       printf("\n%d\t %d\t %d\t   %d\t\t   %.2f \t",guj[i],hindi[i],eng[i],total,per);
  
       if(guj[i]<33 || hindi[i]<33 || eng[i]<33)
       {
           printf("fail");
       }
       else if(per>80)
       {
          printf("A");
       }
       else if(per>70)
       {
          printf("B");
       }
       else if(per>60)
       {
          printf("C");
       }
       else if(per>33)
       {
          printf("D");
       }
  }

}