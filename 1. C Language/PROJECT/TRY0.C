#include<stdio.h>
#include<conio.h>
void main ()
{
int i,n1,n2,j,hcf=1;
 clrscr();
printf("\n\n HCF of two numbers:\n");
 printf("\n-----------------------");
 printf("input 1st number for HCF:");
 scanf("%d",&n1);
printf("input 2st number for HCF:");
 scanf("%d",&n2);

 j=(n1<n2) ? n1 : n2;
 for (i=1; i<=j; i++)
   {
       if(n1%i==0 && n2%i==0)
       {
	  hcf = i;
       }
   }
   printf("\nHCF of %d is : %d\n\n",n1,n2,hcf);
getch ();
}