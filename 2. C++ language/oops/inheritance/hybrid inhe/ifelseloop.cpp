// ifelse loop inhe
#include <iostream>
using namespace std;
class base
{
public:
    int n;
    void setn()
    {
        cout << "enter up to = ";
        cin >> n;
    }
};
class AcEg : public base
{
public:
    void charcter()
    {
        for (int i = 65; i <= 90; i += 2)
        {
            if (i % 4 == 1)
            {
                cout << (char)(i) << "\t";
            }
            else
            {
                cout << (char)(i + 32) << "\t";
            }
        }
        cout<<"\n";
    }
};
class pettern : public base
{
public:
    void star()
    {
        for (int i = 1; i <= n; i++)
        {
            for (int j = 1; j <= n; j++)
            {
                cout << "* ";
            }
            cout << "\n";
        }
    }
};
class derived : public AcEg
{
public:
    void pri1()
    {
        cout << "character series print \n";
    }
    void pri2()
    {
        cout << "star pettern print \n";
    }
};
int main()
{
    derived d;
    d.pri1();
    d.charcter();

    pettern p;
    d.pri2();
    p.setn();
    p.star();
}