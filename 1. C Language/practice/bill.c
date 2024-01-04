#include<stdio.h>
void main()
{
  int rate,qty;
  float amt,dis,bill,gst,netbill;
  
  printf("enter the rate = ");
  scanf("%d",&rate);
  printf("enter the qty = ");
  scanf("%d",&qty);

  amt=rate*qty;
  dis=(amt*5)/100;
  bill=amt-dis;
  gst=rate+(rate*18/100);
  netbill=bill+gst;

  printf("rate\tqty\tamt\tdis5%\tbill\tgst18%\tnetbill");
  printf("\n%d\t%d\t%.1f\t%.1f\t%.1f\t%.1f\t%.1f",rate,qty,amt,dis,bill,gst,netbill);
  

}