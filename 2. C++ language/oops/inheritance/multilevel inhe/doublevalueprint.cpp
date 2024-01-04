// multilevel double value series
#include <iostream>
using namespace std;
class base
{
public:
    int n;
    void setA()
    {
        cout << "enter up to = ";
        cin >> n;
    }
};
class derived1 : public base
{
public:
    double a;
    void setB()
    {
        a = 0.5;
    }
};
class derived2 : public derived1
{
public:
    double i;
    void get()
    {
        for (i = 0.5; i <= n; i++)
        {
            cout << a << "\t";
            a = a + i;
        }
    }
};
int main()
{
    derived2 d;
    d.setA();
    d.setB();
    d.get();
}