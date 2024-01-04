#include <iostream>
using namespace std;
int main()
{
    char i;

    for (i = 'A'; i <= 'Z'; i = i + 2)
    {
        if (i % 4 == 1)
        {
            cout << " " << (char)i << " ";
        }
        else
        {
            cout << " " << (char)(i + 32) << " ";
        }
    }
}


//typcasting data type value change krva mate use thay che