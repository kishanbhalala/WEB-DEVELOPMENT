#include <stdio.h>
#define n 10
int main()
{
    int a[] = {500, 20, 30, 40, 50, 60, 70, 80, 90, 100}, i, d;
    d = a[0];

    printf("enter the value :\n");
    for (i = 0; i < n; i++)
    {
        a[i] = a[i + 1];
    }
    a[n - 1] = d;
    for (i = 0; i < n; i++)
    {
        printf("%d ", a[i]);
    }
}