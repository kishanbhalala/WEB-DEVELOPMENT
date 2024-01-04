#include<stdio.h>
void main()
{  
   int  i,n;
   printf("enter value = ");
   scanf("%d",&n);
   
   i=-n;                                //exp1
   while(i<=n)                       //exp2  
   {
      printf("%d\t",i);
      i++;                        //exp3
   }
 	
}




//-n to n print scanf 