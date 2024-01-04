#include <iostream>
using namespace std;
int main()
{
    int a = 20, *p, **q;
    p = &a;
    q = &p;

    cout << "value of a is = " << a << endl;
    cout << "address of a is = " << &a << endl;
    cout << "address of a is using p is = " << p << endl;
    cout << "address of p is = " << &p << endl;
    cout << "value of a is using q is = " << *p << endl;
    cout << "address of p is using q is = " << q << endl;
    cout << "address of q is = " << &q << endl;
    cout << "value of a is using q is = " << **q << endl;
}