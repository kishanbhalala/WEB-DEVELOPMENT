// array maximum and minimum number find global variable
#include <iostream>
#define n 5
using namespace std;
int display(int a[])
{
    int max = a[0], min = a[0];

    for (int i = 0; i < n; i++)
    {
        cout << a[i] << endl;
    }

    for (int i = 0; i < n; i++)
    {
        if (max < a[i])
        {
            max = a[i];
        }
    }
    cout << "largest number = " << max << endl;

    for (int i = 0; i < n; i++)
    {
        if (min > a[i])
        {
            min = a[i];
        }
    }
    cout << "smallest number = " << min << endl;
}
int main()
{
    int a[n], i;

    for (i = 0; i < n; i++)
    {
        cout << "enter value = ";
        cin >> a[i];
    }
    display(a);
}