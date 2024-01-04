#include<iostream>
using namespace std;
int main()
{
    int i,j,sp=20;

    for(i=1; i<=5; i++)
    {   
        for(j=1; j<=sp; j++)
        {
            cout<<" ";
        }
        for(j=1; j<=5; j++)
        {
            if(j==1 || i==5 || j==i)
            {
                cout<<"* ";
            }
            else
            {
                cout<<"  ";
            }
        }
        cout<<"\n";
        sp--;
    }
}