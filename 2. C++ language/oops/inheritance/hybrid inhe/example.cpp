// hybrid inhe
#include <iostream>
using namespace std;
class base
{
public:
    int n, m;
    void setn(int x, int y)
    {
        n = x;
        m = y;
    }
};
class ABC : public base
{
public:
    int o;
    void seto(int a)
    {
        o = a;
    }
};
class XYZ : public base
{
public:
    void mul()
    {
        cout << "product m and n = " << m * n << endl;
    }
};
class derived : public ABC
{
public:
    void add()
    {
        cout << "addition m,n,o is = " << m + n + o << endl;
    }
};
int main()
{
    derived d;
    d.setn(10, 20);
    d.seto(30);
    d.add();

    XYZ x;
    x.setn(5, 2);
    x.mul();
}