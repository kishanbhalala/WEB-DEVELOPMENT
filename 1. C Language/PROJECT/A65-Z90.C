#include <stdio.h>
int main()
{
  char i; // A=65,B=66,C=67.....print

  for (i = 65; i <= 90; i++)
  {
    printf("%c-%d\t", i, i);
  }
}