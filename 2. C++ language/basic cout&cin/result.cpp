#include<iostream>
using namespace std;
int main()
{
    int maths, science, english,total;
    float per;

    cout << "enter maths mark = ";
    cin >> maths;
    cout << "enter science mark = ";
    cin >> science;
    cout << "enter english mark = ";
    cin >> english;

    total = maths + science + english;
    per = (float)(maths + science + english) / 3;
    
    cout << "\ntotal = " << total << " ";
    cout << "\npercentage = " << per << " ";

    return 0;
}
