#include <iostream>
using namespace std;
class test
{
public:
    test(int);
    test(char);
};
test::test(int a)
{
    cout << "outside define = " << a << endl;
}
test::test(char a)
{
    cout << "charecter  = " << a << endl;
}
int main()
{
    test a(50),b('K');
}