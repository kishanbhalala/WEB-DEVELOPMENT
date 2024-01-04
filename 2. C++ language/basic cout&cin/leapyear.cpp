#include <iostream>
using namespace std;
int main()
{
    int a;

    cout << "enter the year = ";
    cin >> a;

    if (a % 4 == 0)
        cout << "yes is leap year = " << a << " ";
    else
        cout << "no is not leap year = " << a << " ";
}
