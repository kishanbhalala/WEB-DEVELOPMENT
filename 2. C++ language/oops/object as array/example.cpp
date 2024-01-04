#include <iostream>
using namespace std;
class test
{
    int n;

public:
    void setn()
    {
        cout << "enter number = ";
        cin >> n;
    }
    int getn()
    {
        return n;
    }
};
int main()
{
    test a[5];

    for (int i = 0; i < 3; i++)
    {
        a[i].setn();
    }
    for (int i = 0; i < 3; i++)
    {
        cout << "value n = " << a[i].getn() << endl;
    }
}