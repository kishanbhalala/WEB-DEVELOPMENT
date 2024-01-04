// hierachical inhe
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
    void sum()
    {
        cout << "total sum = " << m + n << endl;
    }
};
class XYZ : public base
{
public:
    void multi()
    {
        cout << "total multi = " << m * n << endl;
    }
};
int main()
{
    ABC a;
    a.setn(10, 20);
    a.sum();

    XYZ x;
    x.setn(10, 50);
    x.multi();
}