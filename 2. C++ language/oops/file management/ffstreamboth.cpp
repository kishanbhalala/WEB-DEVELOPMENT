// ffstream = stream class to both read and write from / to files
#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    // file writes
    char input[50];
    ofstream os;
    os.open("xyz.txt");

    cout << "writing txt file " << endl;
    cout << "please your name " << endl;
    cin.getline(input, 50);
    os << input << endl;
    cout << "contect number " << endl;
    cin >> input;
    cin.ignore();
    os << input << endl;
    os.close();

    // file read
    ifstream is;
    string line;
    is.open("xyz.txt");
    cout << "/nreading txt file" << endl;
    while (getline(is, line))
    {
        cout << line << endl;
    }
    is.close();
    return 0;
}