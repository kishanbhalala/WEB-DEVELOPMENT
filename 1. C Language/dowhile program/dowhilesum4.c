#include<stdio.h>
void main()
{ 
   int i,n;
                        
     printf("enter the value =");
     scanf("%d",&n);

   i=1;                            //exp=1
   do
   {  if(i%2==0)
       {
           printf("%d\t",i*i);
       }
      else
       {
           printf("%d\t",i);
       }
     
    i++;                              //exp=3 
   }
   while(i<=n);                     //exp=2 
   

}




// 1,4,3,16,5.... print