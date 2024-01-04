#include<stdio.h>
void main()
{
  int i,j,sp=35;
 
  i=1;
  do{
       j=1;
       do{
            printf(" ");
            j++;
         }while(j<=sp);
       
       j=1;
       do{
           if(i==5 || j==1 || i==j)
           { 
               printf("* ");           
           }
           else
           {
               printf("  ");  //2 space
           } 
 
           j++;
         }while(j<=i);
     
     sp--;
     printf("\n");
     
     i++;
    }while(i<=5);
 
}