#include <iostream>
using namespace std;

class flight
{
    double flightnumber, distance, fuel;
    char destination[20];

    double calfuel()
    {
        if (distance <= 1000)
        {
            fuel = 500;
        }
        else if (distance > 1000 && distance <= 2000)
        {
            fuel = 1100;
        }
        else if (distance > 2000)
        {
            fuel = 2200;
        }
    }

public:
    void feedinfo()
    {
        cout << "enter the flight number = ";
        cin >> flightnumber;
        cout << "enter the destination = ";
        cin >> destination;
        cout << "enter the distance = ";
        cin >> distance;

        calfuel();
    }
    void showinfo()
    {
        cout << "\nflight number = " << flightnumber << endl;
        cout << "destination = " << destination << endl;
        cout << "distance = " << distance << endl;
        cout << "fuel = " << fuel << endl;
    }
};
int main()
{
    flight a;
    a.feedinfo();
    a.showinfo();
}