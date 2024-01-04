#include<stdio.h>
void main()
{ 
   int i,n;
                        

   i='A';                            //exp=1
   do
   {  
    
     printf("%c\t",i);
     i=i+2;                              //exp=3 
   }
   while(i<='Z');                     //exp=2 
   

}




// A,C,E,G... print