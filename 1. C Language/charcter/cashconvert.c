#include<stdio.h>
void main()
              // case convert A-a / a-A  
{char ch;
 printf("enter the charecter = ");
 scanf("%c",&ch);

 if (ch>=65 && ch<=90)
 {  ch=ch+32;
    printf("small char = %c",ch);
 }

 else if(ch>97 && ch<=122)
 {  ch=ch-32;
    printf("capital char = %c",ch);
 }

 getch();
 
}