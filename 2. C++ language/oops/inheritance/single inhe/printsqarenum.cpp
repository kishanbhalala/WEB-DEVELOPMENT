//print sqare single inhe
#include <iostream>
using namespace std;
class base
{
public:
    int i, n;
    void setdata()
    {
        cout << "enter the up to sqare = ";
        cin >> n;
    }
};
class derived : public base
{
public:
    void getdata()
    {
        for (i = 1; i <= n; i++)
        {
            cout << i * i << "\t";
        }
    }
};
int main()
{
    derived a;
    a.setdata();
    a.getdata();
}