#include <iostream>
using namespace std;
int main()
{
    int i, j, sp = 20;

    for (i = 1; i <= 5; i++)
    {
        for (j = 1; j <= sp; j++)
        {
            cout << " ";
        }
        for (j = i; j <= 5; j++)
        {
            cout << "* ";
        }
        cout << "\n";
        sp++;
    }
}