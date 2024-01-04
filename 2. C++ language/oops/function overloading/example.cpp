#include <iostream>
using namespace std;

class sum
{
public:
   void add()
    {
        cout << "defualt contructor is called  " << endl;
    }
    void add(int x)
    {
        cout << "addition single argument is called = " << x + 10 << endl;
    }
    void add(int x, int y)
    {
        cout << "addition double argument is called = " << x + y << endl;
    }
    void add(double x)
    {
        cout << "addition floating value is called = " << x + 5 << endl;
    }
};
int main()
{
    sum a;
    a.add();
    a.add(2.3);
    a.add(45);
    a.add(5,4);
}