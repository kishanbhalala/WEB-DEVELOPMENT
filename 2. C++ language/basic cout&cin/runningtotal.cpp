#include <iostream>
using namespace std;
int i;

int display(int a[])
{
    for (i = 0; i < 5; i++)
    {
        if (i == 0)
        {
            cout << a[i] << endl;
        }
        else
        {
            cout << a[i] <<" = "<< a[i] + a[i - 1] << endl;
        }
    }
}
int main()
{
    int a[5];

    for (i = 0; i < 5; i++)
    {
        cout << "enter value = ";
        cin >> a[i];
    }
    display(a);
}