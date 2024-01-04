#include <stdio.h>
#define n 5
int a[n], i, top = -1;
void display()
{
    if (top < 0)
    {
        printf("array is already empty...");
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
int insertend(int val) // insert krva mate (push)
{
    if (top >= n - 1) //(top == -1)
    {
        printf("array is full\n");
    }
    else
    {
        top++;
        a[top] = val;
    }
}
int deletend() // delet krva mate (pop)
{
    if (top == -1)
    {
        printf("array is empty...");
    }
    else
    {
        top--;
    }
}
int main()
{
    insertend(10);
    insertend(20);
    insertend(30);
    insertend(40);
    insertend(50);
    display();
    deletend(); // 50 delet
    deletend(); // 40 delet
    deletend(); // 30 delet
    deletend(); // 20 delet
    display();
}