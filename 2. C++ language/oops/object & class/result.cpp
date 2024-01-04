#include <iostream>
#include<iomanip>
using namespace std;

class result
{
    int a, b, c, total, grade;
    float per;

public:
    void subject()
    {
        cout << "enter a markes =";
        cin >> a;
        cout << "enter b markes =";
        cin >> b;
        cout << "enter c markes =";
        cin >> c;

        total = a + b + c;
        per = (float)total / 3;
    }
    void sum()
    {
        cout << "a\tb\tc\ttotal\tper\tgrade" << endl;
        cout << a << "\t" << b << "\t" << c << "\t" << total << "\t" << setprecision(3) << per;

        if (a < 33 || b < 33 || c < 33)
        {
            cout << "\t Fail";
        }
        else if (per > 80)
        {
            cout << "\t A";
        }
        else if (per > 70)
        {
            cout << "\t B";
        }
        else if (per > 60)
        {
            cout << "\t C";
        }
        else if (per > 33)
        {
            cout << "\t D";
        }
    }
};
int main()
{
    result a;
    a.subject();
    a.sum();
}