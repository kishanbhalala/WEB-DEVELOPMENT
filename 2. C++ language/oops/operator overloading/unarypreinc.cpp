// unary pre increament
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
    box operator++()
    {
        box c;
        c.l = ++l;
        c.w = ++w;
        c.h = ++h;

        return c;
    }
};
int main()
{
    box a, c;
    int volume = 0;
    a.setdata(2, 3, 4);   //3*4*5
    volume = a.getdata();
    cout << "volume A = " << volume << endl;

    c = ++a;
    volume = c.getdata();
    cout << "volume c = " << volume << endl;
}