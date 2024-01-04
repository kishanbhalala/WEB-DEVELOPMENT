#include <iostream>
using namespace std;

class add
{
public:
    add()
    {
        cout << "defualt contructor is called  " << endl;
    }
    add(int x)
    {
        cout << "addition single argument is called = " << x + 10 << endl;
    }
    add(int x, int y)
    {
        cout << "addition double argument is called = " << x + y << endl;
    }
    add(double x)
    {
        cout << "addition floating value is called = " << x + 5 << endl;
    }
};
int main()
{
    add a(10), b(20, 30), c(5.5), d;
}