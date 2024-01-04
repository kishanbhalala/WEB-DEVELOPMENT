#include<stdio.h>
void main()
{ 
  int i;
  
  i='A';                            //exp=1
  do
  {
    if(i%4==1)
    {
       printf("%c\t",i);
    }
    else
    {
       printf("%c\t",i+32);
    }
  i=i+2;                              //exp=3
  }
  while(i<='Z');                    //exp=2

}


//A,c,E,g.....