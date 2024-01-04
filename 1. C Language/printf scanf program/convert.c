#include<stdio.h>

void main()
{

//three subject,total markes,percentage

float maths=77,science=80,english=82,total,percentage;

printf("1.maths = %.2f",maths);

printf("\n2.science = %.2f",science);

printf("\n3.english = %.2f",english);

total=maths+science+english;
printf("\ntotal = %.2f",total);

percentage=total*100/300;
printf("\npercentage = %.2f",percentage);

getch();

}
