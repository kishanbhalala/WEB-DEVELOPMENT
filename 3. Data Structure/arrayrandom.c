// array random  => rand() => stdlib
#include <stdio.h>
#include <stdlib.h>
int main()
{
    int a[10], i;

    for (i = 0; i < 10; i++)
    {
        a[i] = rand() % 50 + 1;
    }
    for (i = 0; i < 10; i++)
    {
        printf("%d ", a[i]);
    }
}