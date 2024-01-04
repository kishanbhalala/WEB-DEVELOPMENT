// multiple inhe
#include <iostream>
using namespace std;
class base1
{
protected:
    int n;

public:
    void setn(int x)
    {
        n = x;
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
    void display()
    {
        for (int j = i; j <= n; j++)
        {
            cout << j * j << "\t";
        }
    }
};
int main()
{
    derived d;
    d.setn(10);
    d.seti();
    d.display();
}