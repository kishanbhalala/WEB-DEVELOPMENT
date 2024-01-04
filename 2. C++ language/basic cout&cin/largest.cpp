#include <iostream>
using namespace std;
int main()
{
    int a, b, c;

    cout << "enter the number \n";
    cin >> a >> b >> c;

    if (a > b && a > c)
    {
        cout << "largest number = " << a << " ";
    }
    else if (b > c)
    {
        cout << "largest number = " << b << " ";
    }
    else
    {
        cout << "largest number = " << c << " ";
    }
}