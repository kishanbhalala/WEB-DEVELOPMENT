#include<stdio.h>
void main()
{ 
   int i,a;
                        
   //  printf("enter the value =");
   //  scanf("%d",&n);

   i='A';                            //exp=1
   do
   { a=i+32;
     printf("%c-%c\t",i,a);
     i++;                           //exp=3 
   }
   while(i<='Z');                     //exp=2 

}




// A-a,B-b..... number print