#include <iostream>
using namespace std;
class test
{
public:
    test()
    {
        cout << "default constructor called  " << endl;
    }
    test(int a)
    {
        cout << "parameterzied contructor value of called = " << a << endl;
    }
    test(char a)
    {
        cout << "parameterzied contructor char of called = " << a << endl;
    }
};
int main()
{
    test a, b(50), c('s');
}