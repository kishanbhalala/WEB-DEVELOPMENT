#include <iostream>
using namespace std;
int main()

{
    int i, j, a = 97;

    for (i = 1; i <= 5; i++)
    {
        for (j = 1; j <= i; j++)
        {
            if (j % 2 == 1)
            {
                cout << (char)a <<"\t";
            }
            else
            {
                cout << (char)(a - 32) <<"\t";
            }
            a++;
        }
        cout << endl;
    }
}