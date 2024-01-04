#include<stdio.h>
void main()
{          // bill

float rate,qty,amt,dis,billamt,gst,netbill;

printf("enter the rate =");
scanf("%f",&rate);
printf("enter the qauntity =");
scanf("%f",&qty);

amt=rate*qty;
dis=(amt*5)/100;
billamt=amt-dis;
gst=rate+(rate*18)/100;
netbill=billamt+gst;

printf("rate\tqty\tamt\t\tdis%5\tbillamt\t\tgst%18\tnetbill");
printf("\n%.1f\t%.1f\t%.1f\t%.1f\t%.1f\t%.1f\t%.1f",rate,qty,amt,dis,billamt,gst,netbill);


getch();


}