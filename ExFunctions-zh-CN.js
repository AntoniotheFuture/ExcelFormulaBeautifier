var ExFunction = [{
		"Fname": "FORECAST.ETS.SEASONALITY",
		"NewLine": "Yes",
		"Des": "计算时间线上预测值的置信区间。",
		"Args": ["价值观", "时间线", "[数据完成]", "[聚合]"]
	},
	{
		"Fname": "FORECAST.ETS.CONFINT",
		"NewLine": "Yes",
		"Des": "使用指数平滑算法根据一系列现有值预测时间线上的未来值。",
		"Args": ["目标日期", "价值观", "时间线", "[置信水平]", "[季节性]", "[数据完成]", "[聚合]"]
	},
	{
		"Fname": "FORECAST.ETS.STAT",
		"NewLine": "Yes",
		"Des": "计算时间线中重复模式的长度。",
		"Args": ["价值观", "时间线", "统计类型", "[季节性]", "[数据完成]", "[聚合]"]
	},
	{
		"Fname": "BINOM.DIST.RANGE",
		"NewLine": "Yes",
		"Des": "从指定的试验次数返回给定次数的成功的二项分布概率。",
		"Args": ["审判", "概率s", "数字s", "[编号s2]"]
	},
	{
		"Fname": "NETWORKDAYS.INTL",
		"NewLine": "Yes",
		"Des": "计算两个提供日期之间的整个工作日数，不包括周末和节假日。该功能允许用户指定哪些天算作周末和节假日。",
		"Args": ["开始日期", "结束日期", "[周末]", "[假日]"]
	},
	{
		"Fname": "CEILING.PRECISE",
		"NewLine": "Yes",
		"Des": "将提供的数字四舍五入到提供的有效倍数。",
		"Args": ["数值", "[意义]"]
	},
	{
		"Fname": "CONFIDENCE.NORM",
		"NewLine": "Yes",
		"Des": "使用正态分布计算置信值，该值可用于为提供的概率和样本大小构建总体均值的置信区间。假设总体的标准差是已知的。",
		"Args": ["α", "标准偏差", "大小"]
	},
	{
		"Fname": "FORECAST.LINEAR",
		"NewLine": "Yes",
		"Des": "计算与时间序列预测相关的指定统计值。",
		"Args": ["x", "已知的", "已知x"]
	},
	{
		"Fname": "GAMMALN.PRECISE",
		"NewLine": "No",
		"Des": "返回 Gamma 函数的自然对数 Γ'n'。",
		"Args": ["x"]
	},
	{
		"Fname": "PERCENTRANK.EXC",
		"NewLine": "Yes",
		"Des": "计算提供的数组中指定值的相对位置，介于 0 和 1 'exclusive' 之间。",
		"Args": ["阵列", "x", "[意义]"]
	},
	{
		"Fname": "PERCENTRANK.INC",
		"NewLine": "Yes",
		"Des": "计算提供的数组中指定值的相对位置，介于 0 和 1 'inclusive' 之间。",
		"Args": ["阵列", "x", "[意义]"]
	},
	{
		"Fname": "PERCENTILE.EXC",
		"NewLine": "Yes",
		"Des": "对于提供的值范围和提供的 k '在 0 和 1 之间排除'，返回第 k 个百分位数'即 k% 的数据值低于该值的值'。",
		"Args": ["阵列", "k"]
	},
	{
		"Fname": "PERCENTILE.INC",
		"NewLine": "Yes",
		"Des": "对于提供的值范围和提供的 k“介于 0 和 1 之间”，返回第 k 个百分位数“即低于 k% 的数据值的值”。",
		"Args": ["阵列", "k"]
	},
	{
		"Fname": "CHISQ.DIST.RT",
		"NewLine": "Yes",
		"Des": "计算卡方分布的概率密度函数或累积分布函数。",
		"Args": ["x", "自由度"]
	},
	{
		"Fname": "FLOOR.PRECISE",
		"NewLine": "Yes",
		"Des": "将提供的数字向下舍入为提供的有效倍数。",
		"Args": ["数值", "[意义]"]
	},
	{
		"Fname": "NEGBINOM.DIST",
		"NewLine": "Yes",
		"Des": "给定单个事件的成功概率，Excel NEGBINOM.DIST 函数计算负二项分布的概率质量函数或累积分布函数。",
		"Args": ["f号", "数字s", "概率s", "累积的"]
	},
	{
		"Fname": "CEILING.MATH",
		"NewLine": "Yes",
		"Des": "将提供的数字从零四舍五入到给定数字的最接近的倍数。",
		"Args": ["数值", "[意义]", "[模式]"]
	},
	{
		"Fname": "CHISQ.INV.RT",
		"NewLine": "Yes",
		"Des": "计算卡方分布的左尾概率的倒数。",
		"Args": ["可能性", "自由度"]
	},
	{
		"Fname": "CONFIDENCE.T",
		"NewLine": "Yes",
		"Des": "使用正态分布计算置信值，该值可用于为提供的概率和样本大小构建总体均值的置信区间。假设总体的标准差是已知的。",
		"Args": ["α", "标准偏差", "大小"]
	},
	{
		"Fname": "COVARIANCE.P",
		"NewLine": "Yes",
		"Des": "计算提供的两组值的协方差。",
		"Args": ["阵列1", "阵列2"]
	},
	{
		"Fname": "COVARIANCE.S",
		"NewLine": "Yes",
		"Des": "计算提供的两组值的总体协方差。",
		"Args": ["阵列1", "阵列2"]
	},
	{
		"Fname": "ERFC.PRECISE",
		"NewLine": "No",
		"Des": "计算互补误差函数，在提供的下限和无穷大之间积分。",
		"Args": ["x"]
	},
	{
		"Fname": "FORECAST.ETS",
		"NewLine": "Yes",
		"Des": "预测拟合到一组提供的 x 和 y 值的线性趋势线上的未来点。",
		"Args": ["目标日期", "价值观", "时间线", "[季节性]", "[数据完成]", "[聚合]"]
	},
	{
		"Fname": "GETPIVOTDATA",
		"NewLine": "Yes",
		"Des": "测试提供的数字是否大于提供的步长并返回：",
		"Args": ["数据字段", "数据透视表", "[字段1]", "[项目1]", "[字段2]", "[项目2]"]
	},
	{
		"Fname": "HYPGEOM.DIST",
		"NewLine": "Yes",
		"Des": "创建到指定位置的超链接。",
		"Args": ["样品s", "数字样本", "人口", "数字弹出", "累积的"]
	},
	{
		"Fname": "LOGNORM.DIST",
		"NewLine": "Yes",
		"Des": "计算提供的 x 值的对数正态概率密度函数或累积对数正态分布函数。",
		"Args": ["x", "ln(x)的平均数", "标准偏差", "累积的"]
	},
	{
		"Fname": "NEGBINOMDIST",
		"NewLine": "Yes",
		"Des": "给定单个事件的成功概率，Excel NEGBINOMDIST 函数计算给定参数集的负二项分布。",
		"Args": ["f号", "数字s", "概率s"]
	},
	{
		"Fname": "PERMUTATIONA",
		"NewLine": "Yes",
		"Des": "计算集合中指定数量的对象的重复排列数.",
		"Args": ["数值", "选择的号码"]
	},
	{
		"Fname": "POISSON.DIST",
		"NewLine": "Yes",
		"Des": "计算一组提供的参数的泊松概率质量函数或累积泊松概率函数。",
		"Args": ["x", "ln(x)的平均数", "累积的"]
	},
	{
		"Fname": "QUARTILE.EXC",
		"NewLine": "Yes",
		"Des": "根据 0 到 1 的百分位数范围，返回所提供值范围的请求四分位数。",
		"Args": ["阵列", "夸脱"]
	},
	{
		"Fname": "QUARTILE.INC",
		"NewLine": "Yes",
		"Des": "根据 0 到 1 '包含'的百分位数范围，返回所提供值范围的请求四分位数。",
		"Args": ["阵列", "夸脱"]
	},
	{
		"Fname": "WEIBULL.DIST",
		"NewLine": "Yes",
		"Des": "计算一组提供的参数的 Weibull 概率密度函数或 Weibull 累积分布函数。",
		"Args": ["x", "α", "β", "累积的"]
	},
	{
		"Fname": "WORKDAY.INTL",
		"NewLine": "Yes",
		"Des": "返回一个日期，该日期是在给定开始日期之前提供的“不包括周末和节假日”的工作日数。该功能允许用户指定一周中的哪些天算作周末。",
		"Args": ["开始日期", "天", "[周末]", "[假日]"]
	},
	{
		"Fname": "NETWORKDAYS",
		"NewLine": "Yes",
		"Des": "计算两个提供的日期“包括开始日期和结束日期”之间的工作日数。计算包括所有工作日“周一 - 周五”，不包括提供的假期列表。",
		"Args": ["开始日期", "结束日期", "[假日]"]
	},
	{
		"Fname": "NUMBERVALUE",
		"NewLine": "Yes",
		"Des": "以与语言环境无关的方式将文本字符串转换为数字。",
		"Args": ["文本", "[小数分隔符]", "[组分隔符]"]
	},
	{
		"Fname": "CONCATENATE",
		"NewLine": "Yes",
		"Des": "将一系列提供的文本字符串连接成一个组合文本字符串。",
		"Args": ["文本1", "[文本2]"]
	},
	{
		"Fname": "ERF.PRECISE",
		"NewLine": "No",
		"Des": "计算误差函数，积分在两个提供的限制之间。",
		"Args": ["x"]
	},
	{
		"Fname": "FORMULATEXT",
		"NewLine": "No",
		"Des": "预测拟合到一组提供的 x 和 y 值的线性趋势线上的未来点。",
		"Args": ["参考"]
	},
	{
		"Fname": "HYPGEOMDIST",
		"NewLine": "Yes",
		"Des": "返回总体样本中指定成功次数的超几何分布值。",
		"Args": ["样品s", "数字样本", "人口", "数字弹出"]
	},
	{
		"Fname": "IMCONJUGATE",
		"NewLine": "No",
		"Des": "返回提供的复数的虚数系数。",
		"Args": ["数值"]
	},
	{
		"Fname": "ISO.CEILING",
		"NewLine": "Yes",
		"Des": "测试提供的值是否为数字。如果是，则函数返回 TRUE；否则返回 FALSE。",
		"Args": ["数值", "[意义]"]
	},
	{
		"Fname": "LOGNORM.INV",
		"NewLine": "Yes",
		"Des": "对于提供的概率，计算 x 的累积对数正态分布函数的倒数.",
		"Args": ["可能性", "ln(x)的平均数", "标准偏差"]
	},
	{
		"Fname": "LOGNORMDIST",
		"NewLine": "Yes",
		"Des": "在提供的 x 值处计算累积对数正态分布函数。",
		"Args": ["x", "ln(x)的平均数", "标准偏差"]
	},
	{
		"Fname": "NORM.S.DIST",
		"NewLine": "Yes",
		"Des": "计算提供值的标准正态分布函数。",
		"Args": ["z", "累积的"]
	},
	{
		"Fname": "PERCENTRANK",
		"NewLine": "Yes",
		"Des": "以百分比计算指定值在一组值中的相对位置。",
		"Args": ["阵列", "x", "[意义]"]
	},
	{
		"Fname": "RANDBETWEEN",
		"NewLine": "Yes",
		"Des": "在两个提供的整数之间生成一个随机整数。",
		"Args": ["底部", "顶部"]
	},
	{
		"Fname": "STANDARDIZE",
		"NewLine": "Yes",
		"Des": "返回以提供的均值和标准差为特征的分布的归一化值。",
		"Args": ["x", "ln(x)的平均数", "标准偏差"]
	},
	{
		"Fname": "AVERAGEIFS",
		"NewLine": "Yes",
		"Des": "在提供的数组中查找满足指定条件的值，并返回第二个提供的数组中相应值的平均值“即统计平均值”。",
		"Args": ["平均范围", "条件范围1", "标准1", "[条件范围2", "标准2]"]
	},
	{
		"Fname": "BINOM.DIST",
		"NewLine": "Yes",
		"Des": "将二进制“Base 2”数字转换为八进制“Base 8”数字。",
		"Args": ["数字s", "审判", "概率s", "累积的"]
	},
	{
		"Fname": "CHISQ.DIST",
		"NewLine": "Yes",
		"Des": "计算卡方分布的右尾概率的倒数。",
		"Args": ["x", "自由度", "累积的"]
	},
	{
		"Fname": "CHISQ.TEST",
		"NewLine": "Yes",
		"Des": "计算卡方分布的右尾概率的倒数。",
		"Args": ["实际范围", "预期范围"]
	},
	{
		"Fname": "CONFIDENCE",
		"NewLine": "Yes",
		"Des": "将一系列提供的文本字符串或其他值连接在一起，形成一个组合文本字符串。",
		"Args": ["α", "标准偏差", "大小"]
	},
	{
		"Fname": "COUNTBLANK",
		"NewLine": "No",
		"Des": "返回提供的一组单元格或值中的非空白数。",
		"Args": ["范围"]
	},
	{
		"Fname": "COUPDAYSNC",
		"NewLine": "Yes",
		"Des": "计算包含结算日期的息票期间的天数。",
		"Args": ["解决", "成熟度", "频率", "[依据]"]
	},
	{
		"Fname": "ERROR.TYPE",
		"NewLine": "No",
		"Des": "计算互补误差函数，在提供的下限和无穷大之间积分。",
		"Args": ["错误值"]
	},
	{
		"Fname": "EXPON.DIST",
		"NewLine": "Yes",
		"Des": "计算数学常数 e 的值，提高到给定数字的幂.",
		"Args": ["x", "λ", "累积的"]
	},
	{
		"Fname": "FACTDOUBLE",
		"NewLine": "No",
		"Des": "返回所提供数字的阶乘。",
		"Args": ["数值"]
	},
	{
		"Fname": "FLOOR.MATH",
		"NewLine": "Yes",
		"Des": "将提供的数字向零舍入到指定重要性的最接近的倍数。",
		"Args": ["数值", "[意义]", "[模式]"]
	},
	{
		"Fname": "FVSCHEDULE",
		"NewLine": "Yes",
		"Des": "计算具有定期固定付款和固定利率的投资的未来价值。",
		"Args": ["主要的", "日程安排"]
	},
	{
		"Fname": "GAMMA.DIST",
		"NewLine": "Yes",
		"Des": "返回指定数字 n 的 Gamma 函数值 Γ'n'。",
		"Args": ["x", "α", "β", "累积的"]
	},
	{
		"Fname": "ISOWEEKNUM",
		"NewLine": "No",
		"Des": "返回所提供日期的 ISO 周数。",
		"Args": ["日期"]
	},
	{
		"Fname": "NORM.S.INV",
		"NewLine": "No",
		"Des": "计算提供的概率值的标准正态累积分布函数的倒数。",
		"Args": ["可能性"]
	},
	{
		"Fname": "PERCENTILE",
		"NewLine": "Yes",
		"Des": "对于提供的值范围和提供的 k，返回第 k 个百分位数“即低于 k% 的数据值的值”。",
		"Args": ["阵列", "k"]
	},
	{
		"Fname": "SUBSTITUTE",
		"NewLine": "Yes",
		"Des": "在原始文本字符串中替换给定文本字符串的一个或多个实例。",
		"Args": ["文本", "旧文本", "新文本", "[实例数]"]
	},
	{
		"Fname": "SUMPRODUCT",
		"NewLine": "Yes",
		"Des": "返回一组提供的数组中相应值的乘积之和。",
		"Args": ["阵列1", "[阵列2]", "[阵列3]"]
	},
	{
		"Fname": "TBILLPRICE",
		"NewLine": "Yes",
		"Des": "返回国库券每 100 美元面值的价格。",
		"Args": ["解决", "成熟度", "折扣"]
	},
	{
		"Fname": "TBILLYIELD",
		"NewLine": "Yes",
		"Des": "计算国库券的收益率。",
		"Args": ["解决", "成熟度", "公共关系"]
	},
	{
		"Fname": "AVERAGEIF",
		"NewLine": "Yes",
		"Des": "返回提供的数字列表的算术平均值。",
		"Args": ["范围", "条件", "[平均范围]"]
	},
	{
		"Fname": "DATEVALUE",
		"NewLine": "No",
		"Des": "将提供的年、月和日转换为 Excel 日期。",
		"Args": ["日期文本"]
	},
	{
		"Fname": "TIMEVALUE",
		"NewLine": "No",
		"Des": "将时间的文本表示形式转换为 Excel 时间。",
		"Args": ["时间文本"]
	},
	{
		"Fname": "AMORDEGRC",
		"NewLine": "Yes",
		"Des": "接受行号和列号，并将单元格引用作为文本字符串返回。",
		"Args": ["成本", "购买日期", "第一期", "救助", "期间", "率", "[依据]"]
	},
	{
		"Fname": "BETA.DIST",
		"NewLine": "Yes",
		"Des": "对于指定的 x 阶和值，返回 Bessel 函数 Yn'x'，“也称为 Weber 函数或 Neumann 函数”。",
		"Args": ["x", "α", "β", "累积的", "[甲]", "[乙]"]
	},
	{
		"Fname": "BINOM.INV",
		"NewLine": "Yes",
		"Des": "返回指定范围内指定试验次数的成功次数的二项分布概率。",
		"Args": ["审判", "概率s", "α"]
	},
	{
		"Fname": "BINOMDIST",
		"NewLine": "Yes",
		"Des": "返回累积二项分布的倒数。",
		"Args": ["数字s", "审判", "概率s", "累积的"]
	},
	{
		"Fname": "BITLSHIFT",
		"NewLine": "Yes",
		"Des": "返回两个提供的整数的按位“与”。",
		"Args": ["数值", "移位量"]
	},
	{
		"Fname": "BITRSHIFT",
		"NewLine": "Yes",
		"Des": "返回两个提供的整数的按位“或”。",
		"Args": ["数值", "移位量"]
	},
	{
		"Fname": "CHISQ.INV",
		"NewLine": "Yes",
		"Des": "计算卡方分布的右尾概率",
		"Args": ["可能性", "自由度"]
	},
	{
		"Fname": "COUPDAYBS",
		"NewLine": "Yes",
		"Des": "返回表中满足一组给定条件的行数。",
		"Args": ["解决", "成熟度", "频率", "[依据]"]
	},
	{
		"Fname": "CRITBINOM",
		"NewLine": "Yes",
		"Des": "计算提供的两组值的样本协方差。",
		"Args": ["审判", "概率s", "α"]
	},
	{
		"Fname": "EXPONDIST",
		"NewLine": "Yes",
		"Des": "对于给定的 x 值和参数 λ，Excel EXPON.DIST 函数计算指数分布的概率密度函数或累积分布函数的值。",
		"Args": ["x", "λ", "累积的"]
	},
	{
		"Fname": "F.DIST.RT",
		"NewLine": "Yes",
		"Des": "计算“右尾”F 概率分布，它衡量两个数据集之间的多样性程度。",
		"Args": ["x", "自由度1", "自由度2"]
	},
	{
		"Fname": "FISHERINV",
		"NewLine": "No",
		"Des": "计算提供值的 Fisher 变换。",
		"Args": ["y"]
	},
	{
		"Fname": "FREQUENCY",
		"NewLine": "Yes",
		"Des": "将公式作为文本字符串返回。",
		"Args": ["数据数组", "垃圾箱阵列"]
	},
	{
		"Fname": "GAMMA.INV",
		"NewLine": "Yes",
		"Des": "对于一组提供的参数，Excel Gamma.Dist 函数计算 Gamma 分布的累积分布或概率密度函数的值。",
		"Args": ["可能性", "α", "β"]
	},
	{
		"Fname": "GAMMADIST",
		"NewLine": "Yes",
		"Des": "返回 Gamma 累积分布的倒数。",
		"Args": ["x", "α", "β", "累积的"]
	},
	{
		"Fname": "HYPERLINK",
		"NewLine": "Yes",
		"Des": "返回一个整数，表示提供的 Excel 时间的小时部分。",
		"Args": ["链接位置", "[友好名称]"]
	},
	{
		"Fname": "IMAGINARY",
		"NewLine": "No",
		"Des": "返回复数的绝对值“模”。",
		"Args": ["数值"]
	},
	{
		"Fname": "IMPRODUCT",
		"NewLine": "Yes",
		"Des": "返回提供的复数，提高到给定的幂。",
		"Args": ["数值1", "λ2"]
	},
	{
		"Fname": "INTERCEPT",
		"NewLine": "Yes",
		"Des": "将提供的数字截断为最接近的整数。",
		"Args": ["已知的", "已知x"]
	},
	{
		"Fname": "ISFORMULA",
		"NewLine": "No",
		"Des": "测试提供的数字“或数字表达式”是否计算为偶数，如果是，则返回 TRUE；否则，函数返回 FALSE。",
		"Args": ["参考"]
	},
	{
		"Fname": "ISLOGICAL",
		"NewLine": "No",
		"Des": "测试指定单元格是否包含公式，如果是，则返回 TRUE；否则，函数返回 FALSE。",
		"Args": ["价值"]
	},
	{
		"Fname": "ISNONTEXT",
		"NewLine": "No",
		"Des": "测试初始提供的表达式“或值”是否返回 Excel #N/A 错误，如果是，则返回 TRUE；否则函数返回 FALSE。",
		"Args": ["价值"]
	},
	{
		"Fname": "MDURATION",
		"NewLine": "Yes",
		"Des": "计算支付定期利息的证券的修正麦考利久期，假设面值为 100 美元。",
		"Args": ["解决", "成熟度", "优惠券", "yld公司", "频率", "[依据]"]
	},
	{
		"Fname": "MODE.MULT",
		"NewLine": "Yes",
		"Des": "在提供的数字列表中返回统计模式“最常出现的值”的垂直数组。",
		"Args": ["数字1", "[数字2]"]
	},
	{
		"Fname": "MODE.SNGL",
		"NewLine": "Yes",
		"Des": "在提供的数字列表中返回统计模式“最常出现的值”。如果提供的数据中有 2 个或更多最频繁出现的值，则该函数返回这些值中的最低值。",
		"Args": ["数字1", "[数字2]"]
	},
	{
		"Fname": "NORM.DIST",
		"NewLine": "Yes",
		"Des": "计算提供的 x 值和提供的分布均值和标准差的正态概率密度函数或累积正态分布函数。",
		"Args": ["x", "ln(x)的平均数", "标准偏差", "累积的"]
	},
	{
		"Fname": "NORMSDIST",
		"NewLine": "No",
		"Des": "计算提供值的标准正态累积分布函数。",
		"Args": ["z"]
	},
	{
		"Fname": "ODDFPRICE",
		"NewLine": "Yes",
		"Des": "计算具有奇数“短期或长期”第一期的证券每 100 美元面值的价格。",
		"Args": ["解决", "成熟度", "问题", "第一张优惠券", "率", "yld公司", "赎回", "频率", "[依据]）"]
	},
	{
		"Fname": "ODDFYIELD",
		"NewLine": "Yes",
		"Des": "计算具有奇数“短期或长期”第一期的证券的收益率。",
		"Args": ["解决", "成熟度", "问题", "第一张优惠券", "率", "公共关系", "赎回", "频率", "[依据]）"]
	},
	{
		"Fname": "ODDFYIELD",
		"NewLine": "Yes",
		"Des": "计算最后一期奇数“空头或多头”证券每 100 美元面值的价格。",
		"Args": ["解决", "成熟度", "问题", "第一张优惠券", "率", "公共关系", "赎回", "频率", "[依据]）"]
	},
	{
		"Fname": "ODDLPRICE",
		"NewLine": "Yes",
		"Des": "计算最后一个周期为奇数“短期或长期”的证券的收益率。",
		"Args": ["解决", "成熟度", "最后的兴趣", "率", "yld公司", "赎回", "频率", "[依据]"]
	},
	{
		"Fname": "PDURATION",
		"NewLine": "Yes",
		"Des": "计算投资达到指定未来值所需的周期数。",
		"Args": ["率", "现值总额", "fv公司"]
	},
	{
		"Fname": "PRICEDISC",
		"NewLine": "Yes",
		"Des": "计算每面值为 100 美元的贴现证券的价格。",
		"Args": ["解决", "成熟度", "折扣", "赎回", "[依据]"]
	},
	{
		"Fname": "ROUNDDOWN",
		"NewLine": "Yes",
		"Des": "将提供的数字向下舍入到零，到指定的小数位数。",
		"Args": ["数值", "数字"]
	},
	{
		"Fname": "T.DIST.2T",
		"NewLine": "Yes",
		"Des": "计算双尾学生 T 分布，这是一种连续概率分布，经常用于在小样本数据集上检验假设。",
		"Args": ["x", "自由度"]
	},
	{
		"Fname": "T.DIST.RT",
		"NewLine": "Yes",
		"Des": "计算右尾学生 T 分布，这是一种连续概率分布，经常用于在小样本数据集上测试假设。",
		"Args": ["x", "自由度"]
	},
	{
		"Fname": "TRANSPOSE",
		"NewLine": "No",
		"Des": "转置'一个单元格数组'即函数将单元格的水平范围复制到垂直范围，反之亦然'。",
		"Args": ["阵列"]
	},
	{
		"Fname": "YIELDDISC",
		"NewLine": "Yes",
		"Des": "计算贴现证券的年收益率。",
		"Args": ["解决", "成熟度", "公共关系", "赎回", "[依据]"]
	},
	{
		"Fname": "COUNTIFS",
		"NewLine": "Yes",
		"Des": "返回提供的范围内满足给定条件的单元格数。",
		"Args": ["条件范围1", "标准1", "[条件范围2", "标准2]"]
	},
	{
		"Fname": "COUPDAYS",
		"NewLine": "Yes",
		"Des": "计算从付息期开始到结算日期的天数。",
		"Args": ["解决", "成熟度", "频率", "[依据]"]
	},
	{
		"Fname": "ACCRINTM",
		"NewLine": "Yes",
		"Des": "返回支付定期利息的证券的应计利息。",
		"Args": ["问题", "解决", "率", "[标准件]", "[依据]"]
	},
	{
		"Fname": "AMORLINC",
		"NewLine": "Yes",
		"Des": "为法国会计系统的用户提供。",
		"Args": ["成本", "购买日期", "第一期", "救助", "期间", "率", "[依据]"]
	},
	{
		"Fname": "AVERAGEA",
		"NewLine": "Yes",
		"Des": "返回提供的数字列表的算术平均值。",
		"Args": ["值1", "[值2]"]
	},
	{
		"Fname": "BAHTTEXT",
		"NewLine": "No",
		"Des": "在一个或多个数组中找到满足一组提供的标准的条目，并返回另一个提供的数组中相应值的平均值“即统计平均值”。",
		"Args": ["数值"]
	},
	{
		"Fname": "BETA.INV",
		"NewLine": "Yes",
		"Des": "为一组提供的参数计算累积 beta 分布函数或 Beta 分布的概率密度函数.",
		"Args": ["可能性", "α", "β", "[甲]", "[乙]"]
	},
	{
		"Fname": "BETADIST",
		"NewLine": "Yes",
		"Des": "计算所提供概率的累积 beta 概率密度函数的倒数.",
		"Args": ["x", "α", "β", "[甲]", "[乙]"]
	},
	{
		"Fname": "CUMPRINC",
		"NewLine": "Yes",
		"Des": "计算两个指定期间之间为贷款或投资支付的累计利息。",
		"Args": ["率", "核电厂", "现值总额", "开始时间段", "期末", "类型"]
	},
	{
		"Fname": "DAVERAGE",
		"NewLine": "Yes",
		"Des": "将日期的文本表示形式转换为 Excel 日期。",
		"Args": ["数据库", "区域", "条件"]
	},
	{
		"Fname": "DOLLARDE",
		"NewLine": "Yes",
		"Des": "将提供的数字四舍五入到指定的小数位数，然后将其转换为具有货币格式的文本字符串。",
		"Args": ["零碎美元", "分数"]
	},
	{
		"Fname": "DOLLARFR",
		"NewLine": "Yes",
		"Des": "将小数形式的美元值转换为以小数表示的美元值。",
		"Args": ["十进制美元", "分数"]
	},
	{
		"Fname": "DPRODUCT",
		"NewLine": "Yes",
		"Des": "将十进制表示法的美元值转换为以小数表示法表示的美元值。",
		"Args": ["数据库", "区域", "条件"]
	},
	{
		"Fname": "DURATION",
		"NewLine": "Yes",
		"Des": "计算数据库中满足用户指定条件的选定记录的字段“列”的总和。",
		"Args": ["解决", "成熟度", "优惠券", "yld公司", "频率", "[依据]"]
	},
	{
		"Fname": "F.INV.RT",
		"NewLine": "Yes",
		"Des": "计算提供概率的累积 F 分布的倒数。",
		"Args": ["可能性", "自由度1", "自由度2"]
	},
	{
		"Fname": "FORECAST",
		"NewLine": "Yes",
		"Des": "将提供的数字向下舍入为提供的有效倍数。",
		"Args": ["x", "已知的", "已知x"]
	},
	{
		"Fname": "GAMMAINV",
		"NewLine": "Yes",
		"Des": "返回 Gamma 分布，它经常用于提供可能具有偏态分布的值的概率，例如排队分析。",
		"Args": ["可能性", "α", "β"]
	},
	{
		"Fname": "INDIRECT",
		"NewLine": "Yes",
		"Des": "返回提供的复数的正切。",
		"Args": ["参考文本", "[a1]"]
	},
	{
		"Fname": "ISNUMBER",
		"NewLine": "No",
		"Des": "测试提供的值是否为文本。如果不是，则函数返回 TRUE；如果提供的值为文本，则函数返回 FALSE。",
		"Args": ["价值"]
	},
	{
		"Fname": "MINVERSE",
		"NewLine": "No",
		"Des": "计算方阵的逆。",
		"Args": ["阵列"]
	},
	{
		"Fname": "NORM.INV",
		"NewLine": "Yes",
		"Des": "计算提供的 x 值和提供的分布均值和标准差的累积正态分布函数的倒数。",
		"Args": ["可能性", "ln(x)的平均数", "标准偏差"]
	},
	{
		"Fname": "NORMDIST",
		"NewLine": "Yes",
		"Des": "计算正态概率密度函数或累积正态分布。提供的一组参数的函数。",
		"Args": ["x", "ln(x)的平均数", "标准偏差", "累积的"]
	},
	{
		"Fname": "NORMSINV",
		"NewLine": "No",
		"Des": "计算提供的概率值的标准正态累积分布函数的倒数。",
		"Args": ["可能性"]
	},
	{
		"Fname": "PRICEMAT",
		"NewLine": "Yes",
		"Des": "计算在到期时支付利息的证券每面值 100 美元的价格。",
		"Args": ["解决", "成熟度", "问题", "率", "yld公司", "[依据]"]
	},
	{
		"Fname": "QUARTILE",
		"NewLine": "Yes",
		"Des": "返回所提供值范围的请求四分位数。",
		"Args": ["阵列", "夸脱"]
	},
	{
		"Fname": "QUOTIENT",
		"NewLine": "Yes",
		"Des": "返回两个提供的数字之间除法的整数部分。",
		"Args": ["分子", "分母"]
	},
	{
		"Fname": "RANK.AVG",
		"NewLine": "Yes",
		"Des": "在提供的值数组中返回给定值的统计排名。如果列表中有重复值，则返回平均排名。",
		"Args": ["数值", "引用", "[命令]"]
	},
	{
		"Fname": "RECEIVED",
		"NewLine": "Yes",
		"Des": "计算完全投资证券到期时收到的金额。",
		"Args": ["解决", "成熟度", "投资", "折扣", "[依据]"]
	},
	{
		"Fname": "SUBTOTAL",
		"NewLine": "Yes",
		"Des": "执行指定的计算“例如总和、乘积、平均值等”对于提供的一组值。",
		"Args": ["函数num", "参考文献1", "[参考文献2]"]
	},
	{
		"Fname": "T.INV.2T",
		"NewLine": "Yes",
		"Des": "计算双尾学生 T 分布的倒数，这是一种连续概率分布，经常用于在小样本数据集上测试假设。",
		"Args": ["可能性", "自由度"]
	},
	{
		"Fname": "TEXTJOIN",
		"NewLine": "Yes",
		"Des": "将一系列提供的文本字符串连接成一个组合文本字符串。如果需要，用户可以指定要在各个文本项之间添加的分隔符。",
		"Args": ["[分隔符]", "[忽略空值]", "文本1", "[文本2]"]
	},
	{
		"Fname": "TRIMMEAN",
		"NewLine": "Yes",
		"Des": "计算一组提供的值的修剪平均值“或截断平均值”。",
		"Args": ["阵列", "百分比"]
	},
	{
		"Fname": "YEARFRAC",
		"NewLine": "Yes",
		"Des": "返回由两个提供的日期之间的整天数表示的一年中的分数。",
		"Args": ["开始日期", "结束日期", "[依据]"]
	},
	{
		"Fname": "YIELDMAT",
		"NewLine": "Yes",
		"Des": "计算到期支付利息的证券的年收益率。",
		"Args": ["解决", "成熟度", "问题", "率", "公共关系", "[依据]"]
	},
	{
		"Fname": "COUNTIF",
		"NewLine": "Yes",
		"Des": "返回提供范围内的空白单元格的数量。",
		"Args": ["范围", "条件"]
	},
	{
		"Fname": "WORKDAY",
		"NewLine": "Yes",
		"Des": "返回一个日期，该日期是在给定开始日期之前提供的“不包括周末和节假日”的工作日数。",
		"Args": ["开始日期", "天", "[假日]"]
	},
	{
		"Fname": "WEEKDAY",
		"NewLine": "Yes",
		"Des": "返回一个整数，表示所提供日期的星期几。",
		"Args": ["序列号", "[返回类型]"]
	},
	{
		"Fname": "UNICHAR",
		"NewLine": "No",
		"Des": "返回与提供的数字相关的 Unicode 字符。",
		"Args": ["数值"]
	},
	{
		"Fname": "EOMONTH",
		"NewLine": "Yes",
		"Des": "返回给定名义利率和每年复利期数的实际年利率。",
		"Args": ["开始日期", "月"]
	},
	{
		"Fname": "HLOOKUP",
		"NewLine": "Yes",
		"Des": "将十六进制“Base 16”数字转换为八进制“Base 8”数字。",
		"Args": ["查找值", "表数组", "行索引数", "[范围查找]"]
	},
	{
		"Fname": "VLOOKUP",
		"NewLine": "Yes",
		"Des": "在数据数组“或表”的左侧列中查找给定值，并从数组的另一列返回相应的值。",
		"Args": ["查找值", "表数组", "列索引数", "[范围查找]"]
	},
	{
		"Fname": "ACCRINT",
		"NewLine": "Yes",
		"Des": "返回任何提供的数字的绝对值“即模数”。",
		"Args": ["问题", "首要利益", "解决", "率", "[标准件]", "频率", "[依据]", "[计算方法]"]
	},
	{
		"Fname": "ADDRESS",
		"NewLine": "Yes",
		"Des": "计算所提供值的双曲反正切 'coth'。",
		"Args": ["行数", "列数", "[绝对值]", "[a1]", "[工作表文本]"]
	},
	{
		"Fname": "AVERAGE",
		"NewLine": "Yes",
		"Des": "计算一组提供的值的平均偏差。",
		"Args": ["数字1", "[数字2]"]
	},
	{
		"Fname": "BESSELI",
		"NewLine": "Yes",
		"Des": "将数字转换为提供的基数“基数”，并返回计算值的文本表示形式。",
		"Args": ["x", "n"]
	},
	{
		"Fname": "BESSELJ",
		"NewLine": "Yes",
		"Des": "计算修正后的 Bessel 函数，In'x'，“也称为双曲 Bessel 函数”。这些函数等效于 Bessel 函数，对纯虚参数求值。",
		"Args": ["x", "n"]
	},
	{
		"Fname": "BESSELK",
		"NewLine": "Yes",
		"Des": "返回指定阶数和 x 值的 Bessel 函数 Jn'x'。",
		"Args": ["x", "n"]
	},
	{
		"Fname": "BESSELY",
		"NewLine": "Yes",
		"Des": "计算修正的贝塞尔函数 Kn'x'，也称为双曲贝塞尔函数。这些是贝塞尔函数的等价物，对纯虚构参数进行评估。",
		"Args": ["x", "n"]
	},
	{
		"Fname": "BETAINV",
		"NewLine": "Yes",
		"Des": "计算一组提供的参数的累积 beta 概率密度函数.",
		"Args": ["可能性", "α", "β", "[甲]", "[乙]"]
	},
	{
		"Fname": "BIN2DEC",
		"NewLine": "No",
		"Des": "使用迭代过程来计算所提供概率的累积 beta 概率密度函数的倒数。",
		"Args": ["数值"]
	},
	{
		"Fname": "BIN2HEX",
		"NewLine": "Yes",
		"Des": "将二进制“以 2 为底的数字”转换为十进制数。",
		"Args": ["数值", "[地点]"]
	},
	{
		"Fname": "BIN2OCT",
		"NewLine": "Yes",
		"Des": "将二进制“Base 2”数字转换为十六进制“Base 16”数字。",
		"Args": ["数值", "[地点]"]
	},
	{
		"Fname": "CEILING",
		"NewLine": "Yes",
		"Des": "返回两个提供的整数的按位 'XOR' 'exclusive 'OR''。",
		"Args": ["数值", "意义"]
	},
	{
		"Fname": "CHIDIST",
		"NewLine": "Yes",
		"Des": "返回与提供的字符集编号“从 1 到 255”相关的字符。",
		"Args": ["x", "自由度"]
	},
	{
		"Fname": "CHITEST",
		"NewLine": "Yes",
		"Des": "对两个提供的“观察到的和预期的频率”数据集执行卡方检验，并返回集之间的差异仅仅是由于抽样误差引起的概率。",
		"Args": ["实际范围", "预期范围"]
	},
	{
		"Fname": "COLUMNS",
		"NewLine": "No",
		"Des": "返回提供的引用中的第一列编号或当前列的编号。",
		"Args": ["阵列"]
	},
	{
		"Fname": "COMBINA",
		"NewLine": "Yes",
		"Des": "计算集合中给定数量对象的“以任何顺序”组合的数量。",
		"Args": ["数值", "选择的号码"]
	},
	{
		"Fname": "COMPLEX",
		"NewLine": "Yes",
		"Des": "计算集合中给定数量对象的重复组合数.",
		"Args": ["实数", "数量", "[后缀]"]
	},
	{
		"Fname": "CONVERT",
		"NewLine": "Yes",
		"Des": "使用学生 T 分布计算置信度值，该值可用于为提供的概率和提供的样本量构建总体均值的置信区间。假设总体的标准差是已知的。",
		"Args": ["数值", "来自单位", "到单位"]
	},
	{
		"Fname": "COUPNCD",
		"NewLine": "Yes",
		"Des": "对于证券，在给定条件下，Excel Coupdaysnc 函数计算从结算日到下一个息票日的天数。",
		"Args": ["解决", "成熟度", "频率", "[依据]"]
	},
	{
		"Fname": "COUPNUM",
		"NewLine": "Yes",
		"Des": "对于具有给定条件的证券，Excel Coupncd 函数计算结算日期之后的下一个息票日期。",
		"Args": ["解决", "成熟度", "频率", "[依据]"]
	},
	{
		"Fname": "COUPPCD",
		"NewLine": "Yes",
		"Des": "计算证券结算日和到期日之间应付的票息数，四舍五入到最接近的整数票息。",
		"Args": ["解决", "成熟度", "频率", "[依据]"]
	},
	{
		"Fname": "CUMIPMT",
		"NewLine": "Yes",
		"Des": "计算所提供角度的双曲余割 'csch'.",
		"Args": ["率", "核电厂", "现值总额", "开始时间段", "期末", "类型"]
	},
	{
		"Fname": "DAYS360",
		"NewLine": "Yes",
		"Des": "返回两个提供的日期之间的天数。",
		"Args": ["开始日期", "结束日期", "[方法]"]
	},
	{
		"Fname": "DCOUNTA",
		"NewLine": "Yes",
		"Des": "返回包含数值的单元格的数量，在数据库的字段“列”中仅用于选定的记录。",
		"Args": ["数据库", "[字段]", "条件"]
	},
	{
		"Fname": "DEC2BIN",
		"NewLine": "Yes",
		"Des": "使用双倍余额递减法或其他指定的折旧率计算资产的折旧。",
		"Args": ["数值", "[地点]"]
	},
	{
		"Fname": "DEC2HEX",
		"NewLine": "Yes",
		"Des": "将十进制数转换为二进制“Base 2”数。",
		"Args": ["数值", "[地点]"]
	},
	{
		"Fname": "DEC2OCT",
		"NewLine": "Yes",
		"Des": "将指定基数的数字的文本表示形式转换为十进制值。",
		"Args": ["数值", "[地点]"]
	},
	{
		"Fname": "DECIMAL",
		"NewLine": "Yes",
		"Des": "将十进制数转换为十六进制“Base 16”数。",
		"Args": ["文本", "基数"]
	},
	{
		"Fname": "DEGREES",
		"NewLine": "No",
		"Des": "十六进制“base 16”、十进制“base 10”、八进制“base 8”和二进制“base 2”是工程和计算中最常用的数字系统。因此，Excel 提供了将数值与这些系统中的每一个进行转换的函数。",
		"Args": ["角"]
	},
	{
		"Fname": "DSTDEVP",
		"NewLine": "Yes",
		"Des": "仅针对选定记录计算数据库中字段“列”的样本标准差。要包含在计算中的记录由一组一个或多个用户指定的标准定义。",
		"Args": ["数据库", "区域", "条件"]
	},
	{
		"Fname": "GAMMALN",
		"NewLine": "No",
		"Des": "返回 Gamma 累积分布的倒数。",
		"Args": ["x"]
	},
	{
		"Fname": "GEOMEAN",
		"NewLine": "Yes",
		"Des": "返回两个或多个提供的整数的最大公约数。",
		"Args": ["数字1", "[数字2]"]
	},
	{
		"Fname": "HARMEAN",
		"NewLine": "Yes",
		"Des": "通过一组给定的 y 值和“可选”的一组或多组 x 值计算指数增长曲线。然后，该函数扩展曲线以计算额外提供的一组新 x 值的额外 y 值。",
		"Args": ["数字1", "[数字2]"]
	},
	{
		"Fname": "HEX2BIN",
		"NewLine": "Yes",
		"Des": "将十六进制“Base 16”数字转换为二进制“Base 2”数字。",
		"Args": ["数值", "[地点]"]
	},
	{
		"Fname": "HEX2DEC",
		"NewLine": "No",
		"Des": "计算一组提供的值的调和平均值。",
		"Args": ["数值"]
	},
	{
		"Fname": "HEX2OCT",
		"NewLine": "Yes",
		"Des": "将十六进制 'a base-16 number' 转换为十进制数。",
		"Args": ["数值", "[地点]"]
	},
	{
		"Fname": "IFERROR",
		"NewLine": "Yes",
		"Des": "测试提供的条件，如果条件评估为 TRUE，则返回一个结果，如果条件评估为 FALSE，则返回另一个结果。",
		"Args": ["价值", "错误时的值"]
	},
	{
		"Fname": "IMLOG10",
		"NewLine": "No",
		"Des": "返回提供的复数的自然对数。",
		"Args": ["数值"]
	},
	{
		"Fname": "IMPOWER",
		"NewLine": "Yes",
		"Des": "计算提供的复数的以 2 为底的对数。",
		"Args": ["数值", "数值"]
	},
	{
		"Fname": "INTRATE",
		"NewLine": "Yes",
		"Des": "通过提供的一组 x 和 y 值计算线性回归线的截距“y 轴交点处的值”。",
		"Args": ["解决", "成熟度", "投资", "赎回", "[依据]"]
	},
	{
		"Fname": "ISBLANK",
		"NewLine": "No",
		"Des": "返回提供的一系列周期性现金流的内部收益率，即初始投资值和一系列净收入值。",
		"Args": ["价值"]
	},
	{
		"Fname": "ISERROR",
		"NewLine": "No",
		"Des": "测试初始提供的表达式“或值”是否返回任何 Excel 错误，#N/A 错误除外。如果是，则函数返回逻辑值 TRUE；如果提供的值不是错误或 #N/A 错误，则 Iserr 函数返回 FALSE。",
		"Args": ["价值"]
	},
	{
		"Fname": "MDETERM",
		"NewLine": "No",
		"Des": "计算方阵的行列式.",
		"Args": ["阵列"]
	},
	{
		"Fname": "NOMINAL",
		"NewLine": "Yes",
		"Des": "返回给定有效利率和每年复利期数的名义利率。",
		"Args": ["影响率", "npery"]
	},
	{
		"Fname": "NORMINV",
		"NewLine": "Yes",
		"Des": "计算提供的 x 值和提供的分布均值和标准差的累积正态分布函数的倒数。",
		"Args": ["可能性", "ln(x)的平均数", "标准偏差"]
	},
	{
		"Fname": "OCT2BIN",
		"NewLine": "Yes",
		"Des": "将八进制“Base 8”数字转换为二进制“Base 2”数字。",
		"Args": ["数值", "[地点]"]
	},
	{
		"Fname": "OCT2DEC",
		"NewLine": "No",
		"Des": "将八进制“以 8 为基数的数字”转换为十进制数。",
		"Args": ["数值"]
	},
	{
		"Fname": "OCT2HEX",
		"NewLine": "Yes",
		"Des": "将八进制“Base 8”数字转换为十六进制“Base 16”数字。",
		"Args": ["数值", "[地点]"]
	},
	{
		"Fname": "PEARSON",
		"NewLine": "Yes",
		"Des": "计算两组值的 Pearson 积矩相关系数。",
		"Args": ["阵列1", "阵列2"]
	},
	{
		"Fname": "POISSON",
		"NewLine": "Yes",
		"Des": "计算一组提供的参数的泊松概率质量函数或累积泊松概率函数。",
		"Args": ["x", "ln(x)的平均数", "累积的"]
	},
	{
		"Fname": "PRODUCT",
		"NewLine": "Yes",
		"Des": "返回一组提供的数值的乘积。",
		"Args": ["数字1", "[数字2]"]
	},
	{
		"Fname": "RADIANS",
		"NewLine": "No",
		"Des": "生成一个介于 0 和 1 之间的随机实数。",
		"Args": ["角"]
	},
	{
		"Fname": "RANK.EQ",
		"NewLine": "Yes",
		"Des": "在提供的值数组中返回给定值的统计排名。如果列表中有重复的值，则赋予它们相同的排名。",
		"Args": ["数值", "引用", "[命令]"]
	},
	{
		"Fname": "REPLACE",
		"NewLine": "Yes",
		"Des": "用另一个字符串替换全部或部分文本字符串。",
		"Args": ["旧文本", "开始编号", "数字字符", "新文本"]
	},
	{
		"Fname": "ROUNDUP",
		"NewLine": "Yes",
		"Des": "将提供的数字从零向上舍入到指定的小数位数。",
		"Args": ["数值", "数字"]
	},
	{
		"Fname": "STDEV.P",
		"NewLine": "Yes",
		"Des": "计算一组提供的值的样本标准偏差。",
		"Args": ["数字1", "[数字2]"]
	},
	{
		"Fname": "STDEV.S",
		"NewLine": "Yes",
		"Des": "计算一组提供的值的样本标准偏差。",
		"Args": ["数字1", "[数字2]"]
	},
	{
		"Fname": "STDEVPA",
		"NewLine": "Yes",
		"Des": "计算一组提供的值的标准偏差。",
		"Args": ["数字1", "[数字2]"]
	},
	{
		"Fname": "TBILLEQ",
		"NewLine": "Yes",
		"Des": "计算国库券的债券等价收益率。",
		"Args": ["解决", "成熟度", "折扣"]
	},
	{
		"Fname": "UNICODE",
		"NewLine": "No",
		"Des": "返回提供的文本字符串的第一个字符的代码点。",
		"Args": ["文本"]
	},
	{
		"Fname": "WEEKNUM",
		"NewLine": "Yes",
		"Des": "对于给定的日期，Excel Weeknum 函数返回一个整数，表示一年中“从 1 到 53”的周数。",
		"Args": ["序列号", "[返回类型]"]
	},
	{
		"Fname": "WEIBULL",
		"NewLine": "Yes",
		"Des": "计算一组提供的参数的 Weibull 概率密度函数或 Weibull 累积分布函数。",
		"Args": ["x", "α", "β", "累积的"]
	},
	{
		"Fname": "SUMIFS",
		"NewLine": "Yes",
		"Des": "在一个或多个提供的数组中查找满足一组条件的值，并返回另一个提供的数组中相应值的总和。",
		"Args": ["总和范围", "条件范围1", "标准1", "[条件范围2", "标准2]"]
	},
	{
		"Fname": "MAXIFS",
		"NewLine": "Yes",
		"Des": "从根据一个或多个条件指定的值的子集中返回最大值。",
		"Args": ["最大范围", "条件范围1", "标准1", "[条件范围2", "标准2]"]
	},
	{
		"Fname": "MINIFS",
		"NewLine": "Yes",
		"Des": "从根据一个或多个条件指定的值的子集中返回最小值。",
		"Args": ["最小范围", "条件范围1", "标准1", "[条件范围2", "标准2]"]
	},
	{
		"Fname": "ARABIC",
		"NewLine": "No",
		"Des": "测试一些提供的条件并返回：",
		"Args": ["文本"]
	},
	{
		"Fname": "AVEDEV",
		"NewLine": "Yes",
		"Des": "计算所提供数字的反双曲正切.",
		"Args": ["数字1", "[数字2]"]
	},
	{
		"Fname": "BITAND",
		"NewLine": "Yes",
		"Des": "返回指定次数的试验中指定次数的成功的二项分布概率。",
		"Args": ["数字1", "数字2"]
	},
	{
		"Fname": "BITXOR",
		"NewLine": "Yes",
		"Des": "返回一个提供的整数，右移指定的位数。",
		"Args": ["数字1", "数字2"]
	},
	{
		"Fname": "CHIINV",
		"NewLine": "Yes",
		"Des": "计算卡方分布的右尾概率。",
		"Args": ["可能性", "自由度"]
	},
	{
		"Fname": "CHOOSE",
		"NewLine": "Yes",
		"Des": "使用卡方检验来计算两个提供的“观察频率和预期频率”数据集之间的差异可能仅仅是由于抽样误差，或者它们可能是真实的概率。",
		"Args": ["索引编号", "值1", "[值2]"]
	},
	{
		"Fname": "COLUMN",
		"NewLine": "No",
		"Des": "将提供的文本字符串的第一个字符转换为计算机使用的相关数字字符集代码。",
		"Args": ["[参考]"]
	},
	{
		"Fname": "COMBIN",
		"NewLine": "Yes",
		"Des": "接收 Excel 范围并返回该范围内包含的列数。",
		"Args": ["数值", "选择的号码"]
	},
	{
		"Fname": "CONCAT",
		"NewLine": "Yes",
		"Des": "接受两个参数，表示复数的实部和虚部系数，并从中创建一个复数.",
		"Args": ["文本1", "[文本2]"]
	},
	{
		"Fname": "CORREL",
		"NewLine": "Yes",
		"Des": "将数字从一种单位类型“例如码”转换为另一种单位类型“例如米”。该函数是 Excel 2007 的新功能，因此在早期版本的 Excel 中不可用。",
		"Args": ["阵列1", "阵列2"]
	},
	{
		"Fname": "COUNTA",
		"NewLine": "Yes",
		"Des": "返回提供的一组单元格或值中数值的计数。此计数包括数字和日期。",
		"Args": ["值1", "[值2]"]
	},
	{
		"Fname": "DCOUNT",
		"NewLine": "Yes",
		"Des": "使用固定余额递减法计算资产生命周期中每个时期的资产折旧。",
		"Args": ["数据库", "[字段]", "条件"]
	},
	{
		"Fname": "DOLLAR",
		"NewLine": "Yes",
		"Des": "仅针对选定记录在数据库中的字段“列”中查找最小值。要包含在计算中的记录由一组一个或多个用户指定的标准定义。",
		"Args": ["数值", "[小数]"]
	},
	{
		"Fname": "DSTDEV",
		"NewLine": "Yes",
		"Des": "计算数据库中满足用户指定条件的选定记录的字段“列”的乘积。",
		"Args": ["数据库", "区域", "条件"]
	},
	{
		"Fname": "EFFECT",
		"NewLine": "Yes",
		"Des": "返回在提供的开始日期之前或之后指定月数的日期。",
		"Args": ["名义汇率", "npery"]
	},
	{
		"Fname": "F.DIST",
		"NewLine": "Yes",
		"Des": "返回给定 x 值的指数分布值.用户可以指定是使用概率密度函数还是累积分布函数。",
		"Args": ["x", "自由度1", "自由度2", "累积的"]
	},
	{
		"Fname": "F.TEST",
		"NewLine": "Yes",
		"Des": "计算指定概率的“右尾”F 概率分布的倒数。",
		"Args": ["阵列1", "阵列2"]
	},
	{
		"Fname": "FISHER",
		"NewLine": "No",
		"Des": "计算所提供概率的“右尾”F 概率分布的倒数。",
		"Args": ["x"]
	},
	{
		"Fname": "GESTEP",
		"NewLine": "Yes",
		"Des": "计算一组提供的值的几何平均值。",
		"Args": ["数值", "[步骤]"]
	},
	{
		"Fname": "GROWTH",
		"NewLine": "Yes",
		"Des": "从 Excel 数据透视表的指定字段中提取数据。",
		"Args": ["已知的", "[已知x's]", "[新x's]", "[常量]"]
	},
	{
		"Fname": "IMCOSH",
		"NewLine": "No",
		"Des": "返回提供的复数的余弦。",
		"Args": ["数值"]
	},
	{
		"Fname": "IMCSCH",
		"NewLine": "No",
		"Des": "返回提供的复数的余割。",
		"Args": ["数值"]
	},
	{
		"Fname": "IMLOG2",
		"NewLine": "No",
		"Des": "返回提供的复数的通用“以 10 为底”的对数。",
		"Args": ["数值"]
	},
	{
		"Fname": "IMREAL",
		"NewLine": "No",
		"Des": "计算两个或多个复数的乘积。",
		"Args": ["数值"]
	},
	{
		"Fname": "IMSECH",
		"NewLine": "No",
		"Des": "返回提供的复数的割线。",
		"Args": ["数值"]
	},
	{
		"Fname": "IMSINH",
		"NewLine": "No",
		"Des": "返回提供的复数的正弦值。",
		"Args": ["数值"]
	},
	{
		"Fname": "IMSQRT",
		"NewLine": "No",
		"Des": "返回提供的复数的双曲正弦值。",
		"Args": ["数值"]
	},
	{
		"Fname": "ISEVEN",
		"NewLine": "No",
		"Des": "测试指定单元格是否为空白“空”，如果是，则返回 TRUE；否则函数返回 FALSE。",
		"Args": ["数值"]
	},
	{
		"Fname": "ISTEXT",
		"NewLine": "No",
		"Des": "测试提供的值是否是参考。如果是，则函数返回 TRUE；否则返回 FALSE。",
		"Args": ["价值"]
	},
	{
		"Fname": "LOGEST",
		"NewLine": "Yes",
		"Des": "通过一组提供的 x 和 y 值返回最佳拟合指数曲线的统计信息。",
		"Args": ["已知的", "[已知x's]", "[常量]", "[统计]"]
	},
	{
		"Fname": "LOGINV",
		"NewLine": "Yes",
		"Des": "对于提供的概率，计算 x 的累积对数正态分布函数的倒数.",
		"Args": ["可能性", "ln(x)的平均数", "标准偏差"]
	},
	{
		"Fname": "LOOKUP",
		"NewLine": "Yes",
		"Des": "有两种形式：Vector 形式和 Array 形式。",
		"Args": ["查找值", "查找向量", "[结果向量]"]
	},
	{
		"Fname": "MEDIAN",
		"NewLine": "Yes",
		"Des": "返回所提供数字列表的统计中值“中间值”。",
		"Args": ["数字1", "[数字2]"]
	},
	{
		"Fname": "MINUTE",
		"NewLine": "No",
		"Des": "返回一个整数，表示提供的 Excel 时间的分钟部分。",
		"Args": ["序列号"]
	},
	{
		"Fname": "MROUND",
		"NewLine": "Yes",
		"Des": "将提供的数字向上或向下舍入到给定数字的最接近的倍数。",
		"Args": ["数值", "倍数"]
	},
	{
		"Fname": "OFFSET",
		"NewLine": "Yes",
		"Des": "从初始指定范围返回指定数量的行和列的单元格范围。",
		"Args": ["参考", "排", "科尔斯", "[高度]", "[宽度]"]
	},
	{
		"Fname": "PERMUT",
		"NewLine": "Yes",
		"Des": "从一组对象中计算指定数量的对象的排列数。",
		"Args": ["数值", "选择的号码"]
	},
	{
		"Fname": "PROPER",
		"NewLine": "No",
		"Des": "将提供的文本字符串中的所有字符转换为正确的大小写“即所有不紧跟另一个字母的字母都设置为大写，所有其他字符都设置为小写”。",
		"Args": ["文本"]
	},
	{
		"Fname": "SEARCH",
		"NewLine": "Yes",
		"Des": "返回指定字符或子字符串在提供的文本字符串中的位置。",
		"Args": ["搜索文本", "文本内", "[开始编号]"]
	},
	{
		"Fname": "SECOND",
		"NewLine": "No",
		"Des": "返回一个整数，表示提供的 Excel 时间的第二部分。",
		"Args": ["序列号"]
	},
	{
		"Fname": "SHEETS",
		"NewLine": "No",
		"Des": "返回提供的参考中的工作表数。结果包括可见、隐藏或非常隐藏的工作表。",
		"Args": ["[参考]"]
	},
	{
		"Fname": "SKEW.P",
		"NewLine": "Yes",
		"Des": "计算一组提供的值的分布的偏度。",
		"Args": ["数字1", "[数字2]"]
	},
	{
		"Fname": "SQRTPI",
		"NewLine": "No",
		"Des": "返回提供的数字乘以数学常数 π 的平方根。",
		"Args": ["数量=SQRT"]
	},
	{
		"Fname": "STDEVP",
		"NewLine": "Yes",
		"Des": "计算一组提供的值的标准偏差。",
		"Args": ["数字1", "[数字2]"]
	},
	{
		"Fname": "SWITCH",
		"NewLine": "Yes",
		"Des": "将多个提供的值与提供的测试表达式进行比较，并返回与匹配测试表达式的第一个值相对应的结果。如果没有提供的值与测试表达式匹配，则可以提供默认值。",
		"Args": ["表达", "值1", "结果1", "[值2", "结果2]", "[值3", "结果3]", "[默认]）"]
	},
	{
		"Fname": "T.DIST",
		"NewLine": "Yes",
		"Des": "计算单尾学生 T 分布，这是一种连续概率分布，经常用于在小样本数据集上检验假设。",
		"Args": ["x", "自由度", "累积的"]
	},
	{
		"Fname": "T.TEST",
		"NewLine": "Yes",
		"Des": "计算与学生 T 检验相关的概率，该检验通常用于确定两个数据集是否可能来自具有相同均值的相同的两个潜在总体。",
		"Args": ["阵列1", "阵列2", "尾巴", "类型"]
	},
	{
		"Fname": "Z.TEST",
		"NewLine": "Yes",
		"Des": "对于提供的假设样本均值和提供的一组值，Excel Z.Test 函数计算 Z 检验的单尾概率值。",
		"Args": ["阵列", "x", "[σ]"]
	},
	{
		"Fname": "SUMIF",
		"NewLine": "Yes",
		"Des": "在提供的数组中查找满足给定条件的值，并返回第二个提供的数组中相应值的总和。",
		"Args": ["范围", "条件", "[总和范围]"]
	},
	{
		"Fname": "EDATE",
		"NewLine": "Yes",
		"Des": "仅针对选定记录计算数据库中“列”字段中值的“整个总体”方差。要包含在计算中的记录由一组一个或多个用户指定的标准定义。",
		"Args": ["开始日期", "月"]
	},
	{
		"Fname": "TODAY",
		"NewLine": "No",
		"Des": "返回当前日期。该函数没有参数，因此，函数的语法很简单：",
		"Args": []
	},
	{
		"Fname": "ACOSH",
		"NewLine": "No",
		"Des": "计算给定数字的反余弦“即反余弦”，并返回一个角度，以弧度为单位，介于 0 和 π 之间。",
		"Args": ["数值"]
	},
	{
		"Fname": "ACOTH",
		"NewLine": "No",
		"Des": "计算给定数字的反正切“即反余切”，并返回一个角度（以弧度为单位），介于 0 和 π 之间。",
		"Args": ["数值"]
	},
	{
		"Fname": "AREAS",
		"NewLine": "No",
		"Des": "将罗马数字转换为阿拉伯数字。",
		"Args": ["参考"]
	},
	{
		"Fname": "ASINH",
		"NewLine": "No",
		"Des": "计算给定数字的反正弦“即反正弦”，并返回 -π/2 和 π/2 之间的角度（以弧度为单位）。",
		"Args": ["数值"]
	},
	{
		"Fname": "ATAN2",
		"NewLine": "Yes",
		"Des": "计算给定数字的反正切“即反正切”，并返回 -π/2 和 +π/2 之间的角度（以弧度为单位）。",
		"Args": ["x数字", "y数"]
	},
	{
		"Fname": "ATANH",
		"NewLine": "No",
		"Des": "计算给定 x 和 y 坐标集的反正切“即反正切”，并返回 -π/2 和 +π/2 之间的角度（以弧度为单位）。",
		"Args": ["数值"]
	},
	{
		"Fname": "BITOR",
		"NewLine": "Yes",
		"Des": "返回一个提供的整数，左移指定的位数。",
		"Args": ["数字1", "数字2"]
	},
	{
		"Fname": "COUNT",
		"NewLine": "Yes",
		"Des": "计算所提供角度的双曲余切 'coth'。",
		"Args": ["值1", "[值2]"]
	},
	{
		"Fname": "COVAR",
		"NewLine": "Yes",
		"Des": "返回前一个息票日期，在证券的结算日期之前。",
		"Args": ["阵列1", "阵列2"]
	},
	{
		"Fname": "DELTA",
		"NewLine": "Yes",
		"Des": "将弧度转换为度数。",
		"Args": ["数字1", "[数字2]"]
	},
	{
		"Fname": "DEVSQ",
		"NewLine": "Yes",
		"Des": "测试两个数字是否相等并返回 Kronecker Delta。即，如果两个提供的数字相等，则该函数返回 1，否则返回 0。",
		"Args": ["数字1", "[数字2]"]
	},
	{
		"Fname": "DVARP",
		"NewLine": "Yes",
		"Des": "仅针对选定记录计算数据库中字段“列”的样本方差。要包含在计算中的记录由一组一个或多个用户指定的标准定义。",
		"Args": ["数据库", "区域", "条件"]
	},
	{
		"Fname": "EXACT",
		"NewLine": "Yes",
		"Des": "将提供的数字从零舍入（即向上舍入一个正数，向下舍入一个负数）到下一个偶数。",
		"Args": ["文本1", "文本2"]
	},
	{
		"Fname": "F.INV",
		"NewLine": "Yes",
		"Des": "计算 F 分布的概率密度函数或累积分布函数。这个函数经常被用来衡量两个数据集之间的多样性程度。",
		"Args": ["可能性", "自由度1", "自由度2"]
	},
	{
		"Fname": "FDIST",
		"NewLine": "Yes",
		"Des": "返回所提供数字的双阶乘。",
		"Args": ["x", "自由度1", "自由度2"]
	},
	{
		"Fname": "FIXED",
		"NewLine": "Yes",
		"Des": "计算 Fisher 变换的逆并返回 -1 和 +1 之间的值。",
		"Args": ["数值", "[小数]", "[没有逗号]"]
	},
	{
		"Fname": "FLOOR",
		"NewLine": "Yes",
		"Des": "将提供的数字四舍五入到指定的小数位数，然后将其转换为文本。",
		"Args": ["数值", "意义"]
	},
	{
		"Fname": "FTEST",
		"NewLine": "Yes",
		"Des": "对于提供的数值数组，Excel 频率函数返回落入指定范围的值的数量。",
		"Args": ["阵列1", "阵列2"]
	},
	{
		"Fname": "GAMMA",
		"NewLine": "No",
		"Des": "计算具有可变利率的投资的未来价值。",
		"Args": ["数值"]
	},
	{
		"Fname": "GAUSS",
		"NewLine": "No",
		"Des": "返回标准正态总体的成员落在均值和与均值的指定标准差数之间的概率。",
		"Args": ["z"]
	},
	{
		"Fname": "IMABS",
		"NewLine": "No",
		"Des": "测试许多提供的条件，并返回对应于第一个计算结果为 TRUE 的条件的结果。如果提供的条件均未计算为 TRUE，则该函数返回 #N/A 错误。",
		"Args": ["数值"]
	},
	{
		"Fname": "IMCOS",
		"NewLine": "No",
		"Des": "返回提供的复数的复共轭。",
		"Args": ["数值"]
	},
	{
		"Fname": "IMCOT",
		"NewLine": "No",
		"Des": "返回提供的复数的双曲余弦。",
		"Args": ["数值"]
	},
	{
		"Fname": "IMCSC",
		"NewLine": "No",
		"Des": "返回提供的复数的余切。",
		"Args": ["数值"]
	},
	{
		"Fname": "IMDIV",
		"NewLine": "Yes",
		"Des": "返回提供的复数的双曲余割。",
		"Args": ["数值1", "λ2"]
	},
	{
		"Fname": "IMEXP",
		"NewLine": "No",
		"Des": "计算两个复数的商'即一个复数除以另一个'。",
		"Args": ["数值"]
	},
	{
		"Fname": "IMSEC",
		"NewLine": "No",
		"Des": "返回提供的复数的实系数。",
		"Args": ["数值"]
	},
	{
		"Fname": "IMSIN",
		"NewLine": "No",
		"Des": "返回提供的复数的双曲正割。",
		"Args": ["数值"]
	},
	{
		"Fname": "IMSUB",
		"NewLine": "Yes",
		"Des": "返回提供的复数的平方根。",
		"Args": ["数值1", "λ2"]
	},
	{
		"Fname": "IMSUM",
		"NewLine": "Yes",
		"Des": "计算两个或多个复数之和。",
		"Args": ["数值1", "λ2"]
	},
	{
		"Fname": "IMTAN",
		"NewLine": "No",
		"Des": "计算两个复数之间的差，即从另一个复数中减去一个复数。",
		"Args": ["数值"]
	},
	{
		"Fname": "ISERR",
		"NewLine": "No",
		"Des": "测试初始提供的表达式“或值”是否返回 Excel 错误，如果是，则返回逻辑值 TRUE；否则函数返回 FALSE。",
		"Args": ["价值"]
	},
	{
		"Fname": "ISODD",
		"NewLine": "No",
		"Des": "将提供的数字“不管数字的符号”向上舍入到提供的重要性的最接近的倍数。",
		"Args": ["数值"]
	},
	{
		"Fname": "ISPMT",
		"NewLine": "Yes",
		"Des": "计算在贷款或投资的特定期间支付的利息。",
		"Args": ["率", "每", "核电厂", "现值总额"]
	},
	{
		"Fname": "ISREF",
		"NewLine": "No",
		"Des": "测试提供的数字“或数字表达式”是否计算为奇数，如果是，则返回 TRUE；否则，函数返回 FALSE。",
		"Args": ["价值"]
	},
	{
		"Fname": "LARGE",
		"NewLine": "Yes",
		"Des": "从数值数组中返回第 k 个最大值。",
		"Args": ["阵列", "k"]
	},
	{
		"Fname": "LOG10",
		"NewLine": "No",
		"Des": "计算给定数字的以 10 为底的对数。",
		"Args": ["数值"]
	},
	{
		"Fname": "LOWER",
		"NewLine": "No",
		"Des": "将提供的文本字符串中的所有字符转换为小写。",
		"Args": ["文本"]
	},
	{
		"Fname": "MATCH",
		"NewLine": "Yes",
		"Des": "在数组中查找一个值，并返回该值在数组中的位置。",
		"Args": ["查找值", "查找数组", "[匹配类型]"]
	},
	{
		"Fname": "MMULT",
		"NewLine": "Yes",
		"Des": "计算两个数组“表示矩阵”的矩阵乘积。",
		"Args": ["阵列1", "阵列2"]
	},
	{
		"Fname": "MONTH",
		"NewLine": "No",
		"Des": "返回一个整数，表示提供日期的“从 1 到 12”月份。",
		"Args": ["序列号"]
	},
	{
		"Fname": "MUNIT",
		"NewLine": "No",
		"Des": "返回指定维度的单位矩阵。",
		"Args": ["维"]
	},
	{
		"Fname": "POWER",
		"NewLine": "Yes",
		"Des": "计算给定的数字，提高到提供的功率。",
		"Args": ["数值", "权力"]
	},
	{
		"Fname": "PRICE",
		"NewLine": "Yes",
		"Des": "计算每 100 美元面值支付定期利息的证券的价格。",
		"Args": ["解决", "成熟度", "率", "yld公司", "赎回", "频率", "[依据]"]
	},
	{
		"Fname": "RIGHT",
		"NewLine": "Yes",
		"Des": "从提供的文本字符串的末尾返回指定数量的字符。",
		"Args": ["文本", "[数字字符]"]
	},
	{
		"Fname": "ROMAN",
		"NewLine": "Yes",
		"Des": "将阿拉伯数字转换为罗马数字。即对于提供的整数，该函数返回一个描述数字的罗马数字形式的文本字符串。",
		"Args": ["数值", "[表格]"]
	},
	{
		"Fname": "ROUND",
		"NewLine": "Yes",
		"Des": "将提供的数字向上或向下舍入到指定的小数位数。",
		"Args": ["数值", "数字"]
	},
	{
		"Fname": "SHEET",
		"NewLine": "No",
		"Des": "返回指定参考的图纸编号。",
		"Args": ["[价值]"]
	},
	{
		"Fname": "SLOPE",
		"NewLine": "Yes",
		"Des": "通过一组提供的 x 和 y 值计算线性回归线的斜率。",
		"Args": ["已知的", "已知x"]
	},
	{
		"Fname": "SMALL",
		"NewLine": "Yes",
		"Des": "从数值数组中返回第 k 个最小值。",
		"Args": ["阵列", "k"]
	},
	{
		"Fname": "STDEV",
		"NewLine": "Yes",
		"Des": "计算一组提供的值的样本标准偏差。",
		"Args": ["数字1", "[数字2]"]
	},
	{
		"Fname": "STDEV",
		"NewLine": "Yes",
		"Des": "计算一组提供的值的标准偏差。",
		"Args": ["数字1", "[数字2]"]
	},
	{
		"Fname": "STEYX",
		"NewLine": "Yes",
		"Des": "通过一组提供的 x 和 y 值计算最佳拟合线的标准误差。",
		"Args": ["已知的", "已知x"]
	},
	{
		"Fname": "SUMSQ",
		"NewLine": "Yes",
		"Des": "返回提供的一组值的平方和。",
		"Args": ["数字1", "[数字2]"]
	},
	{
		"Fname": "T.INV",
		"NewLine": "Yes",
		"Des": "计算学生 T 分布的左尾逆，这是一个连续概率分布，经常用于在小样本数据集上测试假设。",
		"Args": ["可能性", "自由度"]
	},
	{
		"Fname": "TDIST",
		"NewLine": "Yes",
		"Des": "计算学生 T 分布，这是一个连续概率分布，经常用于在小样本数据集上测试假设。",
		"Args": ["x", "自由度", "尾巴"]
	},
	{
		"Fname": "TREND",
		"NewLine": "Yes",
		"Des": "通过一组给定的 y 值和“可选”一组给定的 x 值计算线性趋势线。",
		"Args": ["已知的", "[已知x's]", "[新x's]", "[常量]"]
	},
	{
		"Fname": "TRUNC",
		"NewLine": "Yes",
		"Des": "将提供的数字截断为指定的小数位数。",
		"Args": ["数值", "[数字]"]
	},
	{
		"Fname": "TTEST",
		"NewLine": "Yes",
		"Des": "计算与学生 T 检验相关的概率，该检验通常用于确定两个数据集是否可能来自具有相同均值的相同的两个潜在总体。",
		"Args": ["阵列1", "阵列2", "尾巴", "类型"]
	},
	{
		"Fname": "UPPER",
		"NewLine": "No",
		"Des": "将提供的文本字符串中的所有字符转换为大写。",
		"Args": ["文本"]
	},
	{
		"Fname": "VALUE",
		"NewLine": "No",
		"Des": "将文本字符串转换为数值。",
		"Args": ["文本"]
	},
	{
		"Fname": "VAR.P",
		"NewLine": "Yes",
		"Des": "返回给定值集的方差。",
		"Args": ["数字1", "[数字2]"]
	},
	{
		"Fname": "VAR.S",
		"NewLine": "Yes",
		"Des": "计算一组提供的值的样本方差。",
		"Args": ["数字1", "[数字2]"]
	},
	{
		"Fname": "VARPA",
		"NewLine": "Yes",
		"Des": "返回给定值集的方差。",
		"Args": ["数字1", "[数字2]"]
	},
	{
		"Fname": "YIELD",
		"NewLine": "Yes",
		"Des": "计算支付定期利息的证券的收益率。",
		"Args": ["解决", "成熟度", "率", "公共关系", "赎回", "频率", "[依据]"]
	},
	{
		"Fname": "ZTEST",
		"NewLine": "Yes",
		"Des": "对于提供的假设样本均值和提供的一组值，Excel Ztest 函数计算 Z 检验的单尾概率值。",
		"Args": ["阵列", "x", "[σ]"]
	},
	{
		"Fname": "INDEX",
		"NewLine": "Yes",
		"Des": "返回给定单元格范围内特定行和列交叉单元格的值或引用",
		"Args": ["阵列", "行号", "列号"]
	},
	{
		"Fname": "MAXA",
		"NewLine": "Yes",
		"Des": "从提供的一组数值中返回最大值，同时将文本和逻辑值 FALSE 计数为值 0，并将逻辑值 TRUE 计数为值 1。",
		"Args": ["数字1", "[数字2]"]
	},
	{
		"Fname": "DMAX",
		"NewLine": "Yes",
		"Des": "计算证券的贴现率。",
		"Args": ["数据库", "区域", "条件"]
	},
	{
		"Fname": "DMIN",
		"NewLine": "Yes",
		"Des": "仅在数据库中的字段“列”中查找选定记录的最大值。要包含在计算中的记录由一组一个或多个用户指定的标准定义。",
		"Args": ["数据库", "区域", "条件"]
	},
	{
		"Fname": "ACOS",
		"NewLine": "No",
		"Des": "返回到期支付利息的证券的应计利息。",
		"Args": ["数值"]
	},
	{
		"Fname": "ACOT",
		"NewLine": "No",
		"Des": "计算所提供数字的反双曲余弦.",
		"Args": ["数值"]
	},
	{
		"Fname": "ASIN",
		"NewLine": "No",
		"Des": "接受 Excel 引用并返回构成引用的区域数。",
		"Args": ["数值"]
	},
	{
		"Fname": "ATAN",
		"NewLine": "No",
		"Des": "计算所提供数字的反双曲正弦值。",
		"Args": ["数值"]
	},
	{
		"Fname": "BASE",
		"NewLine": "Yes",
		"Des": "将数字转换为泰语文本，后缀为“泰铢”。",
		"Args": ["数值", "基数", "[最小长度]"]
	},
	{
		"Fname": "CELL",
		"NewLine": "Yes",
		"Des": "将提供的数字“不管数字的符号”向上舍入到给定数字的最接近的倍数。",
		"Args": ["信息类型", "参考"]
	},
	{
		"Fname": "CHAR",
		"NewLine": "No",
		"Des": "返回有关给定单元格的信息。这可以是与单元格的内容、格式或位置有关的信息。",
		"Args": ["数值"]
	},
	{
		"Fname": "CODE",
		"NewLine": "No",
		"Des": "从数组中返回一个值，该值对应于提供的索引号“位置”。",
		"Args": ["文本"]
	},
	{
		"Fname": "COSH",
		"NewLine": "No",
		"Des": "计算给定角度的余弦。",
		"Args": ["数值"]
	},
	{
		"Fname": "COTH",
		"NewLine": "No",
		"Des": "计算给定角度的余切。",
		"Args": ["数值"]
	},
	{
		"Fname": "CSCH",
		"NewLine": "No",
		"Des": "计算给定角度的余割。",
		"Args": ["数值"]
	},
	{
		"Fname": "DATE",
		"NewLine": "Yes",
		"Des": "计算两个指定期间之间贷款或投资本金的累计支付。",
		"Args": ["年", "月", "白天"]
	},
	{
		"Fname": "DAYS",
		"NewLine": "Yes",
		"Des": "返回一个整数，表示所提供日期的“从 1 到 31”月份中的某天。",
		"Args": ["结束日期", "开始日期"]
	},
	{
		"Fname": "DGET",
		"NewLine": "Yes",
		"Des": "对于一组提供的值，Excel DEVSQ 函数计算与样本均值的偏差平方和。",
		"Args": ["数据库", "区域", "条件"]
	},
	{
		"Fname": "DISC",
		"NewLine": "Yes",
		"Des": "从数据库的列中返回单个值。",
		"Args": ["解决", "成熟度", "公共关系", "赎回", "[依据]"]
	},
	{
		"Fname": "DSUM",
		"NewLine": "Yes",
		"Des": "仅计算选定记录的数据库中字段“列”的标准偏差。要包含在计算中的记录由一组一个或多个用户指定的标准定义。",
		"Args": ["数据库", "区域", "条件"]
	},
	{
		"Fname": "DVAR",
		"NewLine": "Yes",
		"Des": "假设面值为 100 美元，计算支付定期利息的证券的久期“特别是麦考利久期”。",
		"Args": ["数据库", "区域", "条件"]
	},
	{
		"Fname": "ERFC",
		"NewLine": "No",
		"Des": "计算误差函数，在提供的下限或上限与 0 之间积分。",
		"Args": ["x"]
	},
	{
		"Fname": "EVEN",
		"NewLine": "No",
		"Des": "接收一个错误值并返回一个整数，它告诉您提供的错误的类型。",
		"Args": ["数值"]
	},
	{
		"Fname": "FACT",
		"NewLine": "No",
		"Des": "返回两个提供的数组的 F 检验。即该函数返回两个提供的数组中的方差没有显着差异的双尾概率。",
		"Args": ["数值"]
	},
	{
		"Fname": "FIND",
		"NewLine": "Yes",
		"Des": "计算“右尾”F 概率分布，它衡量两个数据集之间的多样性程度。",
		"Args": ["查找文本", "文本内", "[开始编号]"]
	},
	{
		"Fname": "FINV",
		"NewLine": "Yes",
		"Des": "返回指定字符或子字符串在提供的文本字符串中的位置。",
		"Args": ["可能性", "自由度1", "自由度2"]
	},
	{
		"Fname": "HOUR",
		"NewLine": "No",
		"Des": "在数据数组“或表”的第一行中查找给定值，并从数组的另一行返回相应的值。",
		"Args": ["序列号"]
	},
	{
		"Fname": "IFNA",
		"NewLine": "Yes",
		"Des": "接收两个值“或表达式”并测试其中第一个值是否为错误。",
		"Args": ["价值", "值（如果为na）"]
	},
	{
		"Fname": "IMLN",
		"NewLine": "No",
		"Des": "返回提供的复数的指数。",
		"Args": ["数值"]
	},
	{
		"Fname": "INFO",
		"NewLine": "No",
		"Des": "将文本字符串转换为单元格引用。",
		"Args": ["键入文本"]
	},
	{
		"Fname": "IPMT",
		"NewLine": "Yes",
		"Des": "计算完全投资证券的利率。",
		"Args": ["率", "每", "核电厂", "现值总额", "[fv]", "[类型]"]
	},
	{
		"Fname": "ISNA",
		"NewLine": "No",
		"Des": "测试提供的值“或表达式”是否返回逻辑值“即计算结果为真或假”。如果是，则函数返回 TRUE；否则，它返回 FALSE。",
		"Args": ["价值"]
	},
	{
		"Fname": "KURT",
		"NewLine": "Yes",
		"Des": "测试提供的值是否为文本，如果是，则返回 TRUE；否则，函数返回 FALSE。",
		"Args": ["数字1", "[数字2]"]
	},
	{
		"Fname": "LEFT",
		"NewLine": "Yes",
		"Des": "从提供的文本字符串的开头返回指定数量的字符。",
		"Args": ["文本", "[数字字符]"]
	},
	{
		"Fname": "LEFT",
		"NewLine": "Yes",
		"Des": "返回两个或多个提供的整数的最小公倍数。",
		"Args": ["文本", "[数字字符]"]
	},
	{
		"Fname": "MINA",
		"NewLine": "Yes",
		"Des": "返回一组提供的数值中的最小值，同时将文本和逻辑值 FALSE 计数为值 0，并将逻辑值 TRUE 计数为值 1。",
		"Args": ["数字1", "[数字2]"]
	},
	{
		"Fname": "MIRR",
		"NewLine": "Yes",
		"Des": "返回一系列定期现金流的修正内部收益率，“即一组值，包括初始投资值和一系列净收入值”。",
		"Args": ["价值观", "财务比率", "再投资率"]
	},
	{
		"Fname": "MODE",
		"NewLine": "Yes",
		"Des": "返回提供的数字列表的统计模式“最常出现的值”。如果提供的数据中有 2 个或更多最频繁出现的值，则函数返回这些值中的最低值",
		"Args": ["数字1", "[数字2]"]
	},
	{
		"Fname": "NPER",
		"NewLine": "Yes",
		"Des": "计算还清贷款所需的周期数，对于固定的定期付款和固定的利率。",
		"Args": ["率", "付款", "现值总额", "[fv]", "[类型]"]
	},
	{
		"Fname": "PPMT",
		"NewLine": "Yes",
		"Des": "计算在贷款或投资的特定时期内以恒定的定期付款方式支付的本金，利率不变。",
		"Args": ["率", "每", "核电厂", "现值总额", "[fv]", "[类型]"]
	},
	{
		"Fname": "PROB",
		"NewLine": "Yes",
		"Des": "给定一个值列表和相应的概率列表，Excel PROB 函数计算与给定范围关联的概率。",
		"Args": ["x范围", "探测范围", "[下限]", "[上限]"]
	},
	{
		"Fname": "RAND",
		"NewLine": "No",
		"Des": "将弧度转换为度数。",
		"Args": []
	},
	{
		"Fname": "RANK",
		"NewLine": "Yes",
		"Des": "在提供的值数组中返回给定值的统计排名。如果列表中有重复的值，则赋予它们相同的排名。",
		"Args": ["数值", "引用", "[命令]"]
	},
	{
		"Fname": "RATE",
		"NewLine": "Yes",
		"Des": "计算在给定时期内偿还指定金额的贷款或达到投资目标金额所需的利率。",
		"Args": ["核电厂", "付款", "现值总额", "[fv]", "[类型]", "[猜猜]"]
	},
	{
		"Fname": "REPT",
		"NewLine": "Yes",
		"Des": "返回提供的文本字符串，重复指定的次数。",
		"Args": ["文本", "次数"]
	},
	{
		"Fname": "ROWS",
		"NewLine": "No",
		"Des": "接受一个 Excel 范围并返回该范围内包含的行数。",
		"Args": ["阵列"]
	},
	{
		"Fname": "SECH",
		"NewLine": "No",
		"Des": "计算所提供角度的双曲正割“sech”。",
		"Args": ["数值"]
	},
	{
		"Fname": "SIGN",
		"NewLine": "No",
		"Des": "返回所提供数字的算术符号“+1、-1 或 0”。即如果数字为正，Sign函数返回+1，如果数字为负，函数返回-1，如果数字为0'零'，函数返回0。",
		"Args": ["数值"]
	},
	{
		"Fname": "SINH",
		"NewLine": "No",
		"Des": "计算所提供数字的双曲正弦“sinh”。",
		"Args": ["数值"]
	},
	{
		"Fname": "SKEW",
		"NewLine": "Yes",
		"Des": "计算一组提供的值的分布的偏度。",
		"Args": ["数字1", "[数字2]"]
	},
	{
		"Fname": "SQRT",
		"NewLine": "No",
		"Des": "计算所提供数字的正平方根。",
		"Args": ["数值"]
	},
	{
		"Fname": "TANH",
		"NewLine": "No",
		"Des": "计算所提供数字的双曲正切“tanh”。",
		"Args": ["数值"]
	},
	{
		"Fname": "TEXT",
		"NewLine": "Yes",
		"Des": "以用户指定的格式将提供的数值转换为文本。",
		"Args": ["数值", "设置文本格式"]
	},
	{
		"Fname": "TIME",
		"NewLine": "Yes",
		"Des": "接受三个表示小时、分钟和秒的整数参数，并返回 Excel 时间。",
		"Args": ["小时", "分钟", "第二"]
	},
	{
		"Fname": "TINV",
		"NewLine": "Yes",
		"Des": "计算双尾学生 T 分布的倒数，这是一种连续概率分布，经常用于在小样本数据集上测试假设。",
		"Args": ["可能性", "自由度"]
	},
	{
		"Fname": "TRIM",
		"NewLine": "No",
		"Des": "从提供的文本字符串中删除额外的空格“即除了单词或字符之间的单个空格之外的所有空格”。",
		"Args": ["文本"]
	},
	{
		"Fname": "TYPE",
		"NewLine": "No",
		"Des": "对于提供的值，Excel TYPE 函数返回一个整数，表示该值的数据类型。",
		"Args": ["价值"]
	},
	{
		"Fname": "VARA",
		"NewLine": "Yes",
		"Des": "计算一组提供的值的样本方差。",
		"Args": ["数字1", "[数字2]"]
	},
	{
		"Fname": "VARP",
		"NewLine": "Yes",
		"Des": "返回给定值集的方差。",
		"Args": ["数字1", "[数字2]"]
	},
	{
		"Fname": "XIRR",
		"NewLine": "Yes",
		"Des": "返回一系列提供的现金流量的内部收益率，“即一组值，包括初始投资值和一系列净收入值”，发生在一系列提供的日期。",
		"Args": ["价值观", "日期", "[猜猜]"]
	},
	{
		"Fname": "XNPV",
		"NewLine": "Yes",
		"Des": "计算不一定是周期性的现金流量表的净现值。",
		"Args": ["率", "价值观", "日期"]
	},
	{
		"Fname": "YEAR",
		"NewLine": "No",
		"Des": "返回一个整数，表示所提供日期的年份。",
		"Args": ["序列号"]
	},
	{
		"Fname": "ABS",
		"NewLine": "No",
		"Des": "从提供的文本字符串的开头返回指定数量的字符。",
		"Args": ["数值"]
	},
	{
		"Fname": "AND",
		"NewLine": "Yes",
		"Des": "为法国会计系统的用户提供。该函数计算指定会计期间资产的按比例线性折旧。",
		"Args": ["逻辑测试1", "[逻辑测试2]"]
	},
	{
		"Fname": "COS",
		"NewLine": "No",
		"Des": "计算两组值的 Pearson 积矩相关系数。",
		"Args": ["数值"]
	},
	{
		"Fname": "COT",
		"NewLine": "No",
		"Des": "计算所提供数字的双曲余弦“cosh”。",
		"Args": ["数值"]
	},
	{
		"Fname": "CSC",
		"NewLine": "No",
		"Des": "返回累积二项分布的倒数。即对于特定数量的独立试验，该函数返回累积二项分布大于或等于指定值的最小值“成功次数”。",
		"Args": ["数值"]
	},
	{
		"Fname": "DAY",
		"NewLine": "No",
		"Des": "计算数据库中字段“列”中满足用户指定条件的选定记录的平均“统计平均值”。",
		"Args": ["序列号"]
	},
	{
		"Fname": "DDB",
		"NewLine": "Yes",
		"Des": "仅在数据库的“列”字段中为选定记录返回非空白单元格的数量。",
		"Args": ["成本", "救助", "生活", "期间", "[因素]"]
	},
	{
		"Fname": "ERF",
		"NewLine": "Yes",
		"Des": "返回该月的最后一天，即在初始提供的开始日期之前或之后的指定月数。",
		"Args": ["下限", "[上限]"]
	},
	{
		"Fname": "EXP",
		"NewLine": "No",
		"Des": "测试两个提供的文本字符串或值是否完全相等，如果相等，则返回 TRUE；否则，函数返回 FALSE。",
		"Args": ["数值"]
	},
	{
		"Fname": "GCD",
		"NewLine": "Yes",
		"Des": "返回 Gamma 函数的自然对数 Γ'n'。",
		"Args": ["数字1", "[数字2]"]
	},
	{
		"Fname": "IFS",
		"NewLine": "Yes",
		"Des": "测试提供的初始值“或表达式”是否计算为 Excel #N/A 错误。如果是，则该函数返回第二个提供的值；否则，该函数返回第一个提供的值。",
		"Args": ["逻辑测试1", "如果为真值1", "[逻辑测试2", "如果是真值2]", "[逻辑测试3", "如果是真值3]"]
	},
	{
		"Fname": "INT",
		"NewLine": "No",
		"Des": "返回一个文本字符串，其中包含有关当前操作环境的信息。",
		"Args": ["数值"]
	},
	{
		"Fname": "IRR",
		"NewLine": "Yes",
		"Des": "计算以固定利率定期支付的贷款或投资的特定时期内的利息支付。",
		"Args": ["价值观", "[猜猜]"]
	},
	{
		"Fname": "LCM",
		"NewLine": "Yes",
		"Des": "计算一组提供的值的峰度。",
		"Args": ["数字1", "[数字2]"]
	},
	{
		"Fname": "LEN",
		"NewLine": "No",
		"Des": "返回提供的文本字符串的长度。",
		"Args": ["文本"]
	},
	{
		"Fname": "LOG",
		"NewLine": "Yes",
		"Des": "计算给定数字的对数，以提供的底为基础。",
		"Args": ["数值", "[基地]"]
	},
	{
		"Fname": "MAX",
		"NewLine": "Yes",
		"Des": "从提供的一组数值中返回最大值。",
		"Args": ["数字1", "[数字2]"]
	},
	{
		"Fname": "MID",
		"NewLine": "Yes",
		"Des": "从提供的文本字符串的中间返回指定数量的字符。",
		"Args": ["文本", "开始编号", "数字字符"]
	},
	{
		"Fname": "MIN",
		"NewLine": "Yes",
		"Des": "从提供的一组数值中返回最小值。",
		"Args": ["数字1", "[数字2]"]
	},
	{
		"Fname": "MOD",
		"NewLine": "Yes",
		"Des": "返回两个提供的数字之间除法的余数。",
		"Args": ["数值", "除数"]
	},
	{
		"Fname": "NOT",
		"NewLine": "No",
		"Des": "返回与提供的逻辑值相反的值。",
		"Args": ["符合逻辑的"]
	},
	{
		"Fname": "NOW",
		"NewLine": "No",
		"Des": "返回当前日期和时间。该函数不接收任何参数，因此函数语法为：",
		"Args": []
	},
	{
		"Fname": "NPV",
		"NewLine": "Yes",
		"Des": "根据提供的贴现率以及一系列未来付款和收入计算投资的净现值。",
		"Args": ["率", "值1", "[值2]", "[值3]"]
	},
	{
		"Fname": "ODD",
		"NewLine": "No",
		"Des": "将提供的数字从零舍入（即向上舍入一个正数，向下舍入一个负数）到下一个奇数。",
		"Args": ["数值"]
	},
	{
		"Fname": "PHI",
		"NewLine": "No",
		"Des": "返回所提供数字的标准正态分布的密度函数值。",
		"Args": ["x"]
	},
	{
		"Fname": "PMT",
		"NewLine": "Yes",
		"Des": "计算在特定时期内以固定利率偿还“或部分偿还”贷款或投资所需的固定定期付款。",
		"Args": ["率", "核电厂", "现值总额", "[fv]", "[类型]"]
	},
	{
		"Fname": "ROW",
		"NewLine": "No",
		"Des": "返回提供的引用中的第一行号或当前行的编号。",
		"Args": ["[参考]"]
	},
	{
		"Fname": "RRI",
		"NewLine": "Yes",
		"Des": "计算具有指定现值、未来值和久期的投资的等值利率。",
		"Args": ["核电厂", "现值总额", "fv公司"]
	},
	{
		"Fname": "RSQ",
		"NewLine": "Yes",
		"Des": "计算提供的两组值的 Pearson 积矩相关系数的平方。",
		"Args": ["已知的", "已知x"]
	},
	{
		"Fname": "SEC",
		"NewLine": "No",
		"Des": "计算给定角度的割线。",
		"Args": ["数值"]
	},
	{
		"Fname": "SIN",
		"NewLine": "No",
		"Des": "计算给定角度的正弦值。",
		"Args": ["数值"]
	},
	{
		"Fname": "SLN",
		"NewLine": "Yes",
		"Des": "计算一个时期内资产的直线折旧。",
		"Args": ["成本", "救助", "生活"]
	},
	{
		"Fname": "SUM",
		"NewLine": "Yes",
		"Des": "将提供的一组数字相加并返回这些值的总和。",
		"Args": ["数字1", "[数字2]"]
	},
	{
		"Fname": "SYD",
		"NewLine": "Yes",
		"Des": "计算资产生命周期中指定期间的年数总和折旧。",
		"Args": ["成本", "救助", "生活", "每"]
	},
	{
		"Fname": "TAN",
		"NewLine": "No",
		"Des": "计算给定角度的正切。",
		"Args": ["数值"]
	},
	{
		"Fname": "VAR",
		"NewLine": "Yes",
		"Des": "返回一组提供的值的样本方差。",
		"Args": ["数字1", "[数字2]"]
	},
	{
		"Fname": "VDB",
		"NewLine": "Yes",
		"Des": "使用双倍余额递减法或其他指定折旧率计算资产在指定期间“包括部分期间”的折旧。",
		"Args": ["成本", "救助", "生活", "开始时间段", "期末", "[因素]", "[无开关]"]
	},
	{
		"Fname": "XOR",
		"NewLine": "Yes",
		"Des": "返回一个或多个提供的条件的异或逻辑运算。",
		"Args": ["逻辑测试1", "[逻辑测试2]"]
	},
	{
		"Fname": "RMB",
		"NewLine": "Yes",
		"Des": "将价值转换为人民币",
		"Args": ["数值", "[小数位数]"]
	},
	{
		"Fname": "DB",
		"NewLine": "Yes",
		"Des": "返回 2 个日期之间的天数，基于 360 天一年“12 x 30 个月”。",
		"Args": ["成本", "救助", "生活", "期间", "[月]"]
	},
	{
		"Fname": "FV",
		"NewLine": "Yes",
		"Des": "返回两个提供的数组的 F 检验。即该函数返回两个提供的数组中的方差没有显着差异的双尾概率。",
		"Args": ["率", "核电厂", "[付款]", "[现值]", "[类型]"]
	},
	{
		"Fname": "IF",
		"NewLine": "Yes",
		"Des": "返回总体样本中给定成功次数的超几何分布值。",
		"Args": ["逻辑测试", "值（如果为真）", "值（如果为误）"]
	},
	{
		"Fname": "LN",
		"NewLine": "No",
		"Des": "计算给定数字的自然对数。",
		"Args": ["数值"]
	},
	{
		"Fname": "NA",
		"NewLine": "No",
		"Des": "返回 Excel #N/A 错误。此错误消息的含义是“值不可用”，并且在 Excel 公式无法找到所需的值时产生。",
		"Args": []
	},
	{
		"Fname": "OR",
		"NewLine": "Yes",
		"Des": "测试一些提供的条件并返回：",
		"Args": ["逻辑测试1", "[逻辑测试2]"]
	},
	{
		"Fname": "PI",
		"NewLine": "No",
		"Des": "返回数学常数 π 'pi' 的值，精确到 15 位 '14 个小数位'。",
		"Args": []
	},
	{
		"Fname": "PV",
		"NewLine": "Yes",
		"Des": "根据一系列未来付款计算投资的现值。",
		"Args": ["率", "核电厂", "[付款]", "[fv]", "[类型]"]
	},
	{
		"Fname": "N",
		"NewLine": "No",
		"Des": "使用以下规则将数据转换为数值：",
		"Args": ["价值"]
	},
	{
		"Fname": "T",
		"NewLine": "No",
		"Des": "测试提供的值是否为文本，如果是，则返回提供的文本；否则，该函数返回一个空文本字符串。",
		"Args": ["价值"]
	}
];
