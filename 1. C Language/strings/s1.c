#include<stdio.h>
//#include<string.h>
void main()
{
  char str[50];
  int i;
  
  printf("enter string = ");
  scanf("%[^\n]s",&str);                    //gets(str);
                                            //strrev(str)
                                             //puts	
    for(i=0; str[i]; i++);
	{
        printf("reverse string =");
    }
						               
   for(i=i-1; i>=0; i--)
   {
       printf("%c",str[i]);  
   }
}