// ExcelFormulaBeautifier
//Code By AntoniotheFuture
//Start: 2019-11-26
//ver 1.0
//Newline Functions,you have to put lookup behind vlookup etc 需要换行的函数列表,需要把lookup函数放在vlookup之后，以此类推
var NLF = new Array("BETADIST","BETAINV","BINOMDIST","CHIDIST","CHIINV","CHITEST","CONFIDENCE","COVAR","CRITBINOM","EXPONDIST","FDIST","FINV","FLOOR","FORECAST","FTEST","GAMMADIST","GAMMAINV","HYPGEOMDIST","LOGINV","LOGNORMDIST","NEGBINOMDIST","NORMDIST","NORMINV","PERCENTILE","PERCENTRANK","POISSON","QUARTILE","RANK","TDIST","TINV","TTEST","WEIBULL","ZTEST","CUBEKPIMEMBER","CUBEMEMBER","CUBEMEMBERPROPERTY","CUBERANKEDMEMBER","CUBESET","DAVERAGE","DCOUNT","DCOUNTA","DGET","DMAX","DMIN","DPRODUCT","DSTDEV","DSTDEVP","DSUM","DVAR","DVARP","DATEDIF","DAYS360","EDATE","DATE","EOMONTH","NETWORKDAYS","DAYS","NOW","TIME","TODAY","WORKDAY","YEARFRAC","BESSELI","BESSELJ","BESSELK","BESSELY","COMPLEX","CONVERT","IMDIV","IMPOWER","IMSUB","ACCRINT","ACCRINTM","AMORDEGRC","AMORLINC","COUPDAYBS","COUPDAYS","COUPDAYSNC","COUPNCD","COUPNUM","COUPPCD","CUMIPMT","CUMPRINC","DB","DDB","DISC","DOLLARDE","DOLLARFR","DURATION","EFFECT","FV","FVSCHEDULE","INTRATE","IPMT","ISPMT","MDURATION","MIRR","NOMINAL","NPER","NPV","ODDFPRICE","ODDFYIELD","ODDLPRICE","ODDLYIELD","PMT","PPMT","PRICE","PRICEDISC","PRICEMAT","PV","RATE","RECEIVED","SLN","SYD","TBILLEQ","TBILLPRICE","TBILLYIELD","VDB","XIRR","XNPV","YIELD","YIELDDISC","YIELDMAT","NA","IF","IFERROR","ADDRESS","CHOOSE","GETPIVOTDATA","HLOOKUP","INDEX","MATCH","OFFSET","RTD","VLOOKUP","LOOKUP","AGGREGATE","ATAN2","CEILING","COMBIN","FLOOR","MMULT","MOD","MROUND","PI","POWER","QUOTIENT","RAND","RANDBETWEEN","ROUND","ROUNDDOWN","ROUNDUP","SERIESSUM","SUBTOTAL","SUMIF","SUMX2MY2","SUMX2PY2","SUMXMY2","AVERAGEIF","CORREL","COUNTIF","FREQUENCY","HYPGEOM.DIST","INTERCEPT","LARGE","PEARSON","PERMUT","PROB","RSQ","SLOPE","SMALL","STANDARDIZE","STEYX","TRIMMEAN","EXACT","REPT","SUBSTITUTE","TEXT","CALL","REGISTER.ID","SUMIFS","COUNTIFS","SUMIF","COUNTIF");

//var ExFunctions = JSON.parse(ExFunction);

//Newline Operators,not use now 需要换行的运算符,暂未使用
var Operators = new Array("+","-","*","/","&");

var Tabs = "  ";
var StringVarName = "_String_";
var Errors = new Array();
//Not Use now
//var ExFormulaBeautifier = {
//	InputStr:"",
//	Beauti:""
//};

var FunctionInfos = "";
var AllRows = new Array();   //Lv,Content,NewLine,NewLv
var DesAllRow = new Array(); //Lv,SpaceC,Content,NewLine,NewLv
var Strings = new Array(); //save the temp strings

function ExcelFormulaBeautifier2(InputStr){
	var i;
	var ii;
	var Strs;
	var NewLinereg=new RegExp("\r\n","g");
	var TabReg =new RegExp(Tabs,"g");
	var SpaceReg = new RegExp("\s","g");
	var LeftBKReg = new RegExp("\\(","g");
	var RightBKReg = new RegExp("\\)","g");
	var CommaReg = new RegExp(",","g");
	var E = true;
	var TempStr;//true pick 奇数偶数 true时，加入tempstr，同时反转，否则加入字符串数组
	var AllWordArr = new Array();
	var AllArgs = new Array();
	var ArgCounts = new Array();
	var LeftBKC;
	var Word;
	var Lv = 0;
	var Hit;
	var LeftBKArr = new Array();
	
	Errors = new Array();
	AllRows = new Array();
	DesAllRow = new Array();
	Strings = new Array();
	if(((InputStr.split('"')).length - 1) % 2 === 0){
		Strs = InputStr.split('"');
		TempStr = "";
		LeftBKC = 0;
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
					TempStr = TempStr + '"“';
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
		//remove all spaces
		TempStr = TempStr.replace(SpaceReg,"");
		//replace comma with space
		TempStr = TempStr.replace(LeftBKReg,"( ");
		TempStr = TempStr.replace(RightBKReg,") ");
		TempStr = TempStr.replace(CommaReg,", ");
		
		AllWordArr = TempStr.split(" ");
		
		if(TempStr.split("(").length !== TempStr.split(")").length){
			Errors.push("102:Not match bracketss,左右括号数量应相等");
			return;
		}
		
		for(i = 0;i < AllWordArr.length;i++){
			Word = AllWordArr[i];
			if(Word.endsWith("(")){
				Hit = false;
				LeftBKC++;
				for(ii = 0;ii < ExFunction.length;ii++){
					if(Word.endsWith(ExFunction[ii].Fname + "(")){ 
						Hit = true;
						
						DesAllRow.push(new Array(Lv,Word.length,ExFunction[ii].Des));
						break;
					}
				}
				
				
				//if function
				if(Hit){
					ii --;
					if(ExFunction[ii].NewLine === "Yes"){
						AllRows.push(new Array(Lv,Word,1,Lv+1));
					}
					else{
						AllRows.push(new Array(Lv,Word,0,Lv));
					}
					Lv ++;
					
					if(AllArgs.length > 0 && ArgCounts.length >0){
						DesAllRow[DesAllRow.length-1][2] = DesAllRow[DesAllRow.length-1][2] + " | " + AllArgs[AllArgs.length-1][ArgCounts[ArgCounts.length-1]];
					}
					ArgCounts[ArgCounts.length-1] = ArgCounts[ArgCounts.length-1] + 1;
					AllArgs.push(ExFunction[ii].Args);
					ArgCounts.push(0);
					LeftBKArr.push(1);
				}
				
				//if not function
				else{
					LeftBKArr.push(0);
					if(AllRows[AllRows.length-1][2] ===1){
						Lv = AllRows[AllRows.length-1][3];
						AllRows.push(new Array(Lv,Word,0,Lv));
						
					}
					else{
						AllRows[AllRows.length - 1] = AllRows[AllRows.length - 1] + Word;
						
					}
					//AllRows[AllRows.length - 1] = AllRows[AllRows.length - 1] + Word;
				}
				
				
			}
			else if(Word.endsWith(")")){
				if(LeftBKArr[LeftBKArr.length-1] === 1){
					AllRows.push(new Array(Lv,Word.substr(0,Word.length-1),1,Lv-1));
					if(AllArgs.length > 0 && ArgCounts.length >0){
						DesAllRow[DesAllRow.length-1][1] = AllArgs[AllArgs.length-1][ArgCounts[ArgCounts.length-1]];
						ArgCounts[ArgCounts.length-1] = ArgCounts[ArgCounts.length-1] + 1;
					}
					Lv--;
					AllRows.push(new Array(Lv,")",0,Lv));
				}
				else{
					AllRows.push(new Array(Lv,Word,0,Lv));
				}
				LeftBKArr.pop();
			}
			else if(Word.endsWith(",")){
				if(AllRows[AllRows.length-1][2]===1){
					AllRows.push(new Array(Lv,Word,1,Lv));
				}
				else{
					AllRows[AllRows.length-1][1] = AllRows[AllRows.length-1][1] + Word;
					AllRows[AllRows.length-1][2] = 1;
				}
				if(AllArgs.length > 0 && ArgCounts.length >0){
					DesAllRow[DesAllRow.length-1][1] = AllArgs[AllArgs.length-1][ArgCounts[ArgCounts.length-1]];
					ArgCounts[ArgCounts.length-1] = ArgCounts[ArgCounts.length-1] + 1;
				}
			}
			else{
				//Errors.push("103:error,错误");
			}
		}
	}
	else{
		Errors.push("101:Not match double quotes,双引号数量应为偶数");
	}
	
}
	
function GetResult(){
	var Result = "";
	var i;
	for(i =0;i < AllRows.length;i++){
		
		Result = Result + Tabs.repeat(AllRows[i][0]) + AllRows[i][1];
		if(AllRows[i][2]===1){
			Result = Result + "\r\n";
		}
	}
	for(i = 0;i<Strings.length;i++){
		Result = Result.replace(StringVarName + i,Strings[i]);		
	}
	return Result;

}
	
function GetDes(){
	var Result = "";
	var i;
	var Space = " ";
	for(i =0;i < DesAllRow.length;i++){
		Result = Result + Tabs.repeat(DesAllRow[i][0]) + Space.repeat(DesAllRow[i][1]) + DesAllRow[i][2];
		if(DesAllRow[i][2]===1){
			Result = Result + "\r\n";
		}
	}
	return Result;
	
	
}

function GetErrors(){
	
	var ErrorsStr = "";
	for(var i=0;i<Errors.length;i++){
		ErrorsStr = ErrorsStr + Errors[i] + "\r\n";
	}
	return ErrorsStr;
	
}


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
	var FunctionName="";
	var FArgs;
	var FunObj;
	var NewFArgs;
	var AllArgs = new Array();
	var ArgCounts = new Array();
	var CommaArr = new Array();
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
					TempStr = TempStr + '"“';
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
			Errors.push("102:Not match bracketss,左右括号数量应相等");
		}
		else{
			TempStr = "";
			for(ii = 0;ii < ArrByBK.length;ii++){
				Hit = false;
				FunctionName = "";
				FArgs = "";
				//for(iii = 0;iii < NLF.length;iii++){
				//	if(ArrByBK[ii].substr(ArrByBK[ii].length - NLF[iii].length,NLF[iii].length) === NLF[iii]){
				//		Hit = true;
				//		break;

				//	}
				//}
				//match a function
				for(iii = 0;iii < ExFunction.length;iii++){
					//FunctionName = String.uppercase(NLF[iii].Fname);
					if(ArrByBK[ii].endsWith(ExFunction[iii].Fname)){
					   	Hit = true;
						FunObj = ExFunction[iii];
					   	NewFArgs =FunObj.Args;
					   	FunctionName = FunObj.Fname;
					   	break;
					}
				}
				
				if(Hit){
					FunL = ArrByBK[ii].substr(0,ArrByBK[ii].length - FunctionName.length);
					FunLArr = FunL.split(")");
					for(var l=0;l <FunLArr.length - 1;l++){
						//if end-of-line 如果是行尾
						if(TempStr.endsWith("\r\n")){TempStr = TempStr + Tabs.repeat(Lv);}
						if(FunctionInfos.endsWith("\r\n")){FunctionInfos = FunctionInfos + Tabs.repeat(Lv);}
						if(l !==0){LeftBKArr.push(0);}
						// Comma newline逗号换行//切换参数
						
						CommaArr = FunLArr[l].split(",");
						TempStr = TempStr + CommaArr[0];
						ArgCount[ArgCount.length - 1] = ArgCount[ArgCount.length - 1] + 1;
						FunctionInfos = FunctionInfos + Space.repeat(FunLArr[l].length + 2) + "--" + AllArgs[AllArgs.length - 1][ArgCount[ArgCount.length - 1]] + "\r\n" ;
						for(var CA = 1;CA < CommaArr.length;CA++){
							TempStr = TempStr + CommaArr[CA] + "," + "\r\n";
							ArgCount[ArgCount.length - 1] = ArgCount[ArgCount.length - 1] + 1;
							FunctionInfos = FunctionInfos + pace.repeat(FunLArr[l].length + 2) + "--" + AllArgs[AllArgs.length - 1][ArgCount[ArgCount.length - 1]] + "\r\n" ;
						}
						TempStr = TempStr + ")";
						//TempStr = TempStr + FunLArr[l].replace(PReg,","  + "\r\n") + ")";
						FunctionInfos = FunctionInfos + ")";
						//FunctionInfos = FunctionInfos + Space.repeat(FunLArr[l].length + 2) + "--" + FunLArr[l].replace(PReg,","  + "\r\n") + ")";  //函数参数
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
					TempStr = TempStr + FunctionName;
					FunctionInfos = FunctionInfos + Space.repeat(FunctionName.length + 2) + "--" + FunctionName;
					Lv++;
					TempStr = TempStr  + "(" + "\r\n" + Tabs.repeat(Lv); //+ ArrByBK[ii].substr(0,ArrByBK[ii].length - NLF[iii].length) + "\r\n" + Tabs.repeat(Lv++)  
					FunctionInfos = FunctionInfos + "(" + "\r\n" + Tabs.repeat(Lv);
					//将参数列表转移到下一个
					FArgs = NewFArgs;
					AllArgs.push(NewFArgs);
					ArgCount.push(0);
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
		Errors.push("101:Not match double quotes,双引号数量应为偶数");
	}
	
	if(Errors.length > 0){
		TempStr = "Err:\n";
		for(i = 0;i < Errors.length;i ++){
			TempStr = TempStr + Errors[i] + "\n";
		}
	}
	return TempStr;
	
}