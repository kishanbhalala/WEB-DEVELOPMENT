#include <iostream>
using namespace std;
class add
{
    int a, b, c;

public:
    void setdata(int x, int y, int z)
    {
        a = x, b = y, c = z;
    }
    int getdata()
    {
        return a * b * c;
    }
    add operator*(add &n)
    {
        add d;
        d.b = b * n.b;
        d.c = c * n.c;
        d.a = a * n.a;

        return d;
    }
};
int main()
{
    add a, b, c;
    int volume = 0;

    a.setdata(2, 2, 2);
    b.setdata(3, 3, 3);

    volume = a.getdata();
    cout << "volume of box A = " << volume << endl;
    volume = b.getdata();
    cout << "volume of box B = " << volume << endl;

    c = a * b; //    multiplly
    volume = c.getdata();
    cout << "multiply of box add = " << volume << endl;
}