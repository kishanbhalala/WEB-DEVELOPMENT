// multilevel inhe
#include <iostream>
using namespace std;
class base
{
public:
    int a;
    void setA(int x)
    {
        a = x;
    }
};
class derived1 : public base
{
public:
    int b;
    void setB(int x)
    {
        b = x;
    }
};
class derived2 : public derived1
{
public:
    void getproduct()
    {
        cout << "product of a and b = " << a * b << endl;
    }
};
int main()
{
    derived2 d;
    d.setA(10);
    d.setB(5);
    d.getproduct();
}