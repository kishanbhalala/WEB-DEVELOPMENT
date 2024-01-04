// find large number friend function
#include <iostream>
using namespace std;
class number
{
    int x, y;

public:
    void setdata()
    {
        cout << "enter the number \n ";
        cin >> x >> y;
    }
    friend void large(number a);
};
void large(number a)
{
    if (a.x > a.y)
    {
        cout << "x largest number = " << a.x;
    }
    else
    {
        cout << "y largest number = " << a.y;
    }
}
int main()
{
    number z;
    z.setdata();
    large(z);
}
