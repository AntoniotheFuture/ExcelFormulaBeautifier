// ExcelFormulaBeautifier
//Code By AntoniotheFuture
//Start: 2019-11-26
//ver 1.1
//Edit：2022-4-10


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

let ExcelFormulaBeautifier = {
	operators:['+','-','*','/','&'], //Newline Operators,not use now 需要换行的运算符,暂未使用
	tabs: '  ', //分隔符
	stringVarName: '_String_',
	lineBreaker: '\n',   //设置输出换行符
	space:' ',      //设置输出空格
	descriptionSpace:' ', //设置描述的输出空格
	tabString:'   ',   //设置解释的分隔符
	deep:0, //最深展开层次
	errors: [],  //错误信息
	errorStr:{
		100:'ExFunctions Not found,ExFunction 未找到或不完整',
		101:'Not match double quotes,双引号数量应为偶数',
		102:'Not match brackets,左右括号数量应相等',
		103:'Invalid comma,无效的逗号:',
		104:'',
		105:'Too much args,函数参数太多'
	},
	results:[],	//结果数组,内容为{level:x,word:s,newLine:b,nextLevel:x} 的obj
	descriptions:[], //解释数组
	pureStrings:[], // 纯字符串
	newLineReg: new RegExp('\r\n','g'),
	tabReg: new RegExp(this.tabs,'g'),
	spaceReg: new RegExp('\\s','g'),
	leftBKReg: new RegExp('\\(','g'),
	rightBKReg: new RegExp('\\)','g'),
	commaReg:  new RegExp(',','g'),
	usedFunction:[], //使用到的函数列表，内容为 {index:x,function:ExFunction,row:x} 的obj
	format:function(formula){
		let functionIndex = 0;
		let strs,tempStr;
		let E = true; //true pick 奇数偶数 true时，加入tempstr，同时反转，否则加入字符串数组
		let words = [];
		let args = [];
		let argCounts = [];
		let lv = 0;
		let leftBKs = [];
		let leftBKCount = 0; //左括号计数

		this.errors = [];
		this.results = [];
		this.pureStrings = [];

		//引用检查
		if(typeof(ExFunction) === 'undefined' || ExFunction == null || ExFunction.length === 0){
			this.errors.push(100);
			return;
		}

		if(typeof(this.deep) != 'number' || this.deep < 1){
			this.deep = 9999;
		}

		//Double quotes check ,双引号检查
		if(((formula.split('"')).length - 1) % 2 != 0){
			this.errors.push(101);
			return;
		}

		//Split by double quotes 按双引号分解输入，解析是否为字符串
		strs = formula.split('"');
		tempStr = '';
		leftBKCount = 0;
		this.usedFunction = [];
		for(let i = 0; i<strs.length; i++){
			if(E){
				//判断是否空，是则表明在字符串内,不处理
				if(strs[i] === ''){
					tempStr = tempStr + '"';
				}
				else{
					E = !E;
					tempStr = tempStr + strs[i];
				}
			}else{
				if(strs[i] === ''){
					tempStr = tempStr + '""';
					E = !E;
				}else{
					E = !E;
					tempStr = tempStr + '"' + this.stringVarName + this.pureStrings.length + '"';
					this.pureStrings.push(strs[i]);    //save strings as array 将纯字符串保存为数组
				}
			}
		}
		//Remove newline and tab 去掉换行符、tab
		tempStr = tempStr.replace(this.newLinereg,'');
		tempStr = tempStr.replace(this.tabReg,'');
		//Remove all spaces 去掉空格
		tempStr = tempStr.replace(this.spaceReg,'');
		//Replace comma with space 去掉带空格的逗号
		tempStr = tempStr.replace(this.leftBKReg,'( ');
		tempStr = tempStr.replace(this.rightBKReg,') ');
		tempStr = tempStr.replace(this.commaReg,', ');

		if(tempStr.split('(').length !== tempStr.split(')').length){
			this.errors.push(102);
			return;
		}

		words = tempStr.split(' ');
		for(let i = 0; i < words.length;i++){
			let word = words[i];
			let hit;  //check if a function ,检查是否Excel函数
			//check if a function ,检查是否Excel函数
			let functionIndex;
			if(word.endsWith('(')){
				if(lv < 0){lv = 0;}
				hit = false;
				leftBKCount ++;
				for(functionIndex = 0;functionIndex < ExFunction.length;functionIndex++){
					if(word.endsWith(ExFunction[functionIndex].Fname + '(')){
						hit = true;
						break;
					}
				}
				if(hit){           //if function
					//添加到使用的函数列表
					this.usedFunction.push({
						index:functionIndex,
						function:ExFunction[functionIndex],
						row:this.results.length
					});
					if(this.results.length>0){
						this.results[this.results.length - 1].newLine = lv < this.deep;
						leftBKs[leftBKs.length-1] = 1;
					}
					if(ExFunction[functionIndex].NewLine === 'Yes'){
						this.results.push({level:lv,word:word,newLine:lv < this.deep,nextLevel:lv + 1});
						leftBKs.push(1);
					}else{
						this.results.push({level:lv,word:word,newLine:false,nextLevel:lv});
						leftBKs.push(0);
					}
					lv += lv < this.deep ? 1 : 0;
					argCounts[argCounts.length-1] = argCounts[argCounts.length-1] + 1;
					args.push(ExFunction[functionIndex].Args);
					argCounts.push(0);
				}else{    //if not function
					leftBKs.push(0);
					if(this.results.length > 0){
						if(this.results[this.results.length-1].newLine){
							lv = this.results[this.results.length -1 ].nextLevel;
							this.results.push({level:lv,word:word,newLine:false,nextLevel:lv});
						}else{
							this.results[this.results.length - 1 ].word += word;
						}
					}else{
						this.results.push({level:0,word:word,newLine:false,nextLevel:0});
					}
				}
			}else if(word.endsWith(')')){
				if(leftBKs[ leftBKs.length-1 ] === 1){
					this.results.push({level:lv,word:word.substr(0,word.length-1),newLine:lv < this.deep,nextLevel:lv});
					lv--;
					if(args.length > 0 && argCounts.length >0){
						argCounts[argCounts.length-1] += 1;
					}
					this.results.push({level:lv,word:')',newLine:false,nextLevel:lv});
				}else{
					this.results[this.results.length-1].word += word;
					this.results[this.results.length-1].newLine = false;
				}
				leftBKs.pop();
			}else if(word.endsWith(',')){
				if(leftBKs[leftBKs.length - 1] === 0){
					this.errors.push('103:' + word);
					break;
				}
				if(this.results.length > 0){
					lv = this.results[this.results.length-1].nextLevel;
				}
				if(this.results[this.results.length-1].newLine){
					this.results.push({level:lv,word:word,newLine:lv < this.deep,nextLevel:lv});
				}else{
					this.results[this.results.length-1].word +=  word;
					this.results[this.results.length-1].newLine = lv < this.deep;
				}
				if(args.length > 0 && argCounts.length >0){
					argCounts[argCounts.length-1] += 1;
				}
			}else{
				//AllRows.push(Lv,Word,0,Lv);
				//AllRows[AllRows.length-1][1] = AllRows[AllRows.length-1][1] + Word;
				//Errors.push("103:error,错误");
			}
		}
		for (let i = 0; i < this.results.length; i++) {
			const result = this.results[i];
			if(result.word === ''){
				this.results.splice(i,1);
			}
		}
	},
	getResultString:function(){  //show Result as string ，将结果以字符串展示
		let output = '';
		for(let i =0;i < this.results.length;i++){
			const result = this.results[i];
			output = output + this.space.repeat(result.level);
			output = output +result.word;
			if(result.newLine){
				output = output + this.lineBreaker;
			}
		}
		for(let i = 0;i < this.pureStrings.length; i++){
			output = output.replace(this.stringVarName + i,this.pureStrings[i]);
		}
		return output;
	},
	getResultArray:function(){  //show Result as string ，将结果以数组展示
		let output = [];
		let row = '';
		for(let i =0 ; i < this.results.length;i++){
			const result = this.results[i];
			row = row + this.space.repeat(result.level < 0 ? 0 : result.level);
			row = row + result.word;
			for(let i = 0;i < this.pureStrings.length; i++){
				row = row.replace(this.stringVarName + i,this.pureStrings[i]);
			}
			if(result.newLine){
				output.push(row);
				row = '';
			}
			if(i === this.results.length - 1 && !result.newLine){
				output.push(row);
			}
		}
		return output;
	},
	explain:function(){    //解释结果
		let AgrsArr = [];
		let UpLvArg = '';
		let ArgLast;
		let hit;
		this.descriptions = [];
		for(let i=0;i< this.results.length;i++){
			UpLvArg = '';
			if(AgrsArr.length>0){
				ArgLast = AgrsArr.length-1;
				UpLvArg = AgrsArr[ArgLast][AgrsArr[ArgLast].length -1];
			}
			hit = false;
			if(this.results[i].word.endsWith('(')){
				for(let functionIndex=0;functionIndex < ExFunction.length;functionIndex++){
					if(this.results[i].word.endsWith(ExFunction[functionIndex].Fname+'(')){
						AgrsArr.push(new Array());
						for(let iii = ExFunction[functionIndex].Args.length;iii>0;iii--){
							AgrsArr[AgrsArr.length-1].push(ExFunction[functionIndex].Fname + ':' + ExFunction[functionIndex].Args[iii-1]);
						}
						this.descriptions.push({
							level:0,
							wordLength:0,
							upLvArg:'',
							newLine:this.results[i].newLine,
							nextLevel:this.results[i].nextLevel
						});
						hit = true;
						break;
					}
				}
				if(!hit){
					this.descriptions.push({
						level:0,
						wordLength:0,
						upLvArg:'',
						newLine:this.results[i].newLine,
						nextLevel:this.results[i].nextLevel
					});
				}
			}else if(this.results[i].word.startsWith(')')){
				this.descriptions.push({
					level:0,
					wordLength:0,
					upLvArg:'',
					newLine:this.results[i].newLine,
					nextLevel:this.results[i].nextLevel
				});
				if(this.results[i].word.endsWith(',')){
					if(AgrsArr.length>0){
						ArgLast = AgrsArr.length-1;
						UpLvArg = AgrsArr[ArgLast][AgrsArr[ArgLast].length -1];
						this.descriptions[this.descriptions.length -1] = {
							level:this.results[i].level,
							wordLength: this.results[i].word.length,
							upLvArg:UpLvArg,
							newLine:this.descriptions[this.descriptions.length -1].newLine,
							nextLevel:this.descriptions[this.descriptions.length -1].nextLevel,
						}
						if(AgrsArr[ArgLast].length>0){
							if(!UpLvArg.endsWith(']')){
								AgrsArr[ArgLast].pop();
								if(AgrsArr[ArgLast].length===0){
									AgrsArr.pop();
								}
							}
						}else{
							this.Errors.push(105);
						}
					}
				}
			}else if(this.results[i].word.endsWith(',')){
				this.descriptions.push({
					level:this.results[i].level,
					wordLength:this.results[i].word.length,
					upLvArg:UpLvArg,
					newLine:this.results[i].newLine,
					nextLevel:this.results[i].nextLevel
				});
				if(UpLvArg !== ''){
					if(AgrsArr[ArgLast].length>0){
						if(!UpLvArg.endsWith(']')){
							AgrsArr[ArgLast].pop();
							if(AgrsArr[ArgLast].length===0){
								AgrsArr.pop();
							}
						}
					}else{
						this.Errors.push(105);
					}
				}
			}else{
				this.descriptions.push({level:this.results[i].level,
					wordLength:this.results[i].word.length,
					upLvArg:UpLvArg,
					newLine:this.results[i].newLine,
					nextLevel:this.results[i].nextLevel
				});
				if(AgrsArr.length>0){
					AgrsArr.pop();
				}
			}
		}
	},
	getExplainsString:function(){  //show Result Descriptions as string ,将解释以字符串展示
		let output = '';
		for(let i =0;i < this.descriptions.length;i++){
			const description = this.descriptions[i];
			if(description.upLvArg !== ''){
				output = output + this.tabString.repeat(description.level) + this.descriptionSpace.repeat(description.wordLength + 2) + '--';
				output = output + description.upLvArg;
			}
			if(description.newLine){
				output = output + this.lineBreaker;
			}
		}
		return output;
	},
	getExplainsArr:function(){  //show Result Descriptions as array ,将解释以数组展示
		let output = [];
		let row = '';
		for(let i =0;i < this.descriptions.length;i++){
			const description = this.descriptions[i];
			if(description.upLvArg !== ''){
				row = '--';
				row = row + description.upLvArg;
			}
			if(description.newLine){
				output.push(row);
				row = '';
			}
			if(i === this.descriptions.length - 1 && !description.newLine){
				output.push(row);
			}
		}
		return output;
	},
	getErrorArr:function(){ //将错误信息以数组输出
		let output = [];
		let row = '';
		for(let i= 0; i<this.errors.length; i++){
			const error = this.errors[i];
			if(typeof(error) === 'number'){
				row = error + ':' + this.errorStr[error];
			}else{
				let code = error.substring(0,3);
				row = code + ':' + this.errorStr[code] + error.substring(3);
			}
			output.push(row);
		}
		return output;
	},
	getUsedFunctionArr:function(){  //将使用过的函数的信息显示出来
		let output = [];    //{index:x,function:obj,rows:[]}
		for (let i = 0; i < this.usedFunction.length; i++) {
			const f = this.usedFunction[i];
			let hit = false;
			for (let ii = 0; ii < output.length; ii++) {
				const o = output[ii];
				if(f.index === output[ii].index){
					o.rows.push(f.row);
					hit = true;
				}
			}
			if(!hit){
				output.push({
					index:f.index,
					function:f.function,
					rows:[f.row]
				});
			}
		}
		return output;
	}
}
