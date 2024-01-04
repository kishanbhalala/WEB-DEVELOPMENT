#include<stdio.h>
void main()
{ 
   float i,n,a=0.5;
                        
     printf("enter the value =");
     scanf("%f",&n);

   i=0.5;                            //exp=1
   do
   {  
  
     printf("%.1f\t",a); 
     a=a+i; 
     i++;                              //exp=3 
   }
   while(i<=n);                     //exp=2 
   

}




// o.5,1,2.5.5... print