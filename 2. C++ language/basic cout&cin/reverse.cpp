#include <iostream>
using namespace std;
int main()
{
    char str1[10], str2[10];
    int i, j, k = 0;

    cout << "enter string = ";
    cin >> str1;

    for (k = 0; str1[k] != '\0'; k++);
    j = k;

    for (i = 0; i < k; i++)
    {
        str2[i] = str1[--j];
    }
    str2[i] = '\0';

    cout << "reverse string = " << str2;
}