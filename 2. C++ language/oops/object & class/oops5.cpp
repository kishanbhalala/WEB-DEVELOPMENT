#include <iostream>
using namespace std;

class book
{
    double bookno, price, cost,n;
    char booktitle[20];

    double totalcost(double n)
    {
        return price*n;
    }

public:
    void input()
    {
        cout << "enter the book number = ";
        cin >> bookno;
        cout << "enter the book title = ";
        cin >> booktitle;
        cout << "enter the number of copy = ";
        cin >> n;
        cout << "enter the price = ";
        cin >> price;

         cost = totalcost(n);
    }
    void purchase()
    {
        cout << "\nbook number = " << bookno << endl;
        cout << "book title = " << booktitle << endl;
        cout << "nuber of copy = " << n << endl;
        cout << "total cost = " << cost << endl;
    }
};
int main()
{
    book a;
    a.input();
    a.purchase();
}