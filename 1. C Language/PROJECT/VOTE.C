#include<stdio.h>
#include<conio.h>
void main()  // eligible for vote or not

{ int age;
  clrscr();
  printf("enter age = ");
  scanf("%d",&age);
  if(age>=18)
    {
    printf("you can vote");
    }
  else
    {
    printf("you can't vote");
    }

getch();

 }
