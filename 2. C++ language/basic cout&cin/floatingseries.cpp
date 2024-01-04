#include <iostream>
using namespace std;
int main()
{
    float i, n, a = 0.5;

    cout << "enter the up to value = ";
    cin >> n;

    for (i = 0.5; i <= n; i++)
    {
        cout << a <<"\t";
        a=a+i;
    }
}