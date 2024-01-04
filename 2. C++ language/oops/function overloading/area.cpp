#include <iostream>
using namespace std;

class shap
{
public:
    void area(int a)
    {
        cout << "area of sqare = " << a * a << endl;
    }
    void area(double a)
    {
        cout << "area of circle = " << 3.14 * a * a << endl;
    }
    void area(int a, int b)
    {
        cout << "area of rectangle = " << a * b << endl;
    }
    void area(double a, double h)
    {
        cout << "area of cylinder = " << (2 * 3.14 * a * h) + (2 * 3.14 * a * a) << endl;
    }
};
int main()
{
    shap a;
    a.area(5);
    a.area(4.3);
    a.area(3, 7);
    a.area(3.6, 2.5);
}
