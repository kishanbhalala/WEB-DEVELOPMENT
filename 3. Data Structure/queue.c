// queue = [FIFO] first in first out
#include <stdio.h>
#define n 5
int a[n];
int f = -1, r = -1, i;
int display()
{
    if (f < 0)
    {
        printf("queue is empty...");
    }
    else
    {
        for (i = f; i <= r; i++)
        {
            printf("%d ", a[i]);
        }
        printf("\n");
    }
}
int insertend(int val)
{
    if (r >= n - 1)
    {
        printf("queue is full...\n");
    }
    else if (r < 0)
    {
        f = r = 0;
        a[r] = val;
    }
    else
    {
        a[++r] = val;
    }
}
int deletfirst()
{
    if (f < 0)
    {
        printf("queue is already empty...\n");
    }
    else if (f == r)
    {
        f = r = -1;
    }
    else
    {
        ++f;
    }
}
int main()
{
    int ch, x;

    printf("1.insert element in queue");
    printf("\n2.delet element in queue");
    printf("\n3.display");
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
            insertend(x);
            break;
        case 2:
            deletfirst();
            break;

        case 3:
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
// int main()
// {
//     insertend(10);
//     insertend(20);
//     insertend(30);
//     insertend(40);
//     insertend(50);
//     display();

//     // delet value
//     deletfirst();
//     deletfirst();
//     deletfirst();
//   //  deletfirst();
//    // deletfirst();
//     display();
// }