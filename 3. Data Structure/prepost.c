#include <stdio.h>
int main()
{
    int a = 10;

    //  printf("a: %d\ta: %d", ++a, a++);
     //printf("a: %d\ta: %d\ta: %d", a, ++a, a++);
    // printf("a: %d\ta: %d\ta: %d", a++, ++a, a++);
    // printf("a: %d\ta: %d\ta: %d", ++a, ++a, a++);

    // printf("a: %d\ta: %d\ta: %d", a, ++a, ++a);
    // printf("a: %d\ta: %d\ta: %d", a++, a++, ++a);
    // printf("a: %d\ta: %d\ta: %d", a++, ++a, a);
    //  printf("a: %d\ta: %d\ta: %d", ++a, a, ++a);

    // printf("a: %d\ta: %d\ta: %d", ++a, a, --a);
    // printf("a: %d\ta: %d\ta: %d", ++a, a--, --a);
    // printf("a: %d\ta: %d\ta: %d", a--, a--, --a);
    // printf("a: %d\ta: %d\ta: %d", --a, a, a--);
    // printf("a: %d\ta: %d\ta: %d", a--, --a, a--);
     printf("a: %d\ta: %d\ta: %d", --a, a++, a);
}