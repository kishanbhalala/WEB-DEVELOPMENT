#include <iostream>
using namespace std;
struct bill
{
    int code, rate, qty;
    double amt, dis, billamt, gst, netbill;
    char name[10];
};
int main()
{
    struct bill a[10];
    int i;

    for (i = 0; i < 2; i++)
    {
        cout << "enter the code = ";
        cin >> a[i].code;
        cout << "enter the name = ";
        cin >> a[i].name;
        cout << "enter the rate = ";
        cin >> a[i].rate;
        cout << "enter the qty = ";
        cin >> a[i].qty;

        cout << endl;
    }
    cout << "code\tname\trate\tqty\tamt\tdis\tbillamt\tgst\tnetbill\n";

    for (i = 0; i < 2; i++)
    {
        a[i].amt = a[i].rate * a[i].qty;
        a[i].dis = a[i].amt * 5 / 100;
        a[i].billamt = a[i].amt - a[i].dis;
        a[i].gst = a[i].billamt * 18 / 100;
        a[i].netbill = a[i].billamt + a[i].gst;

        cout << a[i].code << "\t" << a[i].name << "\t" << a[i].rate << "\t" << a[i].qty << "\t" << a[i].amt << "\t" << a[i].dis << "\t" << a[i].billamt << "\t" << a[i].gst << "\t" << a[i].netbill << endl;
    }
}
