// multiple inhe factorial
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
    int fact = 1;
    void display()
    {
        for (int i = 1; i <= n; i++)
        {
            fact = fact * i;
        }
        cout << fact << "\t";
    }
};
int main()
{
    derived d;
    d.setn();
    d.seti();
    d.display();
}