#include <iostream>
using namespace std;

class example
{
    int n;

public:
    void setn(int x)
    {
        n = x;
    }
    void getn()
    {
        cout << "value of n  = " << n << endl;
    }
};
int main()
{
    example a; // object create
    a.setn(100);
    a.getn();
}
