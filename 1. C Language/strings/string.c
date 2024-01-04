#include<stdio.h>
void main()
{
	
 char str[50];
 printf("\n enter your string = ");
 //scanf("%s",&str);          //space not allowed
 scanf("%[^\n]s",&str);     //space allowed  ^ = expontansiol and ceret pn kevay
	
                            //gets(str); inbuild function
                            //puts(str); inbuild function	 

printf("\n your string is = %s",str);

int i;
for(i=0; str[i]!='\0'; i++);
printf("\n string length = %d",i);
	
	
	
	
}