#include <stdio.h>
int main()
{
    int a = 2, b = 2, c, d = 1;

    // c = a && b;
    // printf("a:%d, b:%d, c:%d", a, b, c);

    // c = --a && ++b;
    // printf("a:%d, b:%d, c:%d", a, b, c);

    // c = a && ++b;
    // printf("a:%d, b:%d, c:%d", a, b, c);
    
    // c = a || b;
    // printf("a:%d, b:%d, c:%d", a, b, c);

    // c = --a || ++b;
    // printf("a:%d, b:%d, c:%d", a, b, c);

    // c = a || ++b;
    // printf("a:%d, b:%d, c:%d", a, b, c);

    // c = a && ++b && --d;
    // printf("a:%d, b:%d, c:%d, d:%d", a, b, c, d);

    c = a || ++b || --d;
    printf("a:%d, b:%d, c:%d, d:%d", a, b, c, d);
    
}