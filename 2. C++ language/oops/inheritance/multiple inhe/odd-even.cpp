// multiple inhe odd/even
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
public:
    int i;
    void seti()
    {
        i = 2; // even= i=2;
    }
};
class derived : public base1, public base2
{
public:
    void display()
    {
        for (int j = i; j <= n; j = j + 2) // j<=(2*n) 10 vakhat print thay
        {
            cout << j << "\t";
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