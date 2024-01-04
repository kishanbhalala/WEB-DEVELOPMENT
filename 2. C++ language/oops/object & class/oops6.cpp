#include <iostream>
using namespace std;

class report
{
    double adno, mark[5], average, total = 0;
    char name[20];

    double getavg()
    {
        for (int i = 1; i <= 5; i++)
        {
            total = total + mark[i];
        }
        return total / 5;
    }
public:
    void readinfo()
    {
        cout << "enter the adno = ";
        cin >> adno;
        cout << "enter the name = ";
        cin >> name;

        for (int i = 1; i <= 5; i++)
        {
            cout << "enter the mark = ";
            cin >> mark[i];
        }

        average = getavg();
    }
    void displayinfo()
    {
        cout << "\nadno = " << adno << endl;
        cout << "name = " << name << endl;
        cout << "total = " << total << endl;
        cout << "average = " << average << endl;
    }
};
int main()
{
    report a;
    a.readinfo();
    a.displayinfo();
}