//switch => int / char
#include<stdio.h>
void main()
{
	int a=10,b=20,ch;
	
	printf("1.addition\n");
	printf("2.substraction\n");
	printf("3.multiplication\n");
	printf("4.division\n");
	
	printf("\nenter the choice =");
	scanf("%d",&ch);
	
	switch(ch)
	{
		case 1:
			printf("addition of a and b = %d\n",a+b);
			break;
		case 2:
			printf("substraction of a and b = %d\n",a-b);
			break;
		case 3:
			printf("multiplication of a and b = %d\n",a*b);
			break;
		case 4:
			printf("division of a and b = %d\n",a/b);
			break;
		
		default:
			printf("wrong choice");
			break;
	}
}
