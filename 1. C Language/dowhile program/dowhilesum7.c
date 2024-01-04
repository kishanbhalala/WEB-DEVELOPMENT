#include<stdio.h>
void main()
{ 
   int i,n,a=1,b=0,c;
                        
     printf("enter the value =");
     scanf("%d",&n);

   i=1;                            //exp=1
   do
   {  
     c=a+b;
     a=b;
     b=c;
      {
          printf("%d\t",c); 
      }
     i++;                              //exp=3 
   }
   while(i<=n);                     //exp=2 
   

}




// 1,1,2,3,5,8... print