// ofstream = stream class to write on files
#include <iostream>
#include <fstream>
using namespace std;
int main()
{
    ofstream filestream("abc.txt");
    if (filestream.is_open())
    {
        filestream << "welcome to skillqode";
        filestream << "\nwe started new lab";
        filestream << "\nwe started new branch";

        filestream.close();
    }
    else
    {
        cout << "file opening is fail.";
    }
    return 0;
}