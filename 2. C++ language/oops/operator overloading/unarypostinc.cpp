// unary post increament
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
    box operator++(int)
    {
        box c;
        c.l = l++;
        c.w = w++;
        c.h = h++;

        return c;
    }
};
int main()
{
    box a, c;
    int volume = 0;
    a.setdata(2, 2, 2);   //3*3*3
    volume = a.getdata();
    cout << "volume A = " << volume << endl;

    a++;
    c = a;
    volume = c.getdata();
    cout << "volume c = " << volume << endl;
}