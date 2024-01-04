#include <iostream>
using namespace std;

int main()
{
    int a[3][3], b[3][3], c[3][3];
    int i, j;

    cout << "\n1st matrix  \n";
    for (i = 0; i < 3; i++)
    {
        for (j = 0; j < 3; j++)
        {
            cout << "value of ["<<i<<"]["<<j<<"] =";
            cin >> a[i][j];
        }
    }

    cout << "\n2st matrix  \n";
    for (i = 0; i < 3; i++)
    {
        for (j = 0; j < 3; j++)
        {
            cout << "value of ["<<i<<"]["<<j<<"] =";
            cin >> b[i][j];
        }
    }

    cout << "\n";
    cout << "1st matrix 2nd matrix addition \n";
    for (i = 0; i < 3; i++)
    {
        for (j = 0; j < 3; j++)
        {
            cout << a[i][j] <<"\t";
        }

        cout << "\t ";

        for (j = 0; j < 3; j++)
        {
            cout << b[i][j] <<"\t";
        }

        cout << "\t ";

        for (j = 0; j < 3; j++)
        {
            cout << a[i][j] + b[i][j] <<"\t";
        }
        cout << "\n";
    }
}