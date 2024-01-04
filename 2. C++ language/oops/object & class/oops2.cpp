#include <iostream>
#include <iomanip>   // setprecision(5) point pchi ni value count kre headerfile add krvi pde
using namespace std;

class batsman
{
    double bcode, innings, notout, runs, batavg;
    char bname[20];

    double calcavg()
    {
        return runs / (innings - notout);
    }

public:
    void readdata()
    {
        cout << "enter the bcode = ";
        cin >> bcode;
        cout << "enter the name = ";
        cin >> bname;
        cout << "enter the innings = ";
        cin >> innings;
        cout << "enter the notout = ";
        cin >> notout;
        cout << "enter the runs = ";
        cin >> runs;

        batavg = calcavg();
    }
    void displaydata()
    {
        cout << "\nbcode = " << bcode << endl;
        cout << " name = " << bname << endl;
        cout << " innings = " << innings << endl;
        cout << " notout = " << notout << endl;
        cout << " runs = " << runs << endl;
        cout << " batavg = " << setprecision(5) << batavg << endl;
    }
};
int main()
{
    batsman a;
    a.readdata();
    a.displaydata();
}