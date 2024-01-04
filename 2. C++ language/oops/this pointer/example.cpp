#include <iostream>
using namespace std;
class bank
{
    int bal;
    string name, atype;

public:
    void setdata(string name, string atype, int bal)
    {
        this->name = name;
        this->atype = atype;
        this->bal = bal;
    }
    void getdata()
    {
        cout << "your name = " << name << endl;
        cout << "account type = " << atype << endl;
        cout << "balance = " << bal << endl;
    }
};
int main()
{
    bank b;
    b.setdata("kishan", "current", 1000000);
    b.getdata();
}