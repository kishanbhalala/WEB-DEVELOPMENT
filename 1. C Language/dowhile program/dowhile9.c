#include<stdio.h>
void main()
{ 
   int i;
                        
   //  printf("enter the value =");
   //  scanf("%d",&n);

   i='A';                            //exp=1
   do
   {
     printf("%c-%d\t",i,i);
     i++;                           //exp=3 
   }
   while(i<='Z');                     //exp=2 

}




// A-65,B-66..... number print