// ExcelFormulaBeautifier
//Code By AntoniotheFuture
//Start: 2019-11-26
//ver 1.0


//Newline Operators,not use now 需要换行的运算符,暂未使用
var Operators = new Array("+","-","*","/","&");

var Tabs = "  ";
var StringVarName = "_String_";
var Errors = new Array();

var FunctionInfos = "";
var AllRows = new Array();   //Lv,Content,NewLine,NewLv
var DesAllRow = new Array(); //Lv,SpaceC,Function:Arg|FunctionName,NewLine,NewLv Function:Arg = ""
var Strings = new Array(); //save the temp strings

//I hate IE

if(typeof String.prototype.startsWith !== 'function'){
	String.prototype.startsWith = function(prefix){
		return this.slice(0,prefix.length) === prefix;
	};
}

if(typeof String.prototype.endsWith !== 'function'){
	String.prototype.endsWith = function(suffix){
		return this.indexOf(suffix,this.length - suffix.length) !== -1;
		
	};
}

if(typeof String.prototype.repeat !== 'function'){
	String.prototype.repeat = function(suffix){
		var Result="";
		for(var i =0;i<suffix;i++){
			Result = Result + this;
		}
		return Result;
	};
	
}

function ExcelFormulaBeautifier2(InputStr){
	var i;
	var ii;
	var Strs;
	var NewLinereg=new RegExp("\r\n","g");
	var TabReg =new RegExp(Tabs,"g");
	var SpaceReg = new RegExp("\\s","g");
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
			Errors.push("102:Not match brackets,左右括号数量应相等");
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
						break;
					}
				}
				
				if(Lv<0){Lv=0;}
				//if function
				if(Hit){
					//ii --;
					if(AllRows.length>0){
						AllRows[AllRows.length-1][2] = 1;
						LeftBKArr[LeftBKArr.length-1] = 1;
					}
					if(ExFunction[ii].NewLine === "Yes"){
						AllRows.push(new Array(Lv,Word,1,Lv+1));
						LeftBKArr.push(1);
					}
					else{
						AllRows.push(new Array(Lv,Word,0,Lv));
						LeftBKArr.push(0);
					}
					Lv ++;
					ArgCounts[ArgCounts.length-1] = ArgCounts[ArgCounts.length-1] + 1;
					AllArgs.push(ExFunction[ii].Args);
					ArgCounts.push(0);
				}
				
				//if not function
				else{
					LeftBKArr.push(0);
					if(AllRows.length>0){
						
					
						if(AllRows[AllRows.length-1][2] ===1){
							Lv = AllRows[AllRows.length-1][3];
							AllRows.push(new Array(Lv,Word,0,Lv));

						}
						else{
							
							AllRows[AllRows.length - 1] = AllRows[AllRows.length - 1] + Word;

						}
					}
					else{
						AllRows.push(new Array(0,Word,0,0));
					}
					//AllRows[AllRows.length - 1] = AllRows[AllRows.length - 1] + Word;
				}
				
				
			}
			else if(Word.endsWith(")")){
				if(LeftBKArr[LeftBKArr.length-1] === 1){
					
					AllRows.push(new Array(Lv,Word.substr(0,Word.length-1),1,Lv));
					Lv--;
					if(AllArgs.length > 0 && ArgCounts.length >0){
						ArgCounts[ArgCounts.length-1] = ArgCounts[ArgCounts.length-1] + 1;
					}
					AllRows.push(new Array(Lv,")",0,Lv));
				}
				else{
					AllRows[AllRows.length-1][1] = AllRows[AllRows.length-1][1] + Word;
					AllRows[AllRows.length-1][2] = 0;
				}
				LeftBKArr.pop();
			}
			else if(Word.endsWith(",")){
				if(LeftBKArr[LeftBKArr.length-1]===0){
					Errors.push("103:Invalid comma,无效的逗号");
					break;
				}
				if(AllRows.length>0){
					Lv = AllRows[AllRows.length-1][3];
				}
				if(AllRows[AllRows.length-1][2]===1){
					AllRows.push(new Array(Lv,Word,1,Lv));
				}
				else{
					AllRows[AllRows.length-1][1] = AllRows[AllRows.length-1][1] + Word;
					AllRows[AllRows.length-1][2] = 1;
				}
				if(AllArgs.length > 0 && ArgCounts.length >0){
					ArgCounts[ArgCounts.length-1] = ArgCounts[ArgCounts.length-1] + 1;
				}
			}
			else{
				//AllRows.push(Lv,Word,0,Lv);
				//AllRows[AllRows.length-1][1] = AllRows[AllRows.length-1][1] + Word;
				//Errors.push("103:error,错误");
			}
		}
	}
	else{
		Errors.push("101:Not match double quotes,双引号数量应为偶数");
	}
	
}
	
function GetResult(NewLineString,SpaceString){
	var Result = "";
	var i;
	for(i =0;i < AllRows.length;i++){
		if(AllRows[i][0]>0){
			Result = Result + SpaceString.repeat(AllRows[i][0]);
		}
		Result = Result + AllRows[i][1];
		if(AllRows[i][2]===1){
			Result = Result + NewLineString;// "\r\n";
		}
	}
	for(i = 0;i<Strings.length;i++){
		Result = Result.replace(StringVarName + i,Strings[i]);		
	}
	return Result;

}
	
function GetDes(NewLineString,TabString,SpaceString){
	var Result = "";
	var i;
	var ii;
	var Space = " ";
	var AgrsArr = new Array;
	var UpLvArg = "";
	var ArgLast;
	var Hit;
	var Pushed = false;//上一层是否已经push
	DesAllRow = new Array();
	for(i=0;i<AllRows.length;i++){
		UpLvArg = "";
		if(AgrsArr.length>0){
			ArgLast = AgrsArr.length-1;
			UpLvArg = AgrsArr[ArgLast][AgrsArr[ArgLast].length -1];
		}
		Hit = false;
		if(AllRows[i][1].endsWith("(")){
			for(ii=0;ii<ExFunction.length;ii++){
				if(AllRows[i][1].endsWith(ExFunction[ii].Fname+"(")){
					AgrsArr.push(new Array());
					for(var iii=ExFunction[ii].Args.length;iii>0;iii--){
						AgrsArr[AgrsArr.length-1].push(ExFunction[ii].Fname + ":" + ExFunction[ii].Args[iii-1]);
					}
					//AgrsArr.push(ExFunction[ii].Args.reverse());
						//DesAllRow.push(new Array(AllRows[i][0],AllRows[i][1].length,UpLvArg + "|" ,AllRows[i][2],AllRows[i][3])); //+ ExFunction[ii].Des
					//}
					//if(UpLvArg!==""){
					//	AgrsArr[ArgLast].pop();
					//}
					DesAllRow.push(new Array(0,0,"",AllRows[i][2],AllRows[i][3]));
					Hit = true;
					break;
				}
			}
			if(!Hit){
				DesAllRow.push(new Array(0,0,"",AllRows[i][2],AllRows[i][3]));
			}
		}
		else if(AllRows[i][1].startsWith(")")){
			//AgrsArr.pop();	
			DesAllRow.push(new Array(0,0,"",AllRows[i][2],AllRows[i][3]));
			if(AllRows[i][1].endsWith(",")){
				if(AgrsArr.length>0){
					ArgLast = AgrsArr.length-1;
					UpLvArg = AgrsArr[ArgLast][AgrsArr[ArgLast].length -1];
					DesAllRow[DesAllRow.length -1][2] = UpLvArg;
					DesAllRow[DesAllRow.length -1][0] = AllRows[i][0];
					DesAllRow[DesAllRow.length -1][1] = AllRows[i][1].length
					if(AgrsArr[ArgLast].length>0){
						if(!UpLvArg.endsWith("]")){
							AgrsArr[ArgLast].pop();
							if(AgrsArr[ArgLast].length===0){
								AgrsArr.pop();
							}
						}
					}
					else{
						Errors.push("105:Too much args,函数参数太多");
					}
				}
			}
		}
		//else if(AllRows[i][1].endsWith(")")){
		//	if(AllRows[i][2] === 1){
		//		DesAllRow.push(new Array(AllRows[i][0],AllRows[i][1].length,UpLvArg,AllRows[i][2],AllRows[i][3]));
		//		if(AgrsArr.length >0){
		//			AgrsArr[ArgLast].pop();
		//			if(AgrsArr[ArgLast].length===0){
		//				AgrsArr.pop();
		//			}
		//		}
		//	}else{
		//		DesAllRow.push(new Array(0,0,"",AllRows[i][2],AllRows[i][3]));
		//		
		//	}
		//}
		else if(AllRows[i][1].endsWith(",")){
			DesAllRow.push(new Array(AllRows[i][0],AllRows[i][1].length,UpLvArg,AllRows[i][2],AllRows[i][3]));
			
			
			
			//作为函数结尾
			//if(AllRows[i][1].startsWith(")")){
			//	DesAllRow.push(new Array(0,0,"",AllRows[i][2],AllRows[i][3]));
			//}
			//if(AllRows[i][1].endsWith("),")){
			//	DesAllRow.push(new Array(AllRows[i][0],AllRows[i][1].length,UpLvArg,AllRows[i][2],AllRows[i][3]));
			//	AgrsArr.pop();
			//	if(AgrsArr.length>0){
			//		ArgLast = AgrsArr.length-1;
			//		UpLvArg = AgrsArr[ArgLast][AgrsArr[ArgLast].length -1];
			//		DesAllRow[DesAllRow.length-1][2] = UpLvArg + "|" + DesAllRow[DesAllRow.length-1][2];
			//	}
			//}else{
			//	DesAllRow.push(new Array(AllRows[i][0],AllRows[i][1].length,UpLvArg,AllRows[i][2],AllRows[i][3]));
			//	Pushed = true;
				
			//}
			if(UpLvArg!==""){
				if(AgrsArr[ArgLast].length>0){
					if(!UpLvArg.endsWith("]")){
						AgrsArr[ArgLast].pop();
						if(AgrsArr[ArgLast].length===0){
							AgrsArr.pop();
						}
					}
				}
				else{
					Errors.push("105:Too much args,函数参数太多");
				}
			}
			
		}
		else{
			DesAllRow.push(new Array(AllRows[i][0],AllRows[i][1].length,UpLvArg,AllRows[i][2],AllRows[i][3]));
			if(AgrsArr.length>0){
				AgrsArr.pop();
			}
			//if(AllRows[i][2] === 1){
			//	DesAllRow.push(new Array(AllRows[i][0],AllRows[i][1].length,UpLvArg,AllRows[i][2],AllRows[i][3]));
			//	if(AgrsArr.length >0){
			//		AgrsArr[ArgLast].pop();
			//	
			//		if(AgrsArr[ArgLast].length===0){
			//			AgrsArr.pop();
			//		}
			//	}
			//}
			
			//DesAllRow.push(new Array(0,0,"",AllRows[i][2],AllRows[i][3]));
		}

	}
	
	
	for(i =0;i < DesAllRow.length;i++){
		//if(DesAllRow[i][0]>0){
		if(DesAllRow[i][2]!==""){
			
		
			Result = Result + TabString.repeat(DesAllRow[i][0]) + SpaceString.repeat(DesAllRow[i][1]+2) + "--";
		//}
			Result = Result + DesAllRow[i][2];
		}
		if(DesAllRow[i][3]===1){
			Result = Result + NewLineString; //"\r\n";
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
