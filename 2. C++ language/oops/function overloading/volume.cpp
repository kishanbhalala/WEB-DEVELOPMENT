#include <iostream>
using namespace std;

class shap
{
public:
    void volume(int a)
    {
        cout << "volume of sqare = " << a * a * a << endl;
    }
    void volume(double a)
    {
        cout << "volume of circle = " << 4.18 * a * a * a << endl;
    }
    void volume(int a, int b, int c)
    {
        cout << "volume of rectangle = " << a * b * c << endl;
    }
    void volume(int a, int h)
    {
        cout << "volume of cylinder = " << (3.14 * a * a) * h << endl;
    }
};
int main()
{
    shap a;
    a.volume(2, 3, 4);
    a.volume(5);
    a.volume(5.5);
    a.volume(4, 5);
}
