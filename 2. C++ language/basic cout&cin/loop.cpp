#include <iostream>
using namespace std;
int main()
{
    int i, n;

    cout << "enter the number = ";
    cin >> n;

    for (i = -n; i <= n; i++)
    {
        cout << " " << i << " ";
    }
}