#include <iostream>
using namespace std;
int main()
{
    int i,a;

    for (i = 65; i <= 90; i++)
    {   
        a=i+32;

        cout << (char)(i) << "-" << a << "\t";
    }
}