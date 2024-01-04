// single inhe factorial
#include <iostream>
using namespace std;
class base
{
public:
    int n;
    void set()
    {
        cout << "enter number = ";
        cin >> n;
    }
};
class derived : public base
{
public:
    int fact = 1;
    void get()
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
    d.set();
    d.get();
}