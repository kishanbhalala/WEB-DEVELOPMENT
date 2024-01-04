#include<stdio.h>
#include<string.h>
void main()
{
  char str1[100],str2[100];
  int i,j,k=0;
  
  printf("enter string =");
  scanf("%[^\n]s",str1);
  
  for(k=0; str1[k]!='\0'; k++);
     j=k;
	 
  for(i=0; i<k; i++)
  {
    str2[i]=str1[--j];
  }  
  str2[i]='\0';

  printf("\nreverse string = %s",str2);







}