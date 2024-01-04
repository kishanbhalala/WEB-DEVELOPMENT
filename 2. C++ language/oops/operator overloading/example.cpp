// operator overloading
// int float => inbuilt datatype
#include <iostream>
using namespace std;
class box
{
    int lenght, base, height;

public:
    void setdata(int x, int y, int z)
    {
        lenght = x, base = y, height = z;
    }
    int getdata()
    {
        return lenght * base * height;
    }
    box operator+(box &n)
    {
        box add;
        add.lenght = lenght + n.lenght;
        add.base = base + n.base;
        add.height = height + n.height;

        return add;
    }
};
int main()
{
    box a, b, add;
    int volume = 0;

    a.setdata(2, 3, 4);
    b.setdata(3, 4, 5);

    volume = a.getdata();
    cout << "volume of box A = " << volume << endl;
    volume = b.getdata();
    cout << "volume of box B = " << volume << endl;

    add = a + b;  //5,7,9    multiplly
    volume = add.getdata();
    cout << "multiply of box add = " << volume << endl;
}