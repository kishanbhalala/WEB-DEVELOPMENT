#include<stdio.h>
void main()
               // vowel/consonant  a,e,i,o,u  small and capital
 {char ch;
 
  printf("enter the charcter = ");
  scanf("%c",&ch);

  if (ch=='A' || ch=='E' || ch=='I' || ch=='O' || ch=='U' ||
      ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u')
  {
    printf("vowel");
  }
  else
  {
    printf("consonant");
  }
  
getch();

 }              