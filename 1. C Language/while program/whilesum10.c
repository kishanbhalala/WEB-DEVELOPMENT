#include<stdio.h>
void main()
{  
   int i;

   i='A';                                //exp1
   while(i<='Z')                       //exp2  
   { 
     if(i%4==1)
     {
       printf("%c\t",i);
     }
     else
     {
       printf("%c\t",i+32);     
     }

     i=i+2;                               //exp3
    
   }
   
 	
}




//A,c,E,g,I.... series