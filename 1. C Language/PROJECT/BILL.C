#include<stdio.h>
#include<conio.h>
void main()
{
  float rate,qty,amount,dis,billamt,gst,netbill;
  clrscr();
  printf("enter the rate = ");
  scanf("%f",&rate);
  printf("enter the qty = ");
  scanf("%f",&qty);

  amount=rate*qty;
  dis=(amount*5)/100;
  billamt=amount-dis;
  gst=rate+(rate*18)/100;
  netbill=billamt+gst;

  printf("rate\tqty\tamount\tDIS5%\tbillamt\tGST18%\tnetbill");
  printf("\n %.1f\t%.1f\t%.1f\t%.1f\t%.1f\t%.1f\t%.1f",rate,qty,amount,dis,billamt,gst,netbill);

  getch();

}