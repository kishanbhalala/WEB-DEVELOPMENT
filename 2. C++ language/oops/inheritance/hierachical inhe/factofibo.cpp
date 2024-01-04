// factorial and fibonacci
#include <iostream>
using namespace std;
class base
{
public:
    int n;
    void user()
    {
        cout << "enter up to = ";
        cin >> n;
    }
};
class factorial : public base
{
public:
    int i, fact = 1;
    void series()
    {
        for (i = 1; i <= n; i++)
        {
            fact = fact * i;
        }
        cout << "factorial: \n" << fact ;
        cout << "\n";
    }
};
class fibonacci : public base
{
public:
    int i, a = 1, b = 0, c;
    void series()
    {
        cout << "fibonacci: \n";
        {
            for (i = 1; i <= n; i++)
            {
                c = a + b;
                a = b;
                b = c;
                cout << c << "\t";
            }
        }
    }
};
int main()
{
    factorial fc;
    fc.user();
    fc.series();

    fibonacci fb;
    fb.user();
    fb.series();
}