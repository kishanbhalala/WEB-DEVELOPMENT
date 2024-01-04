#include<stdio.h>
void main()
{ int age;
                                     //eligible vote or not
 printf("enter the age = ");
 scanf("%d",&age);
 
if (age>=18)
{
    printf("you can vote = %d",age);
}
else
{
    printf("you can't vote = %d",age);
}


getch();

}