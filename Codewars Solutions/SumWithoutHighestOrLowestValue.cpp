/*Sum all the numbers in a given vector, exclude the largest and lowest values (unless theres a duplicate in which
case the duplicate is included).

If the vector is empty or has only one element return 0; otherwise, return the sum.

Solution completed: 3/8/2022
*/



#include<vector>
using namespace std;

int sum(vector<int> numbers)
{
  int sum = 0;
  
  //Check if the argument vector is empty or only has one value; if so, return 0.
  if (numbers.empty() || numbers.size() == 1) {
    return 0;
  }
  
  else {
  
    //Sort the argument vector 'numbers' using std::sort
    sort(numbers.begin(), numbers.end()); 
    
    //Add all the numbers in 'numbers' starting from the second value to the second to last value
    for (unsigned long i = 1; i <= numbers.size() - 2; i++) {
      sum += numbers[i];
    }
  
    return sum;
  
  }
}
