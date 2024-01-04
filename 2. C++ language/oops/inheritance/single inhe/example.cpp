// single inheritance
#include <iostream>
using namespace std;
class base // parent calss
{
protected:
    int n;

public:
    void setdata(int x)
    {
        n = x;
    }
};
class derived : public base // protected hoi to
{
public:
    void getdata()
    {
        // base::setdata(10);
        cout << "value of n = " << n << endl;
    }
};
int main()
{
    derived d;
    d.setdata(10);
    d.getdata();
}