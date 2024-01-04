// pure virtual abstraction
#include <iostream>
using namespace std;
class base // abstract class
{
public:
    virtual void show() = 0; // pure virtual function
};
class derived : public base
{
public:
    void show()
    {
        cout << "derived class " << endl;
    }
};
int main()
{
    base *p;
    derived d;
    p = &d;
    p->show();
}