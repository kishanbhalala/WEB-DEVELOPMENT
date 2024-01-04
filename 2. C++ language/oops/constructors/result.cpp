#include <iostream>
using namespace std;

class result
{
    double rollno, hindi, eng, sci, total, per;
    char name[10];

public:
    result()
    {
        cout << "enter rollnumber = ";
        cin >> rollno;
        cout << "enter name = ";
        cin >> name;
        cout << "enter hindi mark = ";
        cin >> hindi;
        cout << "enter eng mark = ";
        cin >> eng;
        cout << "enter sci mark = ";
        cin >> sci;
    }
    void display()
    {
        total = hindi + eng + sci;
        per = total / 3;

        cout << "\nrollno\tname\thindi\teng\tsci\ttotal\tper" << endl;
        cout << rollno << "\t" << name << "\t" << hindi << "\t" << eng << "\t" << sci << "\t" << total;

        if (hindi <= 33 || eng <= 33 || sci <= 33)
        {
            cout << "\tFail";
        }
        else
        {
            cout << "\t" << per;
        }
    }
};
int main()
{
    result a;
    a.display();
}
