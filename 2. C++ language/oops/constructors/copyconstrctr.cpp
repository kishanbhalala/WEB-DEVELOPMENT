//copy constructr
#include <iostream>
using namespace std;
class test
{
    int n, m;

public:
    test(int x, int y)
    {
        n = x;
        m = y;
    }
    void getdata()
    {
        cout << "value of n = " << n << endl;
        cout << "value of m = " << m << endl;
    }
    test(test &x)
    {
        n = x.n;
        m = x.m;
    }
};
int main()
{
    test a(10, 20);
    a.getdata();

    test b(a);
    b.getdata();
}