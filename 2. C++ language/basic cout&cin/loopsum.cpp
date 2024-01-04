#include <iostream>
using namespace std;
int main()
{
    int i, n, sum = 0;

    cout << "enter the number = ";
    cin >> n;

    for (i = 1; i <= n; i = i + 2)
    {
        sum = sum + i;
        cout << " " << i << " ";
    }

    cout << "\ntotal sum odd number " << sum << " ";
}