#include <iostream>
using namespace std;
int main()
{
    float bill, unit, surcharge;

    cout << "enter the unit = ";
    cin >> unit;

    if (unit <= 100)
    {
        bill = unit * 0.60 + 50;
        cout << "100 under total charge = " << bill << " ";
    }
    else if (unit > 100 && unit <= 300)
    {
        bill = 60 + (unit - 100) * 0.80 + 50;
        cout << "101 to 300 under unit charge = " << bill << " ";
    }
    else
    {
        bill =  60 + 160 + (unit - 300) * 0.90 + 50;
        cout << "300 up unit charge = " << bill << " ";
    }
    if (bill > 300)
    {
        surcharge = (bill * 15 / 100) + bill;
        cout << "\n300 rs up bill surcharge = " << surcharge << " ";
    }
}