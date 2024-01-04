#include <iostream>
using namespace std;
int main()
{
    int rev, n;

    cout << "enter num = ";
    cin >> n;

    while (n > 0)
    {
        rev = n % 10;
        cout << rev;
        n = n / 10;
    }
}