#include<stdio.h>
int fun(int n)
{
	if(n==1)
		return 1;
	else
		return n*fun(n-1);
}
void main()
{
	printf("factorial is = %d",fun(5));
}

/*
5! = 5*4*3*2*1
 
  fun(5) = 5*fun(5-1) = 24
	fun(4) = 4*fun(4-1) = 6
	  fun(3) = 3*fun(3-1) = 2
	    fun(2) = 2*fun(2-1) = 1
		  fun(1) = 1
*/