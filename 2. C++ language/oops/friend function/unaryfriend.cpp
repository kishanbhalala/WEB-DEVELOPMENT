// unary friend function
#include <iostream>
using namespace std;
class box
{
    int l, w, h;

public:
    void setdata(int a, int b, int c)
    {
        l = a, w = b, h = c;
    }
    int getdata()
    {
        return l * w * h;
    }
    friend box operator++(box);
};
box operator++(box a)
{
    box c;
    c.l = ++a.l;
    c.w = ++a.w;
    c.h = ++a.h;
    return c;
}
int main()
{
    box a, c;
    // int volume = 0;

    a.setdata(2, 3, 4);
    cout << "box A is = " << a.getdata() << endl;

    c = ++a;
    cout << "multipliy = " << c.getdata() << endl;
}
