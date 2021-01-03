#include <iostream>
#include <string>
using namespace std;


class Employee{

    public:
    string name;
    int salary;
    private:
    int pass = 121212;
    public:
    void printDetails()
    {
        cout<<"The name of our first employee is: "<<this->name<<" and his salary is: "<<this->salary<<endl;
    }

};

class Programmer : public Employee
{

    public:
    int noOfTickets;


};


int main()
{
    // int a[10];
    // for (int i = 0; i < 10; i++)
    // {
    //     cout << "Enter a number of " << i << " index" << endl;
    //     cin >> a[i];
    // }

    // for (int i = 0; i < 10; i++)
    // {
    //     cout << "Here is the number of " << i << " index: " << a[i] << endl;
    // }

    Employee obj;
    obj.name = "Ismail";
    obj.salary = 10000;
    Programmer pobj;
    pobj.name = "titas";
    obj.printDetails();
    cout<<pobj.name<<endl;



    return 0;
    
}
