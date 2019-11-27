// ExcelFomulaBeautifier
//Code By AntoniotheFuture
//Start: 2019-11-26
//ver 1.0
//Newline Functions 需要换行的函数列表
var NLF = new Array('BETADIST','BETAINV','BINOMDIST','CHIDIST','CHIINV','CHITEST','CONFIDENCE','COVAR','CRITBINOM','EXPONDIST','FDIST','FINV','FLOOR','FORECAST','FTEST','GAMMADIST','GAMMAINV','HYPGEOMDIST','LOGINV','LOGNORMDIST','NEGBINOMDIST','NORMDIST','NORMINV','PERCENTILE','PERCENTRANK','POISSON','QUARTILE','RANK','TDIST','TINV','TTEST','WEIBULL','ZTEST','CUBEKPIMEMBER','CUBEMEMBER','CUBEMEMBERPROPERTY','CUBERANKEDMEMBER','CUBESET','DAVERAGE','DCOUNT','DCOUNTA','DGET','DMAX','DMIN','DPRODUCT','DSTDEV','DSTDEVP','DSUM','DVAR','DVARP','DATE','DATEDIF','DAYS','DAYS360','EDATE','EOMONTH','NETWORKDAYS','NOW','TIME','TODAY','WORKDAY','YEARFRAC','BESSELI','BESSELJ','BESSELK','BESSELY','COMPLEX','CONVERT','IMDIV','IMPOWER','IMSUB','ACCRINT','ACCRINTM','AMORDEGRC','AMORLINC','COUPDAYBS','COUPDAYS','COUPDAYSNC','COUPNCD','COUPNUM','COUPPCD','CUMIPMT','CUMPRINC','DB','DDB','DISC','DOLLARDE','DOLLARFR','DURATION','EFFECT','FV','FVSCHEDULE','INTRATE','IPMT','ISPMT','MDURATION','MIRR','NOMINAL','NPER','NPV','ODDFPRICE','ODDFYIELD','ODDLPRICE','ODDLYIELD','PMT','PPMT','PRICE','PRICEDISC','PRICEMAT','PV','RATE','RECEIVED','SLN','SYD','TBILLEQ','TBILLPRICE','TBILLYIELD','VDB','XIRR','XNPV','YIELD','YIELDDISC','YIELDMAT','NA','FALSE','IF','IFERROR','TRUE','ADDRESS','CHOOSE','GETPIVOTDATA','HLOOKUP','INDEX','LOOKUP','MATCH','OFFSET','RTD','VLOOKUP','AGGREGATE','ATAN2','CEILING','COMBIN','FLOOR','MMULT','MOD','MROUND','PI','POWER','QUOTIENT','RAND','RANDBETWEEN','ROUND','ROUNDDOWN','ROUNDUP','SERIESSUM','SUBTOTAL','SUMIF','SUMX2MY2','SUMX2PY2','SUMXMY2','AVERAGEIF','CORREL','COUNTIF','FREQUENCY','HYPGEOM.DIST','INTERCEPT','LARGE','PEARSON','PERMUT','PROB','RSQ','SLOPE','SMALL','STANDARDIZE','STEYX','TRIMMEAN','EXACT','REPT','SUBSTITUTE','TEXT','CALL','REGISTER.ID');

//Newline Operators 需要换行的运算符					
var Operators = new Array('+','-','*','/','&');

var Tabs = "\t";
var StringVarName = "_String_";

var ExFomulaBeautifier = {
	InputStr:"",
	Beauti:""
};


//Operators do nothings 不需要处理的运算符 > < =  ^
function ExcelFomulaBeautifier(InputStr){
	var SStart = 1;
	var NewStart;
	var SEnd = 1;
	var Strs;
	var TempStr = "";
	var FomulaStr = "";
	var E = true;  //奇数偶数 true时，加入tempstr，同时反转，否则加入字符串数组
	var DQ = true; //双引号模式
	var LDQ = true; 
	var LeftStr;
	var RightStr;
	var NormalBKC = 0;
	var ArrByBK;
	var i;
	var Hit;
	var Lv = 0;
	var LeftBKC = 0;
	var RightBKC = 0;
	var RightBKArr;
	var Strings = new Array();
	var Errors = new Array();
	//判断输入的里面，双引号数量是否偶数，不是则返回错误
	if(((InputStr.split('"')).length - 1) % 2 === 0){
		
		Strs = InputStr.split('"');
		for(i = 0;i<Strs.length;i++){
			if(E){
				//判断是否空，是则表明在字符串内,不处理
				if(Strs[i] === ""){
					//E = true;
					TempStr = TempStr + '""';
				}
				else{
					E = !E;
					FomulaStr = Strs[i];
					ArrByBK = FomulaStr.split("(");
					for(var ii = 0;ii < ArrByBK.length;ii++){
						Hit = false;
						for(var iii = 0;iii < NLF.length;iii++){
							if(ArrByBK[ii].substr(ArrByBK[ii].length - NLF[iii].length,NLF[iii].length) === NLF[iii]){
								Hit = true;
								break;
								
							}
						}
						if(Hit){
							TempStr = TempStr + Tabs.repeat(Lv) + ArrByBK[ii].substr(0,ArrByBK[ii].length - NLF[iii].length) + "\r\n" + NLF[iii] + "(";
							Lv = Lv + 1;
						}
						else{
							LeftBKC = LeftBKC + 1;
							RightBKArr = ArrByBK[ii].split(")");
							RightBKC = RightBKC + (RightBKArr.length - 1);
							//如果左右括号不匹配
							if(RightBKC > LeftBKC){
								for(var c = 0;c < RightBKArr.length;c++){
									if(c > RightBKC - LeftBKC){
										TempStr = TempStr + RightBKArr[c] + ")" + "\r\n";
									}
									else{
										TempStr = TempStr + RightBKArr[c] + ")";
									}
								}
								Lv = Lv - (RightBKC - LeftBKC);
							}

							NormalBKC = NormalBKC + 1 - (ArrByBK[ii].split(")").length - 1);

						}
					}

				}
			}
			else{
				if(Strs[i] === ""){
					//E = true;
					TempStr = TempStr + '"';
				}
				else{
					E = !E;
					//先将作为文本使用的使用数组保存起来
					TempStr = TempStr + '"' + StringVarName + Strings.length + '"';
					Strings.push(Strs[i]);
				}			
			}
		}	
		for(i = 0;i<Strings.length;i++){
			TempStr = TempStr.replace(StringVarName + i,Strings[i]);		
		}
		
	}
	else{
		Errors.push('101:Not match double quotes');
	}
	
	if(Errors.length > 0){
		TempStr = "Err:\n";
		for(i = 0;i < Errors.length;i ++){
			TempStr = TempStr + Errors[i] + "\n";
		}
	}
	return TempStr;
	
}

function InstrCount(Str,Find){
	return (Str.split(Find)) - 1;
}