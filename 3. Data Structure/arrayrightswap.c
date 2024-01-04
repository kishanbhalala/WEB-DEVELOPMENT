#include <stdio.h>
#define n 10
int main()
{
    int a[] = {10, 20, 30, 40, 50, 60, 70, 80, 90, 100}, i, swap;

    swap      = a[0];
    a[0]      = a[n - 1];
    a[n - 1]  = swap;

    for ( i = 0; i < n; i++)
    {
        printf("%d ",a[i]);
    }
    
}