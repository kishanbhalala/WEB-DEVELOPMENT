#include <iostream>
using namespace std;

class bill
{
    int rate, qty;
    float amt, dis, bill, gst, netbill;

public:
    void price()
    {
        cout << "enter the rate = ";
        cin >> rate;
        cout << "enter the qty = ";
        cin >> qty;
    }
    void amount()
    {
        amt = rate * qty;
    }
    void discount()
    {
        dis = (amt * 5 / 100);
    }
    void bi()
    {
        bill = amt - dis;
    }
    void gst18()
    {
        gst = (bill * 18) / 100;
    }
    void final()
    {
        netbill = bill + gst;
    }
    void display()
    {
        cout << "rate\t qty\t amount\t dis\t bill\t gst\t netbill"<<endl;
        cout << rate << "\t" << qty << "\t" << amt << "\t" << dis << "\t" << bill << "\t" << gst << "\t" << netbill ;
    }
};
int main()
{
    bill a;

    a.price();
    a.amount();
    a.discount();
    a.bi();
    a.gst18();
    a.final();
    a.display();
}