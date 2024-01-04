// template
#include <iostream>
using namespace std;

template <class T>
void display(T t1)
{
    cout << "display temp = " << t1 << endl;
}
template <class x, class y>
void addition(x a, y b)
{
    cout << "addition = " << a + b << endl;
}
template <class x, class y>
void print(x a, y b)
{
    cout << "printing = " << a << "\t" << b << endl;
}
int main()
{
    display(200);
    display(12.4);
    display('k'); 

    cout<<"\n";

    addition(2.30, 5);
    addition('A', 5);

    cout<<"\n"; 
    
    print('g', 1.23);
    print(50, 'x');
    print(5.66, 5);
}