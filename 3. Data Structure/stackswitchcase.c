#include <stdio.h>
#define n 5
int a[n], i, top = -1;
void display()
{
    if (top < 0)
    {
        printf("array is empty...");
    }
    else
    {
        for (i = 0; i <= top; i++)
        {
            printf("%d ", a[i]);
        }
    }
    printf("\n");
}
int insertfirst(int val)
{
    if (top >= n - 1)
    {
        printf("array is fill..\n");
    }
    else
    {
        for (i = n - 1; i >= 0; i--)
            a[i] = a[i - 1];
        a[0] = val;
        top++;
        printf("inserted element = %d\n", val);
    }
}
int insertend(int val)
{
    if (top >= n - 1)
    {
        printf("array is full..\n");
    }
    else
    {
        top++;
        a[top] = val;
        printf("inserted element = %d\n", val);
    }
}
int deletend()
{
    if (top == -1)
    {
        printf("array is already empty..\n");
    }
    else
    {
        printf("deleted element = %d\n", a[top]);
        top--;
    }
}
int deletfirst()
{
    if (top == -1)
    {
        printf("array is already empty..\n");
    }
    else
    {
        printf("deleted element = %d\n", a[0]);
        for (i = 0; i < n; i++)
            a[i] = a[i + 1];
        top--;
    }
}
int main()
{
    int ch, x;

    printf("1.insert element first position ..");
    printf("\n2.insert element last position ..");
    printf("\n4.delet element at first position ..");
    printf("\n5.delet element at last position ..");
    printf("\n9.display array..");
    printf("\n0.exit");

    while (ch != 0)
    {
        printf("\nenter the your choice = ");
        scanf("%d", &ch);

        switch (ch)
        {
        case 1:
            printf("enter element = ");
            scanf("%d", &x);
            insertfirst(x);
            break;
        case 2:
            printf("enter element = ");
            scanf("%d", &x);
            insertend(x);
            break;
        case 4:
            deletfirst();
            break;
        case 5:
            deletend();
            break;
        case 9:
            display();
            break;
        case 0:
            break;
        default:
            printf("wrong choice..");
            break;
        }
    }
}