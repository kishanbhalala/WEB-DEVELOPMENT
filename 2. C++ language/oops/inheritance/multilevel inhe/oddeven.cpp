// multilevel odd/even series print
#include <iostream>
using namespace std;
class base
{
public:
    int n;
    void set()
    {
        cout << "enter up to = ";
        cin >> n;
    }
};
class derived1 : public base
{
public:
    double i;
    void loop1()
    {
        cout << "odd series \n";
        for (i = 1; i <= n; i += 2)
        {
            cout << i << "\n";
        }
        cout << endl;
    }
};
class derived2 : public derived1
{
public:
    double j;
    void loop2()
    {
        cout << "even series \n";
        for (j = 2; j <= n; j += 2)
        {
            cout << j << "\n";
        }
        cout << endl;
    }
};
int main()
{
    derived2 d;
    d.set();
    d.loop1();
    d.loop2();
}