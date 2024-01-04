#include <iostream>
using namespace std;
int main()
{
    int a, b, c;

    cout << "enter the number = \n";
    cin >> a >> b;

    c = a;
    a = b;
    b = c;

    cout << "after swap = " << a << " ";
    cout << "\nafter swap = " << b << " ";
}