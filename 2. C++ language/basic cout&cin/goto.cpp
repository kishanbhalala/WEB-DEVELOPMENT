#include <iostream>
using namespace std;
int main()
{
    int i = 1, n;

    cout << "enter n = ";
    cin >> n;

lable:
    if (i < 10)
    {
        cout << n << "\t" << i++ << "\t" << n * i << endl;
        goto lable;
    }
}