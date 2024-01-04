#include <iostream>
using namespace std;
class test
{
public:
    test()
    {
        cout << "default constructor called  " << endl;
    }
    ~test()
    {
        cout << "destructor is called  " << endl;
    }
    test(char a)
    {
        cout << "parameterzied  called  " << endl;
    }
};
int main()
{
    test a, b(50);
}