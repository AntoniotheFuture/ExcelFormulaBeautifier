// ExcelFormulaBeautifier
//Code By AntoniotheFuture
//Start: 2019-11-26
//ver 1.0
//Newline Functions,you have to put lookup behind vlookup etc 需要换行的函数列表,需要把lookup函数放在vlookup之后，以此类推
var NLF = new Array('BETADIST','BETAINV','BINOMDIST','CHIDIST','CHIINV','CHITEST','CONFIDENCE','COVAR','CRITBINOM','EXPONDIST','FDIST','FINV','FLOOR','FORECAST','FTEST','GAMMADIST','GAMMAINV','HYPGEOMDIST','LOGINV','LOGNORMDIST','NEGBINOMDIST','NORMDIST','NORMINV','PERCENTILE','PERCENTRANK','POISSON','QUARTILE','RANK','TDIST','TINV','TTEST','WEIBULL','ZTEST','CUBEKPIMEMBER','CUBEMEMBER','CUBEMEMBERPROPERTY','CUBERANKEDMEMBER','CUBESET','DAVERAGE','DCOUNT','DCOUNTA','DGET','DMAX','DMIN','DPRODUCT','DSTDEV','DSTDEVP','DSUM','DVAR','DVARP','DATEDIF','DAYS360','EDATE','DATE','EOMONTH','NETWORKDAYS','DAYS','NOW','TIME','TODAY','WORKDAY','YEARFRAC','BESSELI','BESSELJ','BESSELK','BESSELY','COMPLEX','CONVERT','IMDIV','IMPOWER','IMSUB','ACCRINT','ACCRINTM','AMORDEGRC','AMORLINC','COUPDAYBS','COUPDAYS','COUPDAYSNC','COUPNCD','COUPNUM','COUPPCD','CUMIPMT','CUMPRINC','DB','DDB','DISC','DOLLARDE','DOLLARFR','DURATION','EFFECT','FV','FVSCHEDULE','INTRATE','IPMT','ISPMT','MDURATION','MIRR','NOMINAL','NPER','NPV','ODDFPRICE','ODDFYIELD','ODDLPRICE','ODDLYIELD','PMT','PPMT','PRICE','PRICEDISC','PRICEMAT','PV','RATE','RECEIVED','SLN','SYD','TBILLEQ','TBILLPRICE','TBILLYIELD','VDB','XIRR','XNPV','YIELD','YIELDDISC','YIELDMAT','NA','FALSE','IF','IFERROR','TRUE','ADDRESS','CHOOSE','GETPIVOTDATA','HLOOKUP','INDEX','MATCH','OFFSET','RTD','VLOOKUP','LOOKUP','AGGREGATE','ATAN2','CEILING','COMBIN','FLOOR','MMULT','MOD','MROUND','PI','POWER','QUOTIENT','RAND','RANDBETWEEN','ROUND','ROUNDDOWN','ROUNDUP','SERIESSUM','SUBTOTAL','SUMIF','SUMX2MY2','SUMX2PY2','SUMXMY2','AVERAGEIF','CORREL','COUNTIF','FREQUENCY','HYPGEOM.DIST','INTERCEPT','LARGE','PEARSON','PERMUT','PROB','RSQ','SLOPE','SMALL','STANDARDIZE','STEYX','TRIMMEAN','EXACT','REPT','SUBSTITUTE','TEXT','CALL','REGISTER.ID','SUMIFS','COUNTIFS','SUMIF','COUNTIF');


//Newline Operators,not use now 需要换行的运算符,暂未使用
var Operators = new Array('+','-','*','/','&');

var Tabs = "  ";
var StringVarName = "_String_";

//Not Use now
var ExFormulaBeautifier = {
	InputStr:"",
	Beauti:""
};

var FunctionInfos = "";


//Operators do nothings 不需要处理的运算符 > < =  ^
function ExcelFormulaBeautifier(InputStr){
	var Strs;
	var TempStr = "";
	var E = true;  //true pick 奇数偶数 true时，加入tempstr，同时反转，否则加入字符串数组
	var ArrByBK;
	var i;
	var ii;
	var iii;
	var Hit;
	var Lv = 0;
	var RightBKArr;
	var Strings = new Array();
	var Errors = new Array();
	var LeftBKArr = new Array();
	var NoNewLineC = 0;
	var FunL = "";
	var FunLArr;
	var PopStr = "";
	var NewLinereg=new RegExp("\r\n","g");
	var TabReg =new RegExp(Tabs,"g");
	var PReg = new RegExp(",","g");
	var Space = " ";
	// Determine the number of double quotes 判断输入的里面，双引号数量是否偶数，不是则返回错误
	if(((InputStr.split('"')).length - 1) % 2 === 0){
		// Save Strings into a array   先将作为文本使用的使用数组保存起来
		Strs = InputStr.split('"');
		for(i = 0;i<Strs.length;i++){
			if(E){
				//判断是否空，是则表明在字符串内,不处理
				if(Strs[i] === ""){
					//E = true;
					TempStr = TempStr + '"';
				}
				else{
					E = !E;
					TempStr = TempStr + Strs[i];
					//FormulaStr = Strs[i];
					//
				}
			}
			else{
				if(Strs[i] === ""){
					//E = true;
					TempStr = TempStr + '""';
					E = !E;
				}
				else{
					E = !E;
					
					TempStr = TempStr + '"' + StringVarName + Strings.length + '"';
					Strings.push(Strs[i]);
				}			
			}
		}
		//remove newline and tab 去掉换行符、tab
		TempStr = TempStr.replace(NewLinereg,"");
		TempStr = TempStr.replace(TabReg,"");
		FunctionInfos = "";
		//Matching keywords 匹配关键字
		ArrByBK = TempStr.split("(");
		
		//if Left and right brackets do not match如果左右括号不匹配
		if(ArrByBK.length !== TempStr.split(")").length){
			Errors.push('102:Not match bracketss,左右括号数量应相等');
		}
		else{
			TempStr = "";
			for(ii = 0;ii < ArrByBK.length;ii++){
				Hit = false;
				for(iii = 0;iii < NLF.length;iii++){
					if(ArrByBK[ii].substr(ArrByBK[ii].length - NLF[iii].length,NLF[iii].length) === NLF[iii]){
						Hit = true;
						break;

					}
				}
				if(Hit){
					FunL = ArrByBK[ii].substr(0,ArrByBK[ii].length - NLF[iii].length);
					FunLArr = FunL.split(")");
					for(var l=0;l <FunLArr.length - 1;l++){
						//if end-of-line 如果是行尾
						if(TempStr.endsWith("\r\n")){TempStr = TempStr + Tabs.repeat(Lv);}
						if(FunctionInfos.endsWith("\r\n")){FunctionInfos = FunctionInfos + Tabs.repeat(Lv);}
						if(l !==0){LeftBKArr.push(0);}
						// Comma newline逗号换行
						TempStr = TempStr + FunLArr[l].replace(PReg,","  + "\r\n") + ")";
						
						FunctionInfos = FunctionInfos + Space.repeat(FunLArr[l].length + 2) + "--" + FunLArr[l].replace(PReg,","  + "\r\n") + ")";  //函数参数
					}
					PopStr = FunLArr.pop();
					if(TempStr.endsWith("\r\n")){TempStr = TempStr + Tabs.repeat(Lv);}
					if(FunctionInfos.endsWith("\r\n")){FunctionInfos = FunctionInfos + Tabs.repeat(Lv);}    //函数参数
					TempStr = TempStr + PopStr.replace(PReg,","  + "\r\n");
					FunctionInfos = FunctionInfos + Space.repeat(PopStr.length + 2) + "--" + PopStr.replace(PReg,","  + "\r\n");
					LeftBKArr.push(1);
					if(PopStr.indexOf(",")===-1){
						TempStr = TempStr + "\r\n";
						FunctionInfos = FunctionInfos + "\r\n";
					}
					if(TempStr.endsWith("\r\n")){TempStr = TempStr + Tabs.repeat(Lv);}
					if(FunctionInfos.endsWith("\r\n")){FunctionInfos = FunctionInfos + Tabs.repeat(Lv);}    //函数参数
					TempStr = TempStr + NLF[iii];
					FunctionInfos = FunctionInfos + Space.repeat(NLF[iii].length + 2) + "--" + NLF[iii];
					Lv++;
					TempStr = TempStr  + "(" + "\r\n" + Tabs.repeat(Lv); //+ ArrByBK[ii].substr(0,ArrByBK[ii].length - NLF[iii].length) + "\r\n" + Tabs.repeat(Lv++)  
					FunctionInfos = FunctionInfos + "(" + "\r\n" + Tabs.repeat(Lv);
				}
				else{
					RightBKArr = ArrByBK[ii].split(")");
					//not maching no new line 不匹配说明不用换行
					NoNewLineC++;
					
					if(TempStr.endsWith("\r\n")){TempStr = TempStr + Tabs.repeat(Lv);}
					if(FunctionInfos.endsWith("\r\n")){FunctionInfos = FunctionInfos + Tabs.repeat(Lv);}
					TempStr = TempStr + RightBKArr[0].replace(PReg,","  + "\r\n" + Tabs.repeat(Lv));
					FunctionInfos = FunctionInfos + Space.repeat(RightBKArr[0].length + 2) + RightBKArr[0].replace(PReg,","  + "\r\n" + Tabs.repeat(Lv));
					for(iii = 1;iii < RightBKArr.length;iii++){
						if(LeftBKArr.pop() ===1){
							Lv--;
							if(Lv<0){Lv = 0;}
							if(!TempStr.endsWith("\r\n")){TempStr = TempStr + "\r\n";}
							if(!FunctionInfos.endsWith("\r\n")){FunctionInfos = FunctionInfos + "\r\n";}
							TempStr = TempStr + Tabs.repeat(Lv);
							FunctionInfos = FunctionInfos + Tabs.repeat(Lv);
							TempStr = TempStr + ")";// + "\r\n";
							FunctionInfos = FunctionInfos + ")";
							TempStr = TempStr + RightBKArr[iii].replace(PReg,","  + "\r\n" + Tabs.repeat(Lv));
							FunctionInfos = FunctionInfos + Space.repeat(RightBKArr[iii].length + 2) + "--" + RightBKArr[iii].replace(PReg,","  + "\r\n" + Tabs.repeat(Lv));
						}
						else{
							if(TempStr.endsWith("\r\n")){TempStr = TempStr + Tabs.repeat(Lv);}
							if(FunctionInfos.endsWith("\r\n")){FunctionInfos = FunctionInfos + Tabs.repeat(Lv);}
							TempStr = TempStr + ")" + RightBKArr[iii].replace(PReg,","  + "\r\n" + Tabs.repeat(Lv));
							FunctionInfos = FunctionInfos  + Space.repeat(RightBKArr[iii].length + 2) + "--"  + ")" + RightBKArr[iii].replace(PReg,","  + "\r\n" + Tabs.repeat(Lv));
						}
					}
					if(ii!== ArrByBK.length - 1){
						if(TempStr.endsWith("\r\n")){TempStr = TempStr + Tabs.repeat(Lv);}
						if(FunctionInfos.endsWith("\r\n")){FunctionInfos = FunctionInfos + Tabs.repeat(Lv);}
						TempStr = TempStr + "(";
						FunctionInfos = FunctionInfos + Space.repeat(3) + "--" + "(";
						LeftBKArr.push(0);
					}

				}
			}
		}
		
		
		
		
		for(i = 0;i<Strings.length;i++){
			TempStr = TempStr.replace(StringVarName + i,Strings[i]);		
		}
		
	}
	else{
		Errors.push('101:Not match double quotes,双引号数量应为偶数');
	}
	
	if(Errors.length > 0){
		TempStr = "Err:\n";
		for(i = 0;i < Errors.length;i ++){
			TempStr = TempStr + Errors[i] + "\n";
		}
	}
	return TempStr;
	
}