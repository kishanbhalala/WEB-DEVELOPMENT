#include <iostream>
#include <iomanip>
using namespace std;
class result
{
  int roll, hindi, eng, guj, total;
  string name;
  double per;

public:
  void setdata()
  {
    cout << "enter roll number = ";
    cin >> roll;
    cout << "enter name = ";
    cin >> name;

    cout << "enter hindi mark = ";
    cin >> hindi;
    cout << "enter english mark = ";
    cin >> eng;
    cout << "enter gujrati mark = ";
    cin >> guj;

    total = hindi + eng + guj;
    per = (double)total / 3;
  }
  void getdata()
  {
    cout << "rollno\tname\thindi\tenglish\tgujrati\ttotal\tpercentage\tgrade" << endl;
  }
  void display()
  {
    cout << roll << "\t" << name << "\t" << hindi << "\t" << eng << "\t" << guj << "\t" << total << "\t" << setprecision(3) << per << "\t";

    if (hindi < 33 || eng < 33 || guj < 33)
    {
      cout << "\tFail";
    }
    else if (per > 80)
    {
      cout << "\tA";
    }
    else if (per > 60)
    {
      cout << "\tB";
    }
    else if (per > 40)
    {
      cout << "\tC";
    }
    else if (per > 33)
    {
      cout << "\tD";
    }
    cout << "\n";
  }
};
int main()
{
  result a[5], b;
  int i;

  for (i = 0; i < 3; i++)
  {
    a[i].setdata();
    cout << "\n";
  }
  b.getdata();
  for (i = 0; i < 3; i++)
  {
    a[i].display();
  }
}