#include <iostream>
using namespace std;
class num
{
    int i, j;

public:
    void setdata(int x, int y)
    {
        i = x, j = y;
    }
    friend num large(num a);
};
num large(num a)
{
    if (a.i > a.j)
    {
        cout << "x largest number = " << a.i;
    }
    else
    {
        cout << "y largest number = " << a.j;
    }
}
int main()
{
    num z;
    z.setdata(266,44);
    large(z);
}