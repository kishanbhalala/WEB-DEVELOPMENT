#include <iostream>
using namespace std;
int main()
{
    int arr[3][3];
    int i, j, a = 0, b = 0, c = 0;

    for (i = 0; i < 3; i++)
    {
        for (j = 0; j < 3; j++)
        {
            cout << "index ["<<i<<"]["<<j<<"]: ";
            cin >> arr[i][j];
        }
    }
    cout << "\n";

    for (i = 0; i < 3; i++)
    {
        for (j = 0; j < 3; j++)
        {
            cout << arr[i][j] << "\t";
            if (i == j)
            {
                a = a + arr[i][j];
            }
            else if (i < j)
            {
                b = b + arr[i][j];
            }
            else if (i > j)
            {
                c = c + arr[i][j];
            }
        }
        printf("\n");
    }
    cout << "" << endl << "1.sum is diagonal = " << a;
    cout << "" << endl << "2.sum is upper tringle = " << b;
    cout << "" << endl << "3.sum is lower tringle = " << c;
}