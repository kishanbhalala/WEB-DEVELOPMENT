// static variable and function
#include <iostream>
using namespace std;
class test
{
    int n;

public:
    static int num; // declare
    void setn(int);
    void getn()
    {
        cout << "value of n = " << n << endl;
    }
    /*static int abc()
      {
        return num;         //static function
      }*/
};
int test ::num = 1;
void test ::setn(int x)
{
    n = x;
    num++;
}
int main()
{                                        //abc()
    cout << "starting value = " << test ::num << endl;
    test a, b, c; // object creat
    a.setn(120);
    a.getn();
    b.setn(44);
    c.setn(20);
                                    //abc()
    cout << "ending value " << test::num << endl;
}