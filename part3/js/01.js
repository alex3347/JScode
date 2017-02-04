
var _string=new Array();
var _type;
function typetoinput(num)
{
	var input=document.getElementById("input-box");
	if(input.name=="type")//判断前面是否有运算符
	{
		input.value=" ";//清空input栏为一个空格
		input.name=" ";//清空name属性为一个空格
	}
	if(num!="."&&input.value[0]==0&&input.value[1]!=".") 
	{
		input.value=num; //在输入值不是点 且input栏值第一个数等于0 且第二个数不为点的情况下，让input栏显示键入的当前数值，即input栏显示为0后的第一次输入，而且之前没经过计算修改过type
	}
	else if(num=="."&&input.value.indexOf(".")>-1)//如果没查找到，indexOf返回-1
	{
		input.value=input.value; //输入值为点，并且查找到已经有点存在，拒绝输入
	}
	else if(input.value=="Infinity"||input.value=="NaN")
	{
		input.value="";//出现错误或者溢出时，清空
		input.value+=num; //字符串拼接进input栏
	}
	else
	{
		input.value+=num;//除特殊情况，直接拼接
	}
}

function operator(type)
{
	var input=document.getElementById("input-box");
	switch (type)
	{
		case "clear":
				input.value="0";
				_string.length=0;
				break;
		case "backspace":
				if(checknum(input.value)!=0)//退格键在+-*/和0的时候失效
				{
					input.value=input.value.replace(/.$/,'');//使用正则用空字符串匹配最后一位数
					if(input.value=="")
					{
						input.value="0";
					}
				}
				break;
		case "opposite":
				if(checknum(input.value)!=0)
				{
					input.value=-input.value;
				}
				break;
		case "percent":
				if(checknum(input.value)!=0)
				{
					input.value=input.value/100;
				}
				break;
		case "pow":
				if(checknum(input.value)!=0)
				{
					input.value=Math.pow(input.value,2);
				}
				break;
		case "sqrt":
				if(checknum(input.value)!=0)
				{
					input.value=Math.sqrt(input.value);
				}
				break;
		case "plus":
				if(checknum(input.value)!=0)
				{
					_string.push(input.value);
					_type="plus"
					input.value="+";
					input.name="type";
				}
				break;
		case "minus":
				if(checknum(input.value)!=0)
				{
					_string.push(input.value);
					_type="minus"
					input.value="-";
					input.name="type";
				}
				break;
		case "multiply":
				if(checknum(input.value)!=0)
				{
					_string.push(input.value);
					_type="multiply"
					input.value="×";
					input.name="type";
				}
				break;
		case "divide":
				if(checknum(input.value)!=0)
				{
					_string.push(input.value);
					_type="divide"
					input.value="÷";
					input.name="type";
				}
				break;
		case "result":
				if(checknum(input.value)!=0 || input.value=="0")//结果键在+-*/和0的时候失效 BUG：运算结果为0时，不能继续运算
				{
					_string.push(input.value);
					if(_type=="plus")
						{
							input.value=parseFloat(result(_string)[0])+parseFloat(result(_string)[1]);							
							input.name="type"
						}
						else if(_type=="minus")
						{
							input.value=parseFloat(result(_string)[0])-parseFloat(result(_string)[1]);							
							input.name="type"
						}
						else if(_type=="multiply")
						{
							input.value=parseFloat(result(_string)[0])*parseFloat(result(_string)[1]);							
							input.name="type"
						}
						else if(_type=="divide")
						{
							input.value=parseFloat(result(_string)[0])/parseFloat(result(_string)[1]);							
							input.name="type"
						}
					break;
				}
				
	}
}

function result(value)//转化为只有末尾2个值的数组
{
	var result=new Array;
	if(value.length%2==0)//数组中储存了偶数个数
	{
		result.push((value[value.length-2]));
		result.push((value[value.length-1]));
		return (result);
	}
	else
	{
		result.push((value[value.length-1]));
		result.push((value[value.length-2]));
		return (result);
	}
}

function checknum(inputvalue)
{
	var input=document.getElementById("input-box");
	if(inputvalue=="+"||inputvalue=="-"||inputvalue=="×"||inputvalue=="÷"||input.value=="0")
	{
		return 0;
	}
}


window.onkeydown = disableRefresh;
function disableRefresh(evt){
evt = evt || window.event;//兼容性判断FF或IE
if (evt.keyCode) 
{
   if(evt.keyCode == 13){operator('result')}
   else if(evt.keyCode == 8){operator('backspace')}
   else if(evt.keyCode == 27){operator('clear')}
   else if(evt.keyCode == 48){typetoinput('0')}
   else if(evt.keyCode == 49){typetoinput('1')}
   else if(evt.keyCode == 50){typetoinput('2')}
   else if(evt.keyCode == 51){typetoinput('3')}
   else if(evt.keyCode == 52){typetoinput('4')}
   else if(evt.keyCode == 53){typetoinput('5')}
   else if(evt.keyCode == 54){typetoinput('6')}
   else if(evt.keyCode == 55){typetoinput('7')}
   else if(evt.keyCode == 56){typetoinput('8')}
   else if(evt.keyCode == 57){typetoinput('9')}
   else if(evt.keyCode == 96){typetoinput('0')}
   else if(evt.keyCode == 97){typetoinput('1')}
   else if(evt.keyCode == 98){typetoinput('2')}
   else if(evt.keyCode == 99){typetoinput('3')}
   else if(evt.keyCode == 100){typetoinput('4')}
   else if(evt.keyCode == 101){typetoinput('5')}
   else if(evt.keyCode == 102){typetoinput('6')}
   else if(evt.keyCode == 103){typetoinput('7')}
   else if(evt.keyCode == 104){typetoinput('8')}
   else if(evt.keyCode == 105){typetoinput('9')}
   else if(evt.keyCode == 110){typetoinput('.')}
   else if(evt.keyCode == 106){operator('multiply')}
   else if(evt.keyCode == 107){operator('plus')}
   else if(evt.keyCode == 111){operator('divide')}
   else if(evt.keyCode == 109){operator('minus')}
}
}