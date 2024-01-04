#include<stdio.h>
int bill()
{

   float rate,qty,amt,dis,billamt,gst,netbill;

    printf("enter the rate = ");
	scanf("%f",&rate);
	printf("enter the qty = ");
	scanf("%f",&qty);
	
	amt=rate*qty;
	dis=(amt*5)/100;
	billamt=amt-dis;
	gst=rate+(rate*18)/100;
	netbill=billamt+gst;
	
	printf("rate\t  qty\t\t amt\t\t dis(5%)\t  billamt\t gst(18%)\tnetbill");
	printf("\n%.2f\t  %.2f\t%.2f\t%.2f\t %.2f\t %.2f\t\t  %.2f",rate,qty,amt,dis,billamt,gst,netbill);
}    
 
int main()
{    
    printf("This is a bill\n");
	bill();
	printf("\nend of bill");
}