// function overiding
#include <iostream>
using namespace std;
class base
{
public:
    virtual void show()
    {
        cout << "base class show..." << endl;
    }
};
class derived : public base
{
public:
    void show()
    {
        cout << "derived class show..." << endl;
    }
};
int main()
{
    base *p, b;

    derived d;
    p = &d;
    p->show();
    p = &b;
    p->show();
}