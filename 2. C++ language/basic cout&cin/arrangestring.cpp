#include <iostream>
using namespace std;
int main()
{
    char str[10];
    int i, j, a;

    cout << "enter the name = ";
    cin >> str;

    for (i = 0; str[i] != '\0'; i++);

    cout << "length = "<< i <<"\n";
    a = i;

    for (j = 0; j < (i / 2); j++)
    {
        cout << str[j] << str[--a];
    }
    if (i % 2 != 0)
    {
        cout << str[(i / 2)];
    }
}