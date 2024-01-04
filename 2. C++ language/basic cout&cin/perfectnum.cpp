// perfect number divid sum
//  28 = 1+2+4+7+14 = 28 perfect num
#include <iostream>
using namespace std;
int perfect()
{
    int i, n, sum = 0;

    cout << "enter the num = ";
    cin >> n;

    for (i = 1; i < n; i++)
    {
        if (n % i == 0)
        {
            sum = sum + i;
            {
                cout << i << "+ ";
            }
        }
    }
    if (sum == n)
    {
        cout << "\nperfect num = " << n ;
    }
    else
    {
        cout << "\nnot perfect num = " << n;
    }
}
int main()
{
    perfect();
}