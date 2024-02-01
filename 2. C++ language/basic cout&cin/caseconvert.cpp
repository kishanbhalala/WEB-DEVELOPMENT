#include <iostream>
using namespace std;
int main()
{
    char ch;
    cout << "enter the ch = ";
    cin >> ch;

    if (ch >= 65 && ch <= 90)
    {
        cout << "small ch = " << (char)(ch + 32) << "";
    }
    else if (ch >= 97 && ch <= 122)
    {
        cout << "capital ch = " << (char)(ch - 32) << " ";
    }
}