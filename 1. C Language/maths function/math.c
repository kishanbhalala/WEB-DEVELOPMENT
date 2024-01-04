/* 1. ceil = round up 
   2. floor = round down
   3. round = rounded value
   4. pow(x,y) = x to power y
   5. sqrt(x) = square root of x
   6. abs = absolute value
   7. random = random value 
*/

#include<stdio.h>
#include<math.h>
#include<stdlib.h>
void main()
{

   printf("\n1. ceil = %.2f",ceil(4.6));
   printf("\n1. ceil = %.2f",ceil(14.1));
      printf("\n");
   printf("\n2. floor = %.2f",floor(3.6));
   printf("\n2. floor = %.2f",floor(11.1));
      printf("\n");
   printf("\n3. round = %.2f",round(5.6));
   printf("\n3. round = %.2f",round(11.3));
      printf("\n");
   printf("\n4. power = %.2f",pow(4,3));
   printf("\n4. power = %.2f",pow(10,3));
      printf("\n");
   printf("\n5. sqrt = %.2f",sqrt(25));
   printf("\n5. sqrt = %.2f",sqrt(10));
      printf("\n");
   printf("\n6. abs = %d",abs(-10));
   printf("\n6. abs = %d",abs(20));
      printf("\n");
   printf("\n7. random = %d",rand()%100);
   printf("\n7. random = %d",rand()%20);
      printf("\n");

}