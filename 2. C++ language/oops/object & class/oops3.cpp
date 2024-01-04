#include <iostream>
using namespace std;

class TEST
{
    int testcode, nocandidate, centerreqd;
    char description[20];
    float calcntr()
    {
        return nocandidate / 100 + 1;
    }

public:
    void schedule()
    {
        cout << "enter testcode = ";
        cin >> testcode;
        cout << "enter description = ";
        cin >> description;
        cout << "enter nocandidate = ";
        cin >> nocandidate;

        centerreqd = calcntr();
    }
    void disptest()
    {
        cout << "\ntestcode = " << testcode << endl;
        cout << "description = " << description << endl;
        cout << "nocandidate = " << nocandidate << endl;
        cout << "centerreqd = " << centerreqd << endl;
    }
};
int main()
{
    TEST a;
    a.schedule();
    a.disptest();
}