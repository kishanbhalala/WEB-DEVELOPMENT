#include <iostream>
using namespace std;

double Addition(double x, double y)
{
    return x + y;
}
int main()
{
    double a, b;

    cout << "enter A and B number :\n";
    cin >> a >> b;

    cout << "addtion = " << Addition(a, b);
}
