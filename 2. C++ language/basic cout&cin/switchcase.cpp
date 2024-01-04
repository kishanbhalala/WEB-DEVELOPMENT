#include <iostream>
using namespace std;
int main()
{
    int a = 100, b = 20, ch;

    cout << "1.addition" << endl;
    cout << "2.subtraction" << endl;
    cout << "3.multiplication" << endl;
    cout << "4.division" << endl;

    cout << "enter choice = ";
    cin >> ch;

    switch (ch)
    {
    case 1:
        cout << "addition of a and b = " << a + b << endl;
        break;
    case 2:
        cout << "subtraction of a and b = " << a - b << endl;
        break;
    case 3:
        cout << "multiplication of a and b = " << a * b << endl;
        break;
    case 4:
        cout << "division of a and b = " << a / b << endl;
        break;

    default:
        cout << "wrong choice" << endl;
        break;
    }
}