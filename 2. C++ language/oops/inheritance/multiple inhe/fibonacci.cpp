// multiple inhe fibonacci
#include <iostream>
using namespace std;
class base1
{
public:
    int n;
    void setn()
    {
        cout << "enter number = ";
        cin >> n;
    }
};
class base2
{
protected:
    int i;

public:
    void seti()
    {
        i = 1;
    }
};
class derived : public base1, public base2
{
public:
    int a = 1, b = 0, c;
    void display()
    {
        for (int j = i; j <= n; j++)
        {
            c = a + b;
            a = b;
            b = c;
            cout << c << "\t";
        }
    }
};
int main()
{
    derived d;
    d.setn();
    d.seti();
    d.display();
}