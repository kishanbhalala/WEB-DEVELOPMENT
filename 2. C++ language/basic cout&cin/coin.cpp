// amount to coin convert
#include <iostream>
using namespace std;
int main()
{
    int a[8] = {2000, 500, 200, 100, 50, 20, 10, 5};
    int i, n;

    cout << "enter the amount = ";
    cin >> n;

    for (i = 0; i < 8; i++)
    {
        if (n >= a[i])
        {
            cout << a[i] << " = " << n / a[i] << endl;
            n = n % a[i];
        }
    }
}