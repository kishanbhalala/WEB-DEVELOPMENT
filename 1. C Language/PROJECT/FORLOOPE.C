#include<stdio.h>
#include<conio.h>
void main()
{ int i;                           // loop for syntax
  clrscr();
for(i=1; i<=5; i++)         //for(exp1; exp2; exp3)
  {                         //     { statment }
   printf("%d\n",i);        // exp1 = intilazation (only once)
  }                         // exp2 = condition (every time enter loop)
printf("%d end",i);          // exp3 = inc/dec   (every time exit loop)
getch();
}
/*initialazation    condition(print)        inc/dec(update value)
   i=1           1<=5   true(1)            i++   (2)
		 2<=5   true(2)            i++   (3)
		 3<=5   true(3)            i++   (4)
		 4<=5   true(4)            i++   (5)
		 5<=5   true(5)            i++   (6)
		 6<=5   false              exit loop    */