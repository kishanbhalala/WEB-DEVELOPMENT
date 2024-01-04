#include <iostream>
using namespace std;

class volume
{
public:
    volume(int a)
    {
        cout << "volume of sqare = " << a * a * a << endl;
    }
    volume(double a)
    {
        cout << "volume of circle = " << 4.18 * a * a * a << endl;
    }
    volume(int a, int b, int c)
    {
        cout << "volume of rectangle = " << a * b * c << endl;
    }
    volume(int a, int h)
    {
        cout << "volume of cylinder = " << (3.14 * a * a) * h << endl;
    }
};
int main()
{
    volume a(5), b(2.5), c(5, 4, 2), d(5, 3);
}
