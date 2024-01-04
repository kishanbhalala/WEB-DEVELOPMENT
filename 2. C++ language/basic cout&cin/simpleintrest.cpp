#include <iostream>
using namespace std;
int main()
{
    float invest, intrest, year, fi;

    cout << "enter invest = ";
    cin >> invest;
    cout << "enter intrest = ";
    cin >> intrest;
    cout << "enter year = ";
    cin >> year;

    fi = invest * intrest * year / 100;

    cout << "final intrest = " << fi << " ";
}