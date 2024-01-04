#include <iostream>
using namespace std;

class student
{
    int admno;
    char sname[20];
    float english, maths, science, total;

    float ctotal()
    {
        return english + maths + science;
    }

public:
    void takedata()
    {
        cout << "enter admno = ";
        cin >> admno;
        cout << "enter sname = ";
        cin >> sname;
        cout << "enter english mark = ";
        cin >> english;
        cout << "enter maths mark = ";
        cin >> maths;
        cout << "enter science mark = ";
        cin >> science;

        total = ctotal();
    }
    void showdata()
    {
        cout << "\nadmno = "<< admno << "\n";
        cout << "sname = " << sname << "\n";
        cout << "english = " << english << "\n";
        cout << "maths = " << maths << "\n";
        cout << "science = " << science << "\n";
        cout << "\n" "Total = "<< total << "\n";
    }
};
int main()
{
    student a;
    a.takedata();
    a.showdata();
}
