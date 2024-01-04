// friend function
#include <iostream>
using namespace std;
class box
{
    int l, b;
    friend box sum(box, box);

public:
    void setdata(int x, int y)
    {
        l = x, b = y;
    }
    int getdata()
    {
        return l * b;
    }
};
box sum(box a, box c)
{
    c.l = a.l + c.l;
    c.b = a.b + c.b;
    return c;
}
int main()
{
    box a, b, c;
    a.setdata(2, 2);
    b.setdata(3, 3);

    cout << "area A = " << a.getdata() << endl;
    cout << "area B = " << b.getdata() << endl;

    c = sum(a, b);  //5*5
    cout << "total multiply c = " << c.getdata() << endl;
}