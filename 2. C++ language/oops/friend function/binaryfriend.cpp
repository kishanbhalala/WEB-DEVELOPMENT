// binary friend function
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
    friend box operator+(box, box);
};
box operator+(box a, box b)
{
    box c;
    c.l = a.l + b.h;
    c.w = a.w + b.w;
    c.h = a.h + b.h;

    return c;
}
int main()
{
    box a, b, c;

    a.setdata(2, 2, 2);
    cout << "box A = " << a.getdata() << endl;

    b.setdata(3, 3, 3);
    cout << "box B = " << b.getdata() << endl;

    c = a + b;  //5*5*5
    cout << "multiply C = " << c.getdata() << endl;
}