var ExFunction = [{
		"Fname": "ABS",
		"NewLine": "No",
		"Des": "returns a specified number of characters from the start of a supplied text string.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "ACCRINT",
		"NewLine": "Yes",
		"Des": "returns the absolute value (i.e. the modulus) of any supplied number.",
		"Args": [
			"issue", "first_interest", "settlement", "rate", "[par]", "frequency", "[basis]", "[calc_method]"
		]
	},
	{
		"Fname": "ACCRINTM",
		"NewLine": "Yes",
		"Des": "returns the accrued interest for a security that pays periodic interest.",
		"Args": [
			"issue", "settlement", "rate", "[par]", "[basis]"
		]
	},
	{
		"Fname": "ACOS",
		"NewLine": "No",
		"Des": "returns the accrued interest for a security that pays interest at maturity.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "ACOSH",
		"NewLine": "No",
		"Des": "calculates the arccosine (i.e. the inverse cosine) of a given number, and returns an angle, in radians, between 0 and π.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "ACOT",
		"NewLine": "No",
		"Des": "calculates the inverse hyperbolic cosine of a supplied number.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "ACOTH",
		"NewLine": "No",
		"Des": "calculates the arccotangent (i.e. the inverse cotangent) of a given number, and returns an angle, in radians, between 0 and π.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "ADDRESS",
		"NewLine": "Yes",
		"Des": "calculates the hyperbolic arccotangent (coth) of a supplied value.",
		"Args": [
			"row_num", "column_num", "[abs_num]", "[a1]", "[sheet_text]"
		]
	},
	{
		"Fname": "AMORDEGRC",
		"NewLine": "Yes",
		"Des": "takes a row and a column number and returns a cell reference as a text string.",
		"Args": [
			"cost", "date_purchased", "first_period", "salvage", "period", "rate", "[basis]"
		]
	},
	{
		"Fname": "AMORLINC",
		"NewLine": "Yes",
		"Des": "is provided for users of the French accounting system.",
		"Args": [
			"cost", "date_purchased", "first_period", "salvage", "period", "rate", "[basis]"
		]
	},
	{
		"Fname": "AND",
		"NewLine": "Yes",
		"Des": "is provided for users of the French accounting system. The function calculates the prorated linear depreciation of an asset for a specified accounting period.",
		"Args": [
			"logical_test1", "[logical_test2]", "..."
		]
	},
	{
		"Fname": "ARABIC",
		"NewLine": "No",
		"Des": "tests a number of supplied conditions and returns:",
		"Args": [
			"text"
		]
	},
	{
		"Fname": "AREAS",
		"NewLine": "No",
		"Des": "converts a Roman numeral into an Arabic numeral.",
		"Args": [
			"reference"
		]
	},
	{
		"Fname": "ASIN",
		"NewLine": "No",
		"Des": "takes an Excel reference and returns the number of areas that make up the reference.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "ASINH",
		"NewLine": "No",
		"Des": "calculates the arcsine (i.e. the inverse sine) of a given number, and returns an angle, in radians, between -π/2 and π/2.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "ATAN",
		"NewLine": "No",
		"Des": "calculates the inverse hyperbolic sine of a supplied number.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "ATAN2",
		"NewLine": "Yes",
		"Des": "calculates the arctangent (i.e. the inverse tangent) of a given number, and returns an angle, in radians, between -π/2 and +π/2.",
		"Args": [
			"x_num", "y_num"
		]
	},
	{
		"Fname": "ATANH",
		"NewLine": "No",
		"Des": "calculates the arctangent (i.e. the inverse tangent) of a given set of x and y coordinates, and returns an angle, in radians, between -π/2 and +π/2.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "AVEDEV",
		"NewLine": "Yes",
		"Des": "calculates the inverse hyperbolic tangent of a supplied number.",
		"Args": [
			"number1", "[number2]", "..."
		]
	},
	{
		"Fname": "AVERAGE",
		"NewLine": "Yes",
		"Des": "calculates the average deviation of a supplied set of values.",
		"Args": [
			"number1", "[number2]", "..."
		]
	},
	{
		"Fname": "AVERAGEA",
		"NewLine": "Yes",
		"Des": "returns the arithmetic mean of a list of supplied numbers.",
		"Args": [
			"value1", "[value2]", "..."
		]
	},
	{
		"Fname": "AVERAGEIF",
		"NewLine": "Yes",
		"Des": "returns the arithmetic mean of a list of supplied numbers.",
		"Args": [
			"range", "criteria", "[average_range]"
		]
	},
	{
		"Fname": "AVERAGEIFS",
		"NewLine": "Yes",
		"Des": "finds the values in a supplied array that satisfy a specified criteria, and returns the average (i.e. the statistical mean) of the corresponding values in a second supplied array.",
		"Args": [
			"average_range", "criteria_range1", "criteria1", "[criteria_range2", "criteria2]", "..."
		]
	},
	{
		"Fname": "BAHTTEXT",
		"NewLine": "No",
		"Des": "finds entries in one or more arrays, that satisfy a set of supplied criteria, and returns the average (i.e. the statistical mean) of the corresponding values in a further supplied array.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "BASE",
		"NewLine": "Yes",
		"Des": "converts a number into Thai text, with the suffix Baht.",
		"Args": [
			"number", "radix", "[min_length]"
		]
	},
	{
		"Fname": "BESSELI",
		"NewLine": "Yes",
		"Des": "converts a number into a supplied base (radix), and returns a text representation of the calculated value.",
		"Args": [
			"x", "n"
		]
	},
	{
		"Fname": "BESSELJ",
		"NewLine": "Yes",
		"Des": "calculates the modified Bessel functions, In(x), (also known as the hyperbolic Bessel Functions). These functions are the equivalent of the Bessel functions, evaluated for purely imaginary arguments.",
		"Args": [
			"x", "n"
		]
	},
	{
		"Fname": "BESSELK",
		"NewLine": "Yes",
		"Des": "returns the Bessel function, Jn(x), for a specified order and value of x.",
		"Args": [
			"x", "n"
		]
	},
	{
		"Fname": "BESSELY",
		"NewLine": "Yes",
		"Des": "calculates the modified Bessel functions, Kn(x), which are also known as the hyperbolic Bessel Functions. These are the equivalent of the Bessel functions, evaluated for purely imaginary arguments.",
		"Args": [
			"x", "n"
		]
	},
	{
		"Fname": "BETA.DIST",
		"NewLine": "Yes",
		"Des": "returns the Bessel function, Yn(x), (also known as the Weber function or the Neumann function), for a specified order and value of x.",
		"Args": [
			"x", "alpha", "beta", "cumulative", "[A]", "[B]"
		]
	},
	{
		"Fname": "BETA.INV",
		"NewLine": "Yes",
		"Des": "calculates the cumulative beta distribution function or the probability density function of the Beta distribution, for a supplied set of parameters.",
		"Args": [
			"probability", "alpha", "beta", "[A]", "[B]"
		]
	},
	{
		"Fname": "BETADIST",
		"NewLine": "Yes",
		"Des": "calculates the inverse of the cumulative beta probability density function for a supplied probability.",
		"Args": [
			"x", "alpha", "beta", "[A]", "[B]"
		]
	},
	{
		"Fname": "BETAINV",
		"NewLine": "Yes",
		"Des": "calculates the cumulative beta probability density function for a supplied set of parameters.",
		"Args": [
			"probability", "alpha", "beta", "[A]", "[B]"
		]
	},
	{
		"Fname": "BIN2DEC",
		"NewLine": "No",
		"Des": "uses an iterative procedure to calculate the inverse of the cumulative beta probability density function for a supplied probability.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "BIN2HEX",
		"NewLine": "Yes",
		"Des": "converts a Binary (a base-2 number) into a decimal number.",
		"Args": [
			"number", "[places]"
		]
	},
	{
		"Fname": "BIN2OCT",
		"NewLine": "Yes",
		"Des": "converts a Binary (Base 2) number into a Hexadecimal (Base 16) number.",
		"Args": [
			"number", "[places]"
		]
	},
	{
		"Fname": "BINOM.DIST",
		"NewLine": "Yes",
		"Des": "converts a Binary (Base 2) number into an Octal (Base 8) number.",
		"Args": [
			"number_s", "trials", "probability_s", "cumulative"
		]
	},
	{
		"Fname": "BINOM.DIST.RANGE",
		"NewLine": "Yes",
		"Des": "returns the Binomial Distribution probability for a given number of successes from a specified number of trials.",
		"Args": [
			"trials", "probability_s", "number_s", "[number_s2]"
		]
	},
	{
		"Fname": "BINOM.INV",
		"NewLine": "Yes",
		"Des": "returns the Binomial Distribution probability for the number of successes from a specified number of trials falling into a specified range.",
		"Args": [
			"trials", "probability_s", "alpha"
		]
	},
	{
		"Fname": "BINOMDIST",
		"NewLine": "Yes",
		"Des": "returns the inverse of the Cumulative Binomial Distribution.",
		"Args": [
			"number_s", "trials", "probability_s", "cumulative"
		]
	},
	{
		"Fname": "BITAND",
		"NewLine": "Yes",
		"Des": "returns the Binomial Distribution probability of a specified number of successes out of a specified number of trials.",
		"Args": [
			"number1", "number2"
		]
	},
	{
		"Fname": "BITLSHIFT",
		"NewLine": "Yes",
		"Des": "returns the bitwise ‘AND’ for two supplied integers.",
		"Args": [
			"number", "shift_amount"
		]
	},
	{
		"Fname": "BITOR",
		"NewLine": "Yes",
		"Des": "returns a supplied integer, shifted left by a specified number of bits.",
		"Args": [
			"number1", "number2"
		]
	},
	{
		"Fname": "BITRSHIFT",
		"NewLine": "Yes",
		"Des": "returns the bitwise ‘OR’ for two supplied integers.",
		"Args": [
			"number", "shift_amount"
		]
	},
	{
		"Fname": "BITXOR",
		"NewLine": "Yes",
		"Des": "returns a supplied integer, shifted right by a specified number of bits.",
		"Args": [
			"number1", "number2"
		]
	},
	{
		"Fname": "CEILING",
		"NewLine": "Yes",
		"Des": "returns the bitwise ‘XOR’ (exclusive ‘OR’) for two supplied integers.",
		"Args": [
			"number", "significance"
		]
	},
	{
		"Fname": "CEILING.MATH",
		"NewLine": "Yes",
		"Des": "rounds a supplied number away from zero, to the nearest multiple of a given number.",
		"Args": [
			"number", "[significance]", "[mode]"
		]
	},
	{
		"Fname": "CEILING.PRECISE",
		"NewLine": "Yes",
		"Des": "rounds a supplied number up to a supplied multiple of significance.",
		"Args": [
			"number", "[significance]"
		]
	},
	{
		"Fname": "CELL",
		"NewLine": "Yes",
		"Des": "rounds a supplied number up (regardless of the number‘s sign), to the nearest multiple of a given number.",
		"Args": [
			"info_type", "reference"
		]
	},
	{
		"Fname": "CHAR",
		"NewLine": "No",
		"Des": "returns information about a given cell. This can be information in relation to the contents, formatting or location of the cell.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "CHIDIST",
		"NewLine": "Yes",
		"Des": "returns the character relating to a supplied character set number (from 1 to 255).",
		"Args": [
			"x", "degrees_freedom"
		]
	},
	{
		"Fname": "CHIINV",
		"NewLine": "Yes",
		"Des": "calculates the right-tailed probability of the chi-square distribution.",
		"Args": [
			"probability", "degrees_freedom"
		]
	},
	{
		"Fname": "CHISQ.DIST",
		"NewLine": "Yes",
		"Des": "calculates the inverse of the right-tailed probability of the Chi-Square Distribution.",
		"Args": [
			"x", "degrees_freedom", "cumulative"
		]
	},
	{
		"Fname": "CHISQ.DIST.RT",
		"NewLine": "Yes",
		"Des": "calculates the Probability Density Function or the Cumulative Distribution Function for the Chi-Square Distribution.",
		"Args": [
			"x", "degrees_freedom"
		]
	},
	{
		"Fname": "CHISQ.INV",
		"NewLine": "Yes",
		"Des": "calculates the right-tailed probability of the Chi-Square Distribution",
		"Args": [
			"probability", "degrees_freedom"
		]
	},
	{
		"Fname": "CHISQ.INV.RT",
		"NewLine": "Yes",
		"Des": "calculates the inverse of the left-tailed probability of the Chi-Square Distribution.",
		"Args": [
			"probability", "degrees_freedom"
		]
	},
	{
		"Fname": "CHISQ.TEST",
		"NewLine": "Yes",
		"Des": "calculates the inverse of the right-tailed probability of the Chi-Square Distribution.",
		"Args": [
			"actual_range", "expected_range"
		]
	},
	{
		"Fname": "CHITEST",
		"NewLine": "Yes",
		"Des": "performs the chi-square test on two supplied data sets (of observed and expected frequencies), and returns the probability that the differences between the sets are simply due to sampling error.",
		"Args": [
			"actual_range", "expected_range"
		]
	},
	{
		"Fname": "CHOOSE",
		"NewLine": "Yes",
		"Des": "uses the chi-square test to calculate the probability that the differences between two supplied data sets (of observed and expected frequencies), are likely to be simply due to sampling error, or if they are likely to be real.",
		"Args": [
			"index_num", "value1", "[value2]", "..."
		]
	},
	{
		"Fname": "CODE",
		"NewLine": "No",
		"Des": "returns a value from an array, that corresponds to a supplied index number (position).",
		"Args": [
			"text"
		]
	},
	{
		"Fname": "COLUMN",
		"NewLine": "No",
		"Des": "converts the first character of a supplied text string into the associated numeric character set code used by your computer.",
		"Args": [
			"[reference]"
		]
	},
	{
		"Fname": "COLUMNS",
		"NewLine": "No",
		"Des": "returns the first column number within a supplied reference or the number of the current column.",
		"Args": [
			"array"
		]
	},
	{
		"Fname": "COMBIN",
		"NewLine": "Yes",
		"Des": "receives an Excel range and returns the number of columns that are contained within the range.",
		"Args": [
			"number", "number_chosen"
		]
	},
	{
		"Fname": "COMBINA",
		"NewLine": "Yes",
		"Des": "calculates the number of combinations (in any order) of a given number objects from a set.",
		"Args": [
			"number", "number_chosen"
		]
	},
	{
		"Fname": "COMPLEX",
		"NewLine": "Yes",
		"Des": "calculates the number of combinations, with repetitions, of a given number objects from a set.",
		"Args": [
			"real_num", "i_num", "[suffix]"
		]
	},
	{
		"Fname": "CONCAT",
		"NewLine": "Yes",
		"Des": "takes two arguments, representing the real and the imaginary coefficients of a complex number, and from these, creates a complex number.",
		"Args": [
			"text1", "[text2]", "..."
		]
	},
	{
		"Fname": "CONCATENATE",
		"NewLine": "Yes",
		"Des": "joins together a series of supplied text strings into one combined text string.",
		"Args": [
			"text1", "[text2]", "..."
		]
	},
	{
		"Fname": "CONFIDENCE",
		"NewLine": "Yes",
		"Des": "joins together a series of supplied text strings or other values, into one combined text string.",
		"Args": [
			"alpha", "standard_dev", "size"
		]
	},
	{
		"Fname": "CONFIDENCE.NORM",
		"NewLine": "Yes",
		"Des": "uses a Normal Distribution to calculate a confidence value that can be used to construct the Confidence Interval for a population mean, for a supplied probablity and sample size. It is assumed that the standard deviation of the population is known.",
		"Args": [
			"alpha", "standard_dev", "size"
		]
	},
	{
		"Fname": "CONFIDENCE.T",
		"NewLine": "Yes",
		"Des": "uses a Normal Distribution to calculate a confidence value that can be used to construct the confidence interval for a population mean, for a supplied probablity and sample size. It is assumed that the standard deviation of the population is known.",
		"Args": [
			"alpha", "standard_dev", "size"
		]
	},
	{
		"Fname": "CONVERT",
		"NewLine": "Yes",
		"Des": "uses a Student’s T-Distribution to calculate a confidence value that can be used to construct the confidence interval for a population mean, for a supplied probablity and supplied sample size. It is assumed that the standard deviation of the population is known.",
		"Args": [
			"number", "from_unit", "to_unit"
		]
	},
	{
		"Fname": "CORREL",
		"NewLine": "Yes",
		"Des": "converts a number from one unit type (e.g. Yards) to another unit type (e.g. Meters). The function is new to Excel 2007, so is not available in earlier versions of Excel.",
		"Args": [
			"array1", "array2"
		]
	},
	{
		"Fname": "COS",
		"NewLine": "No",
		"Des": "calculates the Pearson Product-Moment Correlation Coefficient for two sets of values.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "COSH",
		"NewLine": "No",
		"Des": "calculates the cosine of a given angle.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "COT",
		"NewLine": "No",
		"Des": "calculates the hyperbolic cosine (cosh) of a supplied number.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "COTH",
		"NewLine": "No",
		"Des": "calculates the cotangent of a given angle.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "COUNT",
		"NewLine": "Yes",
		"Des": "calculates the hyperbolic cotangent (coth) of a supplied angle.",
		"Args": [
			"value1", "[value2]", "..."
		]
	},
	{
		"Fname": "COUNTA",
		"NewLine": "Yes",
		"Des": "returns the count of numeric values in a supplied set of cells or values. This count includes both numbers and dates.",
		"Args": [
			"value1", "[value2]", "..."
		]
	},
	{
		"Fname": "COUNTBLANK",
		"NewLine": "No",
		"Des": "returns the number of non-blanks within a supplied set of cells or values.",
		"Args": [
			"range"
		]
	},
	{
		"Fname": "COUNTIF",
		"NewLine": "Yes",
		"Des": "returns the number of blank cells in a supplied range.",
		"Args": [
			"range", "criteria"
		]
	},
	{
		"Fname": "COUNTIFS",
		"NewLine": "Yes",
		"Des": "returns the number of cells within a supplied range, that satisfy a given criteria.",
		"Args": [
			"criteria_range1", "criteria1", "[criteria_range2", "criteria2]", "..."
		]
	},
	{
		"Fname": "COUPDAYBS",
		"NewLine": "Yes",
		"Des": "returns the number of rows within a table, that satisfy a set of given criteria.",
		"Args": [
			"settlement", "maturity", "frequency", "[basis]"
		]
	},
	{
		"Fname": "COUPDAYS",
		"NewLine": "Yes",
		"Des": "calculates the number of days from the beginning of a coupon‘s period to the settlement date.",
		"Args": [
			"settlement", "maturity", "frequency", "[basis]"
		]
	},
	{
		"Fname": "COUPDAYSNC",
		"NewLine": "Yes",
		"Des": "calculates the number of days in a coupon period that contains the settlement date.",
		"Args": [
			"settlement", "maturity", "frequency", "[basis]"
		]
	},
	{
		"Fname": "COUPNCD",
		"NewLine": "Yes",
		"Des": "For a security, with given conditions, the Excel Coupdaysnc function calculates the number of days from the settlement date to the next coupon date.",
		"Args": [
			"settlement", "maturity", "frequency", "[basis]"
		]
	},
	{
		"Fname": "COUPNUM",
		"NewLine": "Yes",
		"Des": "For a security with given conditions, the Excel Coupncd function calculates the next coupon date, after the settlement date.",
		"Args": [
			"settlement", "maturity", "frequency", "[basis]"
		]
	},
	{
		"Fname": "COUPPCD",
		"NewLine": "Yes",
		"Des": "calculates the number of coupons payable, between a security’s settlement date and maturity date, rounded up to the nearest whole coupon.",
		"Args": [
			"settlement", "maturity", "frequency", "[basis]"
		]
	},
	{
		"Fname": "COVAR",
		"NewLine": "Yes",
		"Des": "returns the previous coupon date, before the settlement date for a security.",
		"Args": [
			"array1", "array2"
		]
	},
	{
		"Fname": "COVARIANCE.P",
		"NewLine": "Yes",
		"Des": "calculates the covariance of two supplied sets of values.",
		"Args": [
			"array1", "array2"
		]
	},
	{
		"Fname": "COVARIANCE.S",
		"NewLine": "Yes",
		"Des": "calculates the population covariance of two supplied sets of values.",
		"Args": [
			"array1", "array2"
		]
	},
	{
		"Fname": "CRITBINOM",
		"NewLine": "Yes",
		"Des": "calculates the sample covariance of two supplied sets of values.",
		"Args": [
			"trials", "probability_s", "alpha"
		]
	},
	{
		"Fname": "CSC",
		"NewLine": "No",
		"Des": "returns the inverse of the Cumulative Binomial Distribution. I.e. for a specific number of independent trials, the function returns the smallest value (number of successes) for which the cumulative binomial distribution is greater than or equal to a specified value.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "CSCH",
		"NewLine": "No",
		"Des": "calculates the cosecant of a given angle.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "CUMIPMT",
		"NewLine": "Yes",
		"Des": "calculates the hyperbolic cosecant (csch) of a supplied angle.",
		"Args": [
			"rate", "nper", "pv", "start_period", "end_period", "type"
		]
	},
	{
		"Fname": "CUMPRINC",
		"NewLine": "Yes",
		"Des": "calculates the cumulative interest paid on a loan or investment, between two specified periods.",
		"Args": [
			"rate", "nper", "pv", "start_period", "end_period", "type"
		]
	},
	{
		"Fname": "DATE",
		"NewLine": "Yes",
		"Des": "calculates the cumulative payment on the principal of a loan or investment, between two specified periods.",
		"Args": [
			"year", "month", "day"
		]
	},
	{
		"Fname": "DATEVALUE",
		"NewLine": "No",
		"Des": "converts a supplied year, month and day into an Excel date.",
		"Args": [
			"date_text"
		]
	},
	{
		"Fname": "DAVERAGE",
		"NewLine": "Yes",
		"Des": "converts a text representation of a date into an Excel date.",
		"Args": [
			"database", "field", "criteria"
		]
	},
	{
		"Fname": "DAY",
		"NewLine": "No",
		"Des": "calculates the average (statistical mean) of values in a field (column) in a database for selected records, that satisfy user-specified criteria.",
		"Args": [
			"serial_number"
		]
	},
	{
		"Fname": "DAYS",
		"NewLine": "Yes",
		"Des": "returns an integer representing the day of the month (from 1 - 31) of a supplied date.",
		"Args": [
			"end_date", "start_date"
		]
	},
	{
		"Fname": "DAYS360",
		"NewLine": "Yes",
		"Des": "returns the number of days between two supplied dates.",
		"Args": [
			"start_date", "end_date", "[method]"
		]
	},
	{
		"Fname": "DB",
		"NewLine": "Yes",
		"Des": "returns the number of days between 2 dates, based on a 360-day year (12 x 30 months).",
		"Args": [
			"cost", "salvage", "life", "period", "[month]"
		]
	},
	{
		"Fname": "DCOUNT",
		"NewLine": "Yes",
		"Des": "calculates the depreciation of an asset, using the Fixed Declining Balance Method, for each period of the asset‘s lifetime.",
		"Args": [
			"database", "[field]", "criteria"
		]
	},
	{
		"Fname": "DCOUNTA",
		"NewLine": "Yes",
		"Des": "returns the number of cells containing numeric values, in a field (column) of a database for selected records only.",
		"Args": [
			"database", "[field]", "criteria"
		]
	},
	{
		"Fname": "DDB",
		"NewLine": "Yes",
		"Des": "returns the number of non-blank cells, in a field (column) of a database for selected records only.",
		"Args": [
			"cost", "salvage", "life", "period", "[factor]"
		]
	},
	{
		"Fname": "DEC2BIN",
		"NewLine": "Yes",
		"Des": "calculates the depreciation of an asset, using the Double Declining Balance Method, or another specified depreciation rate.",
		"Args": [
			"number", "[places]"
		]
	},
	{
		"Fname": "DEC2HEX",
		"NewLine": "Yes",
		"Des": "converts a decimal number into a Binary (Base 2) number.",
		"Args": [
			"number", "[places]"
		]
	},
	{
		"Fname": "DEC2OCT",
		"NewLine": "Yes",
		"Des": "converts a text representation of a number in a specified base, into a decimal value.",
		"Args": [
			"number", "[places]"
		]
	},
	{
		"Fname": "DECIMAL",
		"NewLine": "Yes",
		"Des": "converts a decimal number into a Hexadecimal (Base 16) number.",
		"Args": [
			"text", "radix"
		]
	},
	{
		"Fname": "DEGREES",
		"NewLine": "No",
		"Des": "Hexadecimal (base 16), decimal (base 10), octal (base 8), and binary (base 2) are the most commonly used numeral systems in engineering and computing. Therefore, Excel has provided functions to convert numeric values to and from each of these systems.",
		"Args": [
			"angle"
		]
	},
	{
		"Fname": "DELTA",
		"NewLine": "Yes",
		"Des": "converts radians into degrees.",
		"Args": [
			"number1", "[number2]"
		]
	},
	{
		"Fname": "DEVSQ",
		"NewLine": "Yes",
		"Des": "tests two numbers for equality and returns the Kronecker Delta. i.e. the function returns 1 if the two supplied numbers are equal and 0 otherwise.",
		"Args": [
			"number1", "[number2]", "..."
		]
	},
	{
		"Fname": "DGET",
		"NewLine": "Yes",
		"Des": "For a supplied set of values, the Excel DEVSQ function calculates the sum of the squared deviations from the sample mean.",
		"Args": [
			"database", "field", "criteria"
		]
	},
	{
		"Fname": "DISC",
		"NewLine": "Yes",
		"Des": "returns a single value from a column of a database.",
		"Args": [
			"settlement", "maturity", "pr", "redemption", "[basis]"
		]
	},
	{
		"Fname": "DMAX",
		"NewLine": "Yes",
		"Des": "calculates the Discount Rate for a security.",
		"Args": [
			"database", "field", "criteria"
		]
	},
	{
		"Fname": "DMIN",
		"NewLine": "Yes",
		"Des": "finds the maximum value in a field (column) in a database for selected records only. The records to be included in the calculation are defined by a set of one or more user-specified criteria.",
		"Args": [
			"database", "field", "criteria"
		]
	},
	{
		"Fname": "DOLLAR",
		"NewLine": "Yes",
		"Des": "finds the minimum value in a field (column) in a database for selected records only. The records to be included in the calculation are defined by a set of one or more user-specified criteria.",
		"Args": [
			"number", "[decimals]"
		]
	},
	{
		"Fname": "DOLLARDE",
		"NewLine": "Yes",
		"Des": "rounds a supplied number to a specified number of decimal places and then converts this into a text string with a currency format.",
		"Args": [
			"fractional_dollar", "fraction"
		]
	},
	{
		"Fname": "DOLLARFR",
		"NewLine": "Yes",
		"Des": "converts a dollar value in fractional notation, into a dollar value expressed as a decimal.",
		"Args": [
			"decimal_dollar", "fraction"
		]
	},
	{
		"Fname": "DPRODUCT",
		"NewLine": "Yes",
		"Des": "converts a dollar value in decimal notation, into a dollar value that is expressed in fractional notation.",
		"Args": [
			"database", "field", "criteria"
		]
	},
	{
		"Fname": "DSTDEV",
		"NewLine": "Yes",
		"Des": "calculates the product of a field (column) in a database for selected records, that satisfy user-specified criteria.",
		"Args": [
			"database", "field", "criteria"
		]
	},
	{
		"Fname": "DSTDEVP",
		"NewLine": "Yes",
		"Des": "calculates the sample standard deviation of a field (column) in a database for selected records only. The records to be included in the calculation are defined by a set of one or more user-specified criteria.",
		"Args": [
			"database", "field", "criteria"
		]
	},
	{
		"Fname": "DSUM",
		"NewLine": "Yes",
		"Des": "calculates the standard deviation of a field (column) in a database for selected records only. The records to be included in the calculation are defined by a set of one or more user-specified criteria.",
		"Args": [
			"database", "field", "criteria"
		]
	},
	{
		"Fname": "DURATION",
		"NewLine": "Yes",
		"Des": "calculates the sum of a field (column) in a database for selected records, that satisfy user-specified criteria.",
		"Args": [
			"settlement", "maturity", "coupon", "yld", "frequency", "[basis]"
		]
	},
	{
		"Fname": "DVAR",
		"NewLine": "Yes",
		"Des": "calculates the Duration (specifically, the Macaulay Duration) of a security that pays periodic interest, assuming a par value of $100.",
		"Args": [
			"database", "field", "criteria"
		]
	},
	{
		"Fname": "DVARP",
		"NewLine": "Yes",
		"Des": "calculates the sample variance of a field (column) in a database for selected records only. The records to be included in the calculation are defined by a set of one or more user-specified criteria.",
		"Args": [
			"database", "field", "criteria"
		]
	},
	{
		"Fname": "EDATE",
		"NewLine": "Yes",
		"Des": "calculates the variance (for an entire population), of the values in a field (column) in a database for selected records only. The records to be included in the calculation are defined by a set of one or more user-specified criteria.",
		"Args": [
			"start_date", "months"
		]
	},
	{
		"Fname": "EFFECT",
		"NewLine": "Yes",
		"Des": "returns a date that is a specified number of months before or after a supplied start date.",
		"Args": [
			"nominal_rate", "npery"
		]
	},
	{
		"Fname": "EOMONTH",
		"NewLine": "Yes",
		"Des": "returns the effective annual interest rate for a given nominal interest rate and number of compounding periods per year.",
		"Args": [
			"start_date", "months"
		]
	},
	{
		"Fname": "ERF",
		"NewLine": "Yes",
		"Des": "returns the last day of the month, that is a specified number of months before or after an initial supplied start date.",
		"Args": [
			"lower_limit", "[upper_limit]"
		]
	},
	{
		"Fname": "ERF.PRECISE",
		"NewLine": "No",
		"Des": "calculates the Error Function, integrated between two supplied limits.",
		"Args": [
			"x"
		]
	},
	{
		"Fname": "ERFC",
		"NewLine": "No",
		"Des": "calculates the Error Function, integrated between a supplied lower or upper limit and 0.",
		"Args": [
			"x"
		]
	},
	{
		"Fname": "ERFC.PRECISE",
		"NewLine": "No",
		"Des": "calculates the Complementary Error Function, integrated between a supplied lower limit and infinity.",
		"Args": [
			"x"
		]
	},
	{
		"Fname": "ERROR.TYPE",
		"NewLine": "No",
		"Des": "calculates the Complementary Error Function, integrated between a supplied lower limit and infinity.",
		"Args": [
			"error_val"
		]
	},
	{
		"Fname": "EVEN",
		"NewLine": "No",
		"Des": "receives an error value and returns an integer, that tells you the type of the supplied error.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "EXACT",
		"NewLine": "Yes",
		"Des": "rounds a supplied number away from zero (i.e. rounds a positive number up and a negative number down), to the next even number.",
		"Args": [
			"text1", "text2"
		]
	},
	{
		"Fname": "EXP",
		"NewLine": "No",
		"Des": "tests if two supplied text strings or values are exactly equal and if so, returns TRUE; Otherwise, the function returns FALSE.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "EXPON.DIST",
		"NewLine": "Yes",
		"Des": "calculates the value of the mathematical constant e, raised to the power of a given number.",
		"Args": [
			"x", "lambda", "cumulative"
		]
	},
	{
		"Fname": "EXPONDIST",
		"NewLine": "Yes",
		"Des": "For a given value of x and parameter λ the Excel EXPON.DIST function calculates the value of the probability density function or the cumulative distribution function for the exponential distribution.",
		"Args": [
			"x", "lambda", "cumulative"
		]
	},
	{
		"Fname": "F.DIST",
		"NewLine": "Yes",
		"Des": "returns the value of the exponential distribution for a give value of x. The user can specify whether the probability density function or the cumulative distribution function is used.",
		"Args": [
			"x", "deg_freedom1", "deg_freedom2", "cumulative"
		]
	},
	{
		"Fname": "F.DIST.RT",
		"NewLine": "Yes",
		"Des": "calculates the (right-tailed) F Probability Distribution, which measures the degree of diversity between two data sets.",
		"Args": [
			"x", "deg_freedom1", "deg_freedom2"
		]
	},
	{
		"Fname": "F.INV",
		"NewLine": "Yes",
		"Des": "calculates the Probability Density Function or the Cumulative Distribution Function for the F Distribution. This function is frequently used used to measure the degree of diversity between two data sets.",
		"Args": [
			"probability", "deg_freedom1", "deg_freedom2"
		]
	},
	{
		"Fname": "F.INV.RT",
		"NewLine": "Yes",
		"Des": "calculates the inverse of the Cumulative F Distribution for a supplied probability.",
		"Args": [
			"probability", "deg_freedom1", "deg_freedom2"
		]
	},
	{
		"Fname": "F.TEST",
		"NewLine": "Yes",
		"Des": "calculates the inverse of the (right-tailed) F Probability Distribution for a specified probability.",
		"Args": [
			"array1", "array2"
		]
	},
	{
		"Fname": "FACT",
		"NewLine": "No",
		"Des": "returns the F-Test for two supplied arrays. I.e. the function returns the two-tailed probability that the variances in the two supplied arrays are not significantly different.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "FACTDOUBLE",
		"NewLine": "No",
		"Des": "returns the factorial of a supplied number.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "FDIST",
		"NewLine": "Yes",
		"Des": "returns the double factorial of a supplied number.",
		"Args": [
			"x", "deg_freedom1", "deg_freedom2"
		]
	},
	{
		"Fname": "FIND",
		"NewLine": "Yes",
		"Des": "calculates the (right-tailed) F Probability Distribution, which measures the degree of diversity between two data sets.",
		"Args": [
			"find_text", "within_text", "[start_num]"
		]
	},
	{
		"Fname": "FINV",
		"NewLine": "Yes",
		"Des": "returns the position of a specified character or sub-string within a supplied text string.",
		"Args": [
			"probability", "deg_freedom1", "deg_freedom2"
		]
	},
	{
		"Fname": "FISHER",
		"NewLine": "No",
		"Des": "calculates the inverse of the (right-tailed) F Probability Distribution for a supplied probability.",
		"Args": [
			"x"
		]
	},
	{
		"Fname": "FISHERINV",
		"NewLine": "No",
		"Des": "calculates the Fisher Transformation for a supplied value.",
		"Args": [
			"y"
		]
	},
	{
		"Fname": "FIXED",
		"NewLine": "Yes",
		"Des": "calculates the inverse of the Fisher Transformation and returns a value between -1 and +1.",
		"Args": [
			"number", "[decimals]", "[no_commas]"
		]
	},
	{
		"Fname": "FLOOR",
		"NewLine": "Yes",
		"Des": "rounds a supplied number to a specified number of decimal places and then converts this into text.",
		"Args": [
			"number", "significance"
		]
	},
	{
		"Fname": "FLOOR.MATH",
		"NewLine": "Yes",
		"Des": "rounds a supplied number towards zero to the nearest multiple of a specified significance.",
		"Args": [
			"number", "[significance]", "[mode]"
		]
	},
	{
		"Fname": "FLOOR.PRECISE",
		"NewLine": "Yes",
		"Des": "rounds a supplied number down to a supplied multiple of significance.",
		"Args": [
			"number", "[significance]"
		]
	},
	{
		"Fname": "FORECAST",
		"NewLine": "Yes",
		"Des": "rounds a supplied number down to a supplied multiple of significance.",
		"Args": [
			"x", "known_y's", "known_x's"
		]
	},
	{
		"Fname": "FORECAST.ETS",
		"NewLine": "Yes",
		"Des": "predicts a future point on a linear trend line fitted to a supplied set of x- and y- values.",
		"Args": [
			"target_date", "values", "timeline", "[seasonality]", "[datacompletion]", "[aggregation]"
		]
	},
	{
		"Fname": "FORECAST.ETS.CONFINT",
		"NewLine": "Yes",
		"Des": "uses an exponential smoothing algorithm to predict a future value on a timeline, based on a series of existing values.",
		"Args": [
			"target_date", "values", "timeline", "[confidence_level]", "[seasonality]", "[datacompletion]", "[aggregation]"
		]
	},
	{
		"Fname": "FORECAST.ETS.SEASONALITY",
		"NewLine": "Yes",
		"Des": "calculates the confidence interval for a forecast value on a timeline.",
		"Args": [
			"values", "timeline", "[datacompletion]", "[aggregation]"
		]
	},
	{
		"Fname": "FORECAST.ETS.STAT",
		"NewLine": "Yes",
		"Des": "calculates the length of a repetitive pattern in a timeline.",
		"Args": [
			"values", "timeline", "statistic_type", "[seasonality]", "[datacompletion]", "[aggregation]"
		]
	},
	{
		"Fname": "FORECAST.LINEAR",
		"NewLine": "Yes",
		"Des": "calculates a specified statistical value, relating to a time series forecasting.",
		"Args": [
			"x", "known_y's", "known_x's"
		]
	},
	{
		"Fname": "FORMULATEXT",
		"NewLine": "No",
		"Des": "predicts a future point on a linear trend line fitted to a supplied set of x- and y- values.",
		"Args": [
			"reference"
		]
	},
	{
		"Fname": "FREQUENCY",
		"NewLine": "Yes",
		"Des": "returns a formula as a text string.",
		"Args": [
			"data_array", "bins_array"
		]
	},
	{
		"Fname": "FTEST",
		"NewLine": "Yes",
		"Des": "For a supplied array of numeric values, the Excel Frequency function returns the number of values that fall into specified ranges.",
		"Args": [
			"array1", "array2"
		]
	},
	{
		"Fname": "FV",
		"NewLine": "Yes",
		"Des": "returns the F-Test for two supplied arrays. I.e. the function returns the two-tailed probability that the variances in the two supplied arrays are not significantly different.",
		"Args": [
			"rate", "nper", "[pmt]", "[pv]", "[type]"
		]
	},
	{
		"Fname": "FVSCHEDULE",
		"NewLine": "Yes",
		"Des": "calculates the Future Value of an investment with periodic constant payments and a constant interest rate.",
		"Args": [
			"principal", "schedule"
		]
	},
	{
		"Fname": "GAMMA",
		"NewLine": "No",
		"Des": "calculates the Future Value of an investment with a variable interest rate.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "GAMMA.DIST",
		"NewLine": "Yes",
		"Des": "returns the value of the Gamma Function, Γ(n), for a specified number, n.",
		"Args": [
			"x", "alpha", "beta", "cumulative"
		]
	},
	{
		"Fname": "GAMMA.INV",
		"NewLine": "Yes",
		"Des": "For a set of supplied parameters, the Excel Gamma.Dist function calculates the value of either the cumulative distribution or the probability density function for the Gamma Distribution.",
		"Args": [
			"probability", "alpha", "beta"
		]
	},
	{
		"Fname": "GAMMADIST",
		"NewLine": "Yes",
		"Des": "returns the inverse of the Gamma Cumulative Distribution.",
		"Args": [
			"x", "alpha", "beta", "cumulative"
		]
	},
	{
		"Fname": "GAMMAINV",
		"NewLine": "Yes",
		"Des": "returns the Gamma Distribution, which is frequently used to provide probabilities for values that may have a skewed distribution, such as queuing analysis.",
		"Args": [
			"probability", "alpha", "beta"
		]
	},
	{
		"Fname": "GAMMALN",
		"NewLine": "No",
		"Des": "returns the inverse of the Gamma Cumulative Distribution.",
		"Args": [
			"x"
		]
	},
	{
		"Fname": "GAMMALN.PRECISE",
		"NewLine": "No",
		"Des": "returns the natural logarithm of the Gamma Function, Γ(n).",
		"Args": [
			"x"
		]
	},
	{
		"Fname": "GAUSS",
		"NewLine": "No",
		"Des": "returns the probability that a member of a standard normal population will fall between the mean and a specified number of standard deviations from the mean.",
		"Args": [
			"z"
		]
	},
	{
		"Fname": "GCD",
		"NewLine": "Yes",
		"Des": "returns the natural logarithm of the Gamma Function, Γ(n).",
		"Args": [
			"number1", "[number2]", "..."
		]
	},
	{
		"Fname": "GEOMEAN",
		"NewLine": "Yes",
		"Des": "returns the greatest common divisor of two or more supplied integers.",
		"Args": [
			"number1", "[number2]", "..."
		]
	},
	{
		"Fname": "GESTEP",
		"NewLine": "Yes",
		"Des": "calculates the geometric mean of a supplied set of values.",
		"Args": [
			"number", "[step]"
		]
	},
	{
		"Fname": "GETPIVOTDATA",
		"NewLine": "Yes",
		"Des": "tests whether a supplied number is greater than a supplied step size and returns:",
		"Args": [
			"data_field", "pivot_table", "[field1]", "[item1]", "[field2]", "[item2]", "..."
		]
	},
	{
		"Fname": "GROWTH",
		"NewLine": "Yes",
		"Des": "extracts data from specified fields of an Excel Pivot Table.",
		"Args": [
			"known_y's", "[known_x's]", "[new_x's]", "[const]"
		]
	},
	{
		"Fname": "HARMEAN",
		"NewLine": "Yes",
		"Des": "calculates the exponential growth curve through a given set of y-values and (optionally), one or more sets of x-values. The function then extends the curve to calculate additional y-values for a further supplied set of new x-values.",
		"Args": [
			"number1", "[number2]", "..."
		]
	},
	{
		"Fname": "HEX2BIN",
		"NewLine": "Yes",
		"Des": "converts a Hexadecimal (Base 16) number into a Binary (Base 2) number.",
		"Args": [
			"number", "[places]"
		]
	},
	{
		"Fname": "HEX2DEC",
		"NewLine": "No",
		"Des": "calculates the harmonic mean of a supplied set of values.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "HEX2OCT",
		"NewLine": "Yes",
		"Des": "converts a hexadecimal (a base-16 number) into a decimal number.",
		"Args": [
			"number", "[places]"
		]
	},
	{
		"Fname": "HLOOKUP",
		"NewLine": "Yes",
		"Des": "converts a Hexadecimal (Base 16) number into an Octal (Base 8) number.",
		"Args": [
			"lookup_value", "table_array", "row_index_num", "[range_lookup]"
		]
	},
	{
		"Fname": "HOUR",
		"NewLine": "No",
		"Des": "looks up a given value in the top row of a data array (or table), and returns the corresponding value from another row of the array.",
		"Args": [
			"serial_number"
		]
	},
	{
		"Fname": "HYPERLINK",
		"NewLine": "Yes",
		"Des": "returns an integer representing the hour component of a supplied Excel time.",
		"Args": [
			"link_location", "[friendly_name]"
		]
	},
	{
		"Fname": "HYPGEOM.DIST",
		"NewLine": "Yes",
		"Des": "creates a hyperlink to a specified location.",
		"Args": [
			"sample_s", "number_sample", "population_s", "number_pop", "cumulative"
		]
	},
	{
		"Fname": "HYPGEOMDIST",
		"NewLine": "Yes",
		"Des": "returns the value of the hypergeometric distribution for a specified number of successes from a population sample.",
		"Args": [
			"sample_s", "number_sample", "population_s", "number_pop"
		]
	},
	{
		"Fname": "IF",
		"NewLine": "Yes",
		"Des": "returns the value of the hypergeometric distribution for a given number of successes from a sample of a population.",
		"Args": [
			"logical_test", "value_if_true", "value_if_false"
		]
	},
	{
		"Fname": "IFERROR",
		"NewLine": "Yes",
		"Des": "tests a supplied condition and returns one result if the condition evaluates to TRUE, and another result if the condition evaluates to FALSE.",
		"Args": [
			"value", "value_if_error"
		]
	},
	{
		"Fname": "IFNA",
		"NewLine": "Yes",
		"Des": "receives two values (or expressions) and tests if the first of these evaluates to an error.",
		"Args": [
			"value", "value_if_na"
		]
	},
	{
		"Fname": "IFS",
		"NewLine": "Yes",
		"Des": "tests if an initial supplied value (or expression) evaluates to the Excel #N/A error. If so, the function returns a second supplied value; Otherwise the function returns the first supplied value.",
		"Args": [
			"logical_test1", " value_if_true1", " [logical_test2", " value_if_true2]", " [logical_test3", " value_if_true3]", "..."
		]
	},
	{
		"Fname": "IMABS",
		"NewLine": "No",
		"Des": "tests a number of supplied conditions and returns the result corresponding to the first condition that evaluates to TRUE. If none of the supplied conditions evaluate to TRUE, the function returns the #N/A error.",
		"Args": [
			"inumber"
		]
	},
	{
		"Fname": "IMAGINARY",
		"NewLine": "No",
		"Des": "returns the absolute value (the modulus) of a complex number.",
		"Args": [
			"inumber"
		]
	},
	{
		"Fname": "IMCONJUGATE",
		"NewLine": "No",
		"Des": "returns the imaginary coefficient of a supplied complex number.",
		"Args": [
			"inumber"
		]
	},
	{
		"Fname": "IMCOS",
		"NewLine": "No",
		"Des": "returns the complex conjugate of a supplied complex number.",
		"Args": [
			"inumber"
		]
	},
	{
		"Fname": "IMCOSH",
		"NewLine": "No",
		"Des": "returns the cosine of a supplied complex number.",
		"Args": [
			"inumber"
		]
	},
	{
		"Fname": "IMCOT",
		"NewLine": "No",
		"Des": "returns the hyperbolic cosine of a supplied complex number.",
		"Args": [
			"inumber"
		]
	},
	{
		"Fname": "IMCSC",
		"NewLine": "No",
		"Des": "returns the cotangent of a supplied complex number.",
		"Args": [
			"inumber"
		]
	},
	{
		"Fname": "IMCSCH",
		"NewLine": "No",
		"Des": "returns the cosecant of a supplied complex number.",
		"Args": [
			"inumber"
		]
	},
	{
		"Fname": "IMDIV",
		"NewLine": "Yes",
		"Des": "returns the hyperbolic cosecant of a supplied complex number.",
		"Args": [
			"inumber1", "inumber2"
		]
	},
	{
		"Fname": "IMEXP",
		"NewLine": "No",
		"Des": "calculates the quotient of two complex numbers (i.e. divides one complex number by another).",
		"Args": [
			"inumber"
		]
	},
	{
		"Fname": "IMLN",
		"NewLine": "No",
		"Des": "returns the exponential of a supplied complex number.",
		"Args": [
			"inumber"
		]
	},
	{
		"Fname": "IMLOG10",
		"NewLine": "No",
		"Des": "returns the natural logarithm of a supplied complex number.",
		"Args": [
			"inumber"
		]
	},
	{
		"Fname": "IMLOG2",
		"NewLine": "No",
		"Des": "returns the common (base 10) logarithm of a supplied complex number.",
		"Args": [
			"inumber"
		]
	},
	{
		"Fname": "IMPOWER",
		"NewLine": "Yes",
		"Des": "calculates the base 2 logarithm of a supplied complex number.",
		"Args": [
			"inumber", "number"
		]
	},
	{
		"Fname": "IMPRODUCT",
		"NewLine": "Yes",
		"Des": "returns a supplied complex number, raised to a given power.",
		"Args": [
			"inumber1", "inumber2", "..."
		]
	},
	{
		"Fname": "IMREAL",
		"NewLine": "No",
		"Des": "calculates the product of two or more complex numbers.",
		"Args": [
			"inumber"
		]
	},
	{
		"Fname": "IMSEC",
		"NewLine": "No",
		"Des": "returns the real coefficient of a supplied complex number.",
		"Args": [
			"inumber"
		]
	},
	{
		"Fname": "IMSECH",
		"NewLine": "No",
		"Des": "returns the secant of a supplied complex number.",
		"Args": [
			"inumber"
		]
	},
	{
		"Fname": "IMSIN",
		"NewLine": "No",
		"Des": "returns the hyperbolic secant of a supplied complex number.",
		"Args": [
			"inumber"
		]
	},
	{
		"Fname": "IMSINH",
		"NewLine": "No",
		"Des": "returns the Sine of a supplied complex number.",
		"Args": [
			"inumber"
		]
	},
	{
		"Fname": "IMSQRT",
		"NewLine": "No",
		"Des": "returns the hyperbolic sine of a supplied complex number.",
		"Args": [
			"inumber"
		]
	},
	{
		"Fname": "IMSUB",
		"NewLine": "Yes",
		"Des": "returns the square root of a supplied complex number.",
		"Args": [
			"inumber1", "inumber2"
		]
	},
	{
		"Fname": "IMSUM",
		"NewLine": "Yes",
		"Des": "calculates the sum of two or more complex numbers.",
		"Args": [
			"inumber1", "inumber2", "..."
		]
	},
	{
		"Fname": "IMTAN",
		"NewLine": "No",
		"Des": "calculates the difference between two complex numbers (i.e. subtracts one complex number from another).",
		"Args": [
			"inumber"
		]
	},
	{
		"Fname": "INDIRECT",
		"NewLine": "Yes",
		"Des": "returns the tangent of a supplied complex number.",
		"Args": [
			"ref_text", "[a1]"
		]
	},
	{
		"Fname": "INFO",
		"NewLine": "No",
		"Des": "converts a text string into a cell reference.",
		"Args": [
			"type_text"
		]
	},
	{
		"Fname": "INT",
		"NewLine": "No",
		"Des": "returns a text string containing information about the current operating environment.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "INTERCEPT",
		"NewLine": "Yes",
		"Des": "truncates a supplied number down to the closest integer.",
		"Args": [
			"known_y's", "known_x's"
		]
	},
	{
		"Fname": "INTRATE",
		"NewLine": "Yes",
		"Des": "calculates the intercept (the value at the intersection of the y axis) of the linear regression line through a supplied set of x- and y- values.",
		"Args": [
			"settlement", "maturity", "investment", "redemption", "[basis]"
		]
	},
	{
		"Fname": "IPMT",
		"NewLine": "Yes",
		"Des": "calculates the interest rate for a fully invested security.",
		"Args": [
			"rate", "per", "nper", "pv", "[fv]", "[type]"
		]
	},
	{
		"Fname": "IRR",
		"NewLine": "Yes",
		"Des": "calculates the interest payment, during a specific period of a loan or investment that is paid in constant periodic payments, with a constant interest rate.",
		"Args": [
			"values", "[guess]"
		]
	},
	{
		"Fname": "ISBLANK",
		"NewLine": "No",
		"Des": "returns the Internal Rate of Return for a supplied series of periodic cash flows (i.e. an initial investment value and a series of net income values).",
		"Args": [
			"value"
		]
	},
	{
		"Fname": "ISERR",
		"NewLine": "No",
		"Des": "tests if an initial supplied expression (or value) returns an Excel Error, and if so, returns the logical value TRUE; Otherwise the function returns FALSE.",
		"Args": [
			"value"
		]
	},
	{
		"Fname": "ISERROR",
		"NewLine": "No",
		"Des": "tests if an initial supplied expression (or value) returns any Excel Error, except the #N/A error. If so, the function returns the logical value TRUE; If the supplied value is not an error or is the #N/A error, the Iserr function returns FALSE.",
		"Args": [
			"value"
		]
	},
	{
		"Fname": "ISEVEN",
		"NewLine": "No",
		"Des": "tests if a specified cell is blank (empty) and if so, returns TRUE; Otherwise the function returns FALSE.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "ISFORMULA",
		"NewLine": "No",
		"Des": "tests if a supplied number (or numeric expression) evaluates to an even number, and if so, returns TRUE; Otherwise, the function returns FALSE.",
		"Args": [
			"reference"
		]
	},
	{
		"Fname": "ISLOGICAL",
		"NewLine": "No",
		"Des": "tests if a specified cell contains a formula, and if so, returns TRUE; Otherwise, the function returns FALSE.",
		"Args": [
			"value"
		]
	},
	{
		"Fname": "ISNA",
		"NewLine": "No",
		"Des": "tests if a supplied value (or expression) returns a logical value (i.e. evaluates to True or False). If so, the function returns TRUE; Otherwise, it returns FALSE.",
		"Args": [
			"value"
		]
	},
	{
		"Fname": "ISNONTEXT",
		"NewLine": "No",
		"Des": "tests if an initial supplied expression (or value) returns the Excel #N/A Error, and if so, returns TRUE; Otherwise the function returns FALSE.",
		"Args": [
			"value"
		]
	},
	{
		"Fname": "ISNUMBER",
		"NewLine": "No",
		"Des": "tests if a supplied value is text. If not, the function returns TRUE; If the supplied value is text, the function returns FALSE.",
		"Args": [
			"value"
		]
	},
	{
		"Fname": "ISO.CEILING",
		"NewLine": "Yes",
		"Des": "tests if a supplied value is a number. If so, the function returns TRUE; Otherwise it returns FALSE.",
		"Args": [
			"number", "[significance]"
		]
	},
	{
		"Fname": "ISODD",
		"NewLine": "No",
		"Des": "rounds a supplied number up (regardless of the number's sign), to the nearest multiple of a supplied significance.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "ISOWEEKNUM",
		"NewLine": "No",
		"Des": "returns the ISO week number of a supplied date.",
		"Args": [
			"date"
		]
	},
	{
		"Fname": "ISPMT",
		"NewLine": "Yes",
		"Des": "calculates the interest paid during a specific period of a loan or investment.",
		"Args": [
			"rate", "per", "nper", "pv"
		]
	},
	{
		"Fname": "ISREF",
		"NewLine": "No",
		"Des": "tests if a supplied number (or numeric expression) evaluates to an odd number, and if so, returns TRUE; Otherwise, the function returns FALSE.",
		"Args": [
			"value"
		]
	},
	{
		"Fname": "ISTEXT",
		"NewLine": "No",
		"Des": "tests if a supplied value is a reference. If so, the function returns TRUE; Otherwise it returns FALSE.",
		"Args": [
			"value"
		]
	},
	{
		"Fname": "KURT",
		"NewLine": "Yes",
		"Des": "tests if a supplied value is text, and if so, returns TRUE; Otherwise, the function returns FALSE.",
		"Args": [
			"number1", "[number2]", "..."
		]
	},
	{
		"Fname": "LARGE",
		"NewLine": "Yes",
		"Des": "returns the k'th largest value from an array of numeric values.",
		"Args": [
			"array", "k"
		]
	},
	{
		"Fname": "LCM",
		"NewLine": "Yes",
		"Des": "calculates the kurtosis of a supplied set of values.",
		"Args": [
			"number1", "[number2]", "..."
		]
	},
	{
		"Fname": "LEFT",
		"NewLine": "Yes",
		"Des": "returns a specified number of characters from the start of a supplied text string.",
		"Args": [
			"text", "[num_chars]"
		]
	},
	{
		"Fname": "LEFT",
		"NewLine": "Yes",
		"Des": "returns the least common multiple of two or more supplied integers.",
		"Args": [
			"text", "[num_chars]"
		]
	},
	{
		"Fname": "LEN",
		"NewLine": "No",
		"Des": "returns the length of a supplied text string.",
		"Args": [
			"text"
		]
	},
	{
		"Fname": "LN",
		"NewLine": "No",
		"Des": "calculates the natural logarithm of a given number.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "LOG",
		"NewLine": "Yes",
		"Des": "calculates the logarithm of a given number, to a supplied base.",
		"Args": [
			"number", "[base]"
		]
	},
	{
		"Fname": "LOG10",
		"NewLine": "No",
		"Des": "calculates the base 10 logarithm of a given number.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "LOGEST",
		"NewLine": "Yes",
		"Des": "returns statistical information on the exponential curve of best fit, through a supplied set of x- and y- values.",
		"Args": [
			"known_y's", "[known_x's]", "[const]", "[stats]"
		]
	},
	{
		"Fname": "LOGINV",
		"NewLine": "Yes",
		"Des": "calculates the inverse of the Cumulative Log-Normal Distribution Function of x, for a supplied probability.",
		"Args": [
			"probability", "mean", "standard_dev"
		]
	},
	{
		"Fname": "LOGNORM.DIST",
		"NewLine": "Yes",
		"Des": "calculates the Log-Normal Probability Density Function or the Cumulative Log-Normal Distribution Function for a supplied value of x.",
		"Args": [
			"x", "mean", "standard_dev", "cumulative"
		]
	},
	{
		"Fname": "LOGNORM.INV",
		"NewLine": "Yes",
		"Des": "calculates the inverse of the Cumulative Log-Normal Distribution Function of x, for a supplied probability.",
		"Args": [
			"probability", "mean", "standard_dev"
		]
	},
	{
		"Fname": "LOGNORMDIST",
		"NewLine": "Yes",
		"Des": "calculates the Cumulative Log-Normal Distribution Function at a supplied value of x.",
		"Args": [
			"x", "mean", "standard_dev"
		]
	},
	{
		"Fname": "LOOKUP",
		"NewLine": "Yes",
		"Des": "has two forms: the Vector form and the Array form.",
		"Args": [
			"lookup_value", "lookup_vector", "[result_vector]"
		]
	},
	{
		"Fname": "LOWER",
		"NewLine": "No",
		"Des": "converts all characters in a supplied text string to lower case.",
		"Args": [
			"text"
		]
	},
	{
		"Fname": "MATCH",
		"NewLine": "Yes",
		"Des": "looks up a value in an array, and returns the position of the value within the array.",
		"Args": [
			"lookup_value", "lookup_array", "[match_type]"
		]
	},
	{
		"Fname": "MAX",
		"NewLine": "Yes",
		"Des": "returns the largest value from a supplied set of numeric values.",
		"Args": [
			"number1", "[number2]", "..."
		]
	},
	{
		"Fname": "MAXA",
		"NewLine": "Yes",
		"Des": "returns the largest value from a supplied set of numeric values, while counting text and the logical value FALSE as the value 0 and counting the logical value TRUE as the value 1.",
		"Args": [
			"number1", "[number2]", "..."
		]
	},
	{
		"Fname": "MAXIFS",
		"NewLine": "Yes",
		"Des": "returns the maximum value from a subset of values that are specified according to one or more criteria.",
		"Args": [
			"max_range", "criteria_range1", "criteria1", "[criteria_range2", "criteria2]", "..."
		]
	},
	{
		"Fname": "MDETERM",
		"NewLine": "No",
		"Des": "calculates the determinant of a square matrix.",
		"Args": [
			"array"
		]
	},
	{
		"Fname": "MDURATION",
		"NewLine": "Yes",
		"Des": "calculates the Modified Macaulay Duration of a security that pays periodic interest, assuming a par value of $100.",
		"Args": [
			"settlement", "maturity", "coupon", "yld", "frequency", "[basis]"
		]
	},
	{
		"Fname": "MEDIAN",
		"NewLine": "Yes",
		"Des": "returns the statistical median (the middle value) of a list of supplied numbers.",
		"Args": [
			"number1", "[number2]", "..."
		]
	},
	{
		"Fname": "MID",
		"NewLine": "Yes",
		"Des": "returns a specified number of characters from the middle of a supplied text string.",
		"Args": [
			"text", "start_num", "num_chars"
		]
	},
	{
		"Fname": "MIN",
		"NewLine": "Yes",
		"Des": "returns the smallest value from a supplied set of numeric values.",
		"Args": [
			"number1", "[number2]", "..."
		]
	},
	{
		"Fname": "MINA",
		"NewLine": "Yes",
		"Des": "returns the smallest value from a supplied set of numeric values, while counting text and the logical value FALSE as the value 0 and counting the logical value TRUE as the value 1.",
		"Args": [
			"number1", "[number2]", "..."
		]
	},
	{
		"Fname": "MINIFS",
		"NewLine": "Yes",
		"Des": "returns the minimum value from a subset of values that are specified according to one or more criteria.",
		"Args": [
			"min_range", "criteria_range1", "criteria1", "[criteria_range2", "criteria2]", "..."
		]
	},
	{
		"Fname": "MINUTE",
		"NewLine": "No",
		"Des": "returns an integer representing the minute component of a supplied Excel time.",
		"Args": [
			"serial_number"
		]
	},
	{
		"Fname": "MINVERSE",
		"NewLine": "No",
		"Des": "calculates the inverse of a square matrix.",
		"Args": [
			"array"
		]
	},
	{
		"Fname": "MIRR",
		"NewLine": "Yes",
		"Des": "returns the Modified Internal Rate of Return for a supplied series of periodic cash flows (i.e. a set of values, which includes an initial investment value and a series of net income values).",
		"Args": [
			"values", "finance_rate", "reinvest_rate"
		]
	},
	{
		"Fname": "MMULT",
		"NewLine": "Yes",
		"Des": "calculates the matrix product of two arrays (representing matrices).",
		"Args": [
			"array1", "array2"
		]
	},
	{
		"Fname": "MOD",
		"NewLine": "Yes",
		"Des": "returns the remainder of a division between two supplied numbers.",
		"Args": [
			"number", "divisor"
		]
	},
	{
		"Fname": "MODE",
		"NewLine": "Yes",
		"Des": "returns the statistical mode (the most frequently occurring value) of a list of supplied numbers. If there are 2 or more most frequently occurring values in the supplied data, the function returns the lowest of these values",
		"Args": [
			"number1", "[number2]", "..."
		]
	},
	{
		"Fname": "MODE.MULT",
		"NewLine": "Yes",
		"Des": "returns a vertical array of the statistical modes (the most frequently occurring values) within a list of supplied numbers.",
		"Args": [
			"number1", "[number2]", "..."
		]
	},
	{
		"Fname": "MODE.SNGL",
		"NewLine": "Yes",
		"Des": "returns the statistical mode (the most frequently occurring value) within a list of supplied numbers. If there are 2 or more most frequently occurring values in the supplied data, the function returns the lowest of these values.",
		"Args": [
			"number1", "[number2]", "..."
		]
	},
	{
		"Fname": "MONTH",
		"NewLine": "No",
		"Des": " returns an integer, representing the month (from 1 - 12) of a supplied date.",
		"Args": [
			"serial_number"
		]
	},
	{
		"Fname": "MROUND",
		"NewLine": "Yes",
		"Des": "rounds a supplied number up or down to the nearest multiple of a given number.",
		"Args": [
			"number", "multiple"
		]
	},
	{
		"Fname": "MUNIT",
		"NewLine": "No",
		"Des": "returns the unit matrix for a specified dimension.",
		"Args": [
			"dimension"
		]
	},
	{
		"Fname": "N",
		"NewLine": "No",
		"Des": "converts data into a numeric value, using the following rules:",
		"Args": [
			"value"
		]
	},
	{
		"Fname": "NA",
		"NewLine": "No",
		"Des": "returns the Excel #N/A error. This error message has the meaning 'value not available' and is produced when an Excel Formula is unable to find a value that it needs.",
		"Args": [

		]
	},
	{
		"Fname": "NEGBINOM.DIST",
		"NewLine": "Yes",
		"Des": "Given the probability of a success from a single event, the Excel NEGBINOM.DIST function calculates the probability mass function or the cumulative distribution function for the Negative Binomial Distribution.",
		"Args": [
			"number_f", "number_s", "probability_s", "cumulative"
		]
	},
	{
		"Fname": "NEGBINOMDIST",
		"NewLine": "Yes",
		"Des": "Given the probability of a success from a single event, the Excel NEGBINOMDIST function calculates the Negative Binomial Distribution for a given set of parameters.",
		"Args": [
			"number_f", "number_s", "probability_s"
		]
	},
	{
		"Fname": "NETWORKDAYS",
		"NewLine": "Yes",
		"Des": "calculates the number of work days between two supplied dates (including the start and end date). The calculation includes all weekdays (Mon - Fri), excluding a supplied list of holidays.",
		"Args": [
			"start_date", "end_date", "[holidays]"
		]
	},
	{
		"Fname": "NETWORKDAYS.INTL",
		"NewLine": "Yes",
		"Des": "calculates the number of whole work days between two supplied dates, excluding weekends and holidays. The function allows the user to specify which days are counted as weekends and holidays.",
		"Args": [
			"start_date", "end_date", "[weekend]", "[holidays]"
		]
	},
	{
		"Fname": "NOMINAL",
		"NewLine": "Yes",
		"Des": "returns the nominal interest rate for a given effective interest rate and number of compounding periods per year.",
		"Args": [
			"effect_rate", "npery"
		]
	},
	{
		"Fname": "NORM.DIST",
		"NewLine": "Yes",
		"Des": "calculates the Normal Probability Density Function or the Cumulative Normal Distribution Function for a supplied value of x, and a supplied distribution mean & standard deviation.",
		"Args": [
			"x", "mean", "standard_dev", "cumulative"
		]
	},
	{
		"Fname": "NORM.INV",
		"NewLine": "Yes",
		"Des": "calculates the inverse of the Cumulative Normal Distribution Function for a supplied value of x, and a supplied distribution mean & standard deviation.",
		"Args": [
			"probability", "mean", "standard_dev"
		]
	},
	{
		"Fname": "NORM.S.DIST",
		"NewLine": "Yes",
		"Des": "calculates the Standard Normal Distribution Function for a supplied value.",
		"Args": [
			"z", "cumulative"
		]
	},
	{
		"Fname": "NORM.S.INV",
		"NewLine": "No",
		"Des": "calculates the inverse of the Standard Normal Cumulative Distribution Function for a supplied probability value.",
		"Args": [
			"probability"
		]
	},
	{
		"Fname": "NORMDIST",
		"NewLine": "Yes",
		"Des": "calculates the Normal Probability Density Function or the Cumulative Normal Distribution. Function for a supplied set of parameters.",
		"Args": [
			"x", "mean", "standard_dev", "cumulative"
		]
	},
	{
		"Fname": "NORMINV",
		"NewLine": "Yes",
		"Des": "calculates the inverse of the Cumulative Normal Distribution Function for a supplied value of x, and a supplied distribution mean & standard deviation.",
		"Args": [
			"probability", "mean", "standard_dev"
		]
	},
	{
		"Fname": "NORMSDIST",
		"NewLine": "No",
		"Des": "calculates the Standard Normal Cumulative Distribution Function for a supplied value.",
		"Args": [
			"z"
		]
	},
	{
		"Fname": "NORMSINV",
		"NewLine": "No",
		"Des": "calculates the inverse of the Standard Normal Cumulative Distribution Function for a supplied probability value.",
		"Args": [
			"probability"
		]
	},
	{
		"Fname": "NOT",
		"NewLine": "No",
		"Des": "returns the opposite to a supplied logical value.",
		"Args": [
			"logical"
		]
	},
	{
		"Fname": "NOW",
		"NewLine": "No",
		"Des": "returns the current date and time. The function receives no arguments and therefore, the function syntax is:",
		"Args": [

		]
	},
	{
		"Fname": "NPER",
		"NewLine": "Yes",
		"Des": "calculates the number of periods required to pay off a loan, for a constant periodic payment and a constant interest rate.",
		"Args": [
			"rate", "pmt", "pv", "[fv]", "[type]"
		]
	},
	{
		"Fname": "NPV",
		"NewLine": "Yes",
		"Des": "calculates the Net Present Value of an investment, based on a supplied discount rate, and a series of future payments and income.",
		"Args": [
			"rate", "value1", "[value2]", "[value3]", "..."
		]
	},
	{
		"Fname": "NUMBERVALUE",
		"NewLine": "Yes",
		"Des": "converts a text string into a number, in a locale-independant way.",
		"Args": [
			"text", "[decimal_separator]", "[group_separator]"
		]
	},
	{
		"Fname": "OCT2BIN",
		"NewLine": "Yes",
		"Des": "converts an Octal (Base 8) number into a Binary (Base 2) number.",
		"Args": [
			"number", "[places]"
		]
	},
	{
		"Fname": "OCT2DEC",
		"NewLine": "No",
		"Des": "converts an Octal (a base-8 number) into a decimal number.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "OCT2HEX",
		"NewLine": "Yes",
		"Des": "converts an Octal (Base 8) number into a Hexadecimal (Base 16) number.",
		"Args": [
			"number", "[places]"
		]
	},
	{
		"Fname": "ODD",
		"NewLine": "No",
		"Des": "rounds a supplied number away from zero (i.e. rounds a positive number up and a negative number down), to the next odd number.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "ODDFPRICE",
		"NewLine": "Yes",
		"Des": "calculates the price per $100 face value of a security with an odd (short or long) first period.",
		"Args": [
			"settlement", "maturity", "issue", "first_coupon", "rate", "yld", "redemption", "frequency", " [basis] )"
		]
	},
	{
		"Fname": "ODDFYIELD",
		"NewLine": "Yes",
		"Des": "calculates the yield of a security with an odd (short or long) first period.",
		"Args": [
			"settlement", "maturity", "issue", "first_coupon", "rate", "pr", "redemption", "frequency", " [basis] )"
		]
	},
	{
		"Fname": "ODDFYIELD",
		"NewLine": "Yes",
		"Des": "calculates the price per $100 face value of a security with an odd (short or long) last period.",
		"Args": [
			"settlement", "maturity", "issue", "first_coupon", "rate", "pr", "redemption", "frequency", " [basis] )"
		]
	},
	{
		"Fname": "ODDLPRICE",
		"NewLine": "Yes",
		"Des": "calculates the yield of a security with an odd (short or long) last period.",
		"Args": [
			"settlement", "maturity", "last_interest", "rate", "yld", "redemption", "frequency", "[basis]"
		]
	},
	{
		"Fname": "OFFSET",
		"NewLine": "Yes",
		"Des": "returns range of cells that is a specified number of rows and columns from an initial specified range.",
		"Args": [
			"reference", "rows", "cols", "[height]", "[width]"
		]
	},
	{
		"Fname": "OR",
		"NewLine": "Yes",
		"Des": "tests a number of supplied conditions and returns either:",
		"Args": [
			"logical_test1", "[logical_test2]", "..."
		]
	},
	{
		"Fname": "PDURATION",
		"NewLine": "Yes",
		"Des": "calculates the number of periods required for an investment to reach a specified future value.",
		"Args": [
			"rate", "pv", "fv"
		]
	},
	{
		"Fname": "PEARSON",
		"NewLine": "Yes",
		"Des": "calculates the Pearson Product-Moment Correlation Coefficient for two sets of values.",
		"Args": [
			"array1", "array2"
		]
	},
	{
		"Fname": "PERCENTILE",
		"NewLine": "Yes",
		"Des": "returns the k'th percentile (i.e. the value below which k% of the data values fall) for a supplied range of values and a supplied k.",
		"Args": [
			"array", "k"
		]
	},
	{
		"Fname": "PERCENTILE.EXC",
		"NewLine": "Yes",
		"Des": "returns the k'th percentile (i.e. the value below which k% of the data values fall) for a supplied range of values and a supplied k (between 0 & 1 exclusive).",
		"Args": [
			"array", "k"
		]
	},
	{
		"Fname": "PERCENTILE.INC",
		"NewLine": "Yes",
		"Des": "returns the k'th percentile (i.e. the value below which k% of the data values fall) for a supplied range of values and a supplied k (between 0 & 1 inclusive).",
		"Args": [
			"array", "k"
		]
	},
	{
		"Fname": "PERCENTRANK",
		"NewLine": "Yes",
		"Des": "calculates the relative position of a specified value, within a set of values, as a percentage.",
		"Args": [
			"array", "x", "[significance]"
		]
	},
	{
		"Fname": "PERCENTRANK.EXC",
		"NewLine": "Yes",
		"Des": "calculates the relative position, between 0 and 1 (exclusive), of a specified value within a supplied array.",
		"Args": [
			"array", "x", "[significance]"
		]
	},
	{
		"Fname": "PERCENTRANK.INC",
		"NewLine": "Yes",
		"Des": "calculates the relative position, between 0 and 1 (inclusive), of a specified value within a supplied array.",
		"Args": [
			"array", "x", "[significance]"
		]
	},
	{
		"Fname": "PERMUT",
		"NewLine": "Yes",
		"Des": "calculates the number of permutations of a specified number of objects from a set of objects.",
		"Args": [
			"number", "number_chosen"
		]
	},
	{
		"Fname": "PERMUTATIONA",
		"NewLine": "Yes",
		"Des": "calculates the number of permutations, with repetitions, of a specified number of objects from a set.",
		"Args": [
			"number", "number_chosen"
		]
	},
	{
		"Fname": "PHI",
		"NewLine": "No",
		"Des": "returns the value of the density function for a standard normal distribution for a supplied number.",
		"Args": [
			"x"
		]
	},
	{
		"Fname": "PI",
		"NewLine": "No",
		"Des": "returns the value of the mathematical constant π (pi), accurate to 15 digits (14 decimal places).",
		"Args": [

		]
	},
	{
		"Fname": "PMT",
		"NewLine": "Yes",
		"Des": "calculates the constant periodic payment required to pay off (or partially pay off) a loan or investment, with a constant interest rate, over a specified period.",
		"Args": [
			"rate", "nper", "pv", "[fv]", "[type]"
		]
	},
	{
		"Fname": "POISSON",
		"NewLine": "Yes",
		"Des": "calculates the Poisson Probability Mass Function or the Cumulative Poisson Probability Function for a supplied set of parameters.",
		"Args": [
			"x", "mean", "cumulative"
		]
	},
	{
		"Fname": "POISSON.DIST",
		"NewLine": "Yes",
		"Des": "calculates the Poisson Probability Mass Function or the Cumulative Poisson Probability Function for a supplied set of parameters.",
		"Args": [
			"x", "mean", "cumulative"
		]
	},
	{
		"Fname": "POWER",
		"NewLine": "Yes",
		"Des": "calculates a given number, raised to a supplied power.",
		"Args": [
			"number", "power"
		]
	},
	{
		"Fname": "PPMT",
		"NewLine": "Yes",
		"Des": "calculates the payment on the principal, during a specific period of a loan or investment that is paid in constant periodic payments, with a constant interest rate.",
		"Args": [
			"rate", "per", "nper", "pv", "[fv]", "[type]"
		]
	},
	{
		"Fname": "PRICE",
		"NewLine": "Yes",
		"Des": "calculates the price, per $100 face value of a security that pays periodic interest.",
		"Args": [
			"settlement", "maturity", "rate", "yld", "redemption", "frequency", "[basis]"
		]
	},
	{
		"Fname": "PRICEDISC",
		"NewLine": "Yes",
		"Des": "calculates the price, per $100 face value of a discounted security.",
		"Args": [
			"settlement", "maturity", "discount", "redemption", "[basis]"
		]
	},
	{
		"Fname": "PRICEMAT",
		"NewLine": "Yes",
		"Des": "calculates the price, per $100 face value of a security that pays interest at maturity.",
		"Args": [
			"settlement", "maturity", "issue", "rate", "yld", "[basis]"
		]
	},
	{
		"Fname": "PROB",
		"NewLine": "Yes",
		"Des": "Given a list of values and a corresponding list of probabilities, the Excel PROB function calculates the probability associated with a given range.",
		"Args": [
			"x_range", "prob_range", "[lower_limit]", "[upper_limit]"
		]
	},
	{
		"Fname": "PRODUCT",
		"NewLine": "Yes",
		"Des": "returns the product (multiplication) of a supplied set of numerical values.",
		"Args": [
			"number1", "[number2]", "..."
		]
	},
	{
		"Fname": "PROPER",
		"NewLine": "No",
		"Des": "converts all characters in a supplied text string to proper case (i.e. all letters that do not immediately follow another letter are set to upper case and all other characters are lower case).",
		"Args": [
			"text"
		]
	},
	{
		"Fname": "PV",
		"NewLine": "Yes",
		"Des": "calculates the Present Value of an investment, based on a series of future payments.",
		"Args": [
			"rate", "nper", "[pmt]", "[fv]", "[type]"
		]
	},
	{
		"Fname": "QUARTILE",
		"NewLine": "Yes",
		"Des": "returns a requested  quartile of a supplied range of values.",
		"Args": [
			"array", "quart"
		]
	},
	{
		"Fname": "QUARTILE.EXC",
		"NewLine": "Yes",
		"Des": " returns a requested quartile of a supplied range of values, based on a percentile range of 0 to 1 exclusive.",
		"Args": [
			"array", "quart"
		]
	},
	{
		"Fname": "QUARTILE.INC",
		"NewLine": "Yes",
		"Des": "returns a requested quartile of a supplied range of values, based on a percentile range of 0 to 1 (inclusive).",
		"Args": [
			"array", "quart"
		]
	},
	{
		"Fname": "QUOTIENT",
		"NewLine": "Yes",
		"Des": "returns the integer portion of a division between two supplied numbers.",
		"Args": [
			"numerator", "denominator"
		]
	},
	{
		"Fname": "RADIANS",
		"NewLine": "No",
		"Des": "generates a random real number between 0 and 1.",
		"Args": [
			"angle"
		]
	},
	{
		"Fname": "RAND",
		"NewLine": "No",
		"Des": "converts radians into degrees.",
		"Args": [

		]
	},
	{
		"Fname": "RANDBETWEEN",
		"NewLine": "Yes",
		"Des": "generates a random integer between two supplied integers.",
		"Args": [
			"bottom", "top"
		]
	},
	{
		"Fname": "RANK",
		"NewLine": "Yes",
		"Des": "returns the statistical rank of a given value, within a supplied array of values. If there are duplicate values in the list, these are given the same rank.",
		"Args": [
			"number", "ref", "[order]"
		]
	},
	{
		"Fname": "RANK.AVG",
		"NewLine": "Yes",
		"Des": "returns the statistical rank of a given value, within a supplied array of values. If there are duplicate values in the list, the average rank is returned.",
		"Args": [
			"number", "ref", "[order]"
		]
	},
	{
		"Fname": "RANK.EQ",
		"NewLine": "Yes",
		"Des": "returns the statistical rank of a given value, within a supplied array of values. If there are duplicate values in the list, these are given the same rank.",
		"Args": [
			"number", "ref", "[order]"
		]
	},
	{
		"Fname": "RATE",
		"NewLine": "Yes",
		"Des": "calculates the interest rate required to pay off a specified amount of a loan, or to reach a target amount on an investment, over a given period.",
		"Args": [
			"nper", "pmt", "pv", "[fv]", "[type]", "[guess]"
		]
	},
	{
		"Fname": "RECEIVED",
		"NewLine": "Yes",
		"Des": "calculates the amount received at maturity for a fully invested security.",
		"Args": [
			"settlement", "maturity", "investment", "discount", "[basis]"
		]
	},
	{
		"Fname": "REPLACE",
		"NewLine": "Yes",
		"Des": "replaces all or part of a text string with another string.",
		"Args": [
			"old_text", "start_num", "num_chars", "new_text"
		]
	},
	{
		"Fname": "REPT",
		"NewLine": "Yes",
		"Des": "returns a supplied text string, repeated a specified number of times.",
		"Args": [
			"text", "number_times"
		]
	},
	{
		"Fname": "RIGHT",
		"NewLine": "Yes",
		"Des": "returns a specified number of characters from the end of a supplied text string.",
		"Args": [
			"text", "[num_chars]"
		]
	},
	{
		"Fname": "ROMAN",
		"NewLine": "Yes",
		"Des": "converts an arabic number to Roman. I.e. for a supplied integer, the function returns a text string depicting the roman numeral form of the number.",
		"Args": [
			"number", "[form]"
		]
	},
	{
		"Fname": "ROUND",
		"NewLine": "Yes",
		"Des": "rounds a supplied number up or down, to a specified number of decimal places.",
		"Args": [
			"number", "num_digits"
		]
	},
	{
		"Fname": "ROUNDDOWN",

		"NewLine": "Yes",
		"Des": "rounds a supplied number down towards zero, to a specified number of decimal places.",
		"Args": [
			"number", "num_digits"
		]
	},
	{
		"Fname": "ROUNDUP",
		"NewLine": "Yes",
		"Des": "rounds a supplied number up, away from zero, to a specified number of decimal places.",
		"Args": [
			"number", "num_digits"
		]
	},
	{
		"Fname": "ROW",
		"NewLine": "No",
		"Des": "returns the first row number within a supplied reference or the number of the current row.",
		"Args": [
			"[reference]"
		]
	},
	{
		"Fname": "ROWS",
		"NewLine": "No",
		"Des": "takes an Excel range and returns the number of rows that are contained within the range.",
		"Args": [
			"array"
		]
	},
	{
		"Fname": "RRI",
		"NewLine": "Yes",
		"Des": "calculates the equivalent interest rate for an investment with specified present value, future value and duration.",
		"Args": [
			"nper", "pv", "fv"
		]
	},
	{
		"Fname": "RSQ",
		"NewLine": "Yes",
		"Des": "calculates the square of the Pearson Product-Moment Correlation Coefficient for two supplied sets of values.",
		"Args": [
			"known_y's", "known_x's"
		]
	},
	{
		"Fname": "SEARCH",
		"NewLine": "Yes",
		"Des": "returns the position of a specified character or sub-string within a supplied text string.",
		"Args": [
			"search_text", "within_text", "[start_num]"
		]
	},
	{
		"Fname": "SEC",
		"NewLine": "No",
		"Des": "calculates the secant of a given angle.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "SECH",
		"NewLine": "No",
		"Des": "calculates the hyperbolic secant (sech) of a supplied angle.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "SECOND",
		"NewLine": "No",
		"Des": "returns an integer representing the second component of a supplied Excel time.",
		"Args": [
			"serial_number"
		]
	},
	{
		"Fname": "SHEET",
		"NewLine": "No",
		"Des": "returns the Sheet number for a specified reference.",
		"Args": [
			"[value]"
		]
	},
	{
		"Fname": "SHEETS",
		"NewLine": "No",
		"Des": "returns the number of sheets in a supplied reference. The result includes sheets that are Visible, Hidden or Very Hidden.",
		"Args": [
			"[reference]"
		]
	},
	{
		"Fname": "SIGN",
		"NewLine": "No",
		"Des": "returns the arithmetic sign (+1, -1 or 0) of a supplied number. I.e. if the number is positive, the Sign function returns +1, if the number is negative, the function returns -1 and if the number is 0 (zero), the function returns 0.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "SIN",
		"NewLine": "No",
		"Des": "calculates the sine of a given angle.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "SINH",
		"NewLine": "No",
		"Des": "calculates the hyperbolic sine (sinh) of a supplied number.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "SKEW",
		"NewLine": "Yes",
		"Des": "calculates the skewness of the distribution of a supplied set of values.",
		"Args": [
			"number1", "[number2]", "..."
		]
	},
	{
		"Fname": "SKEW.P",
		"NewLine": "Yes",
		"Des": "calculates the skewness of the distribution of a supplied set of values.",
		"Args": [
			"number1", "[number2]", "..."
		]
	},
	{
		"Fname": "SLN",
		"NewLine": "Yes",
		"Des": "calculates the straight line depreciation of an asset for one period.",
		"Args": [
			"cost", "salvage", "life"
		]
	},
	{
		"Fname": "SLOPE",
		"NewLine": "Yes",
		"Des": "calculates the slope of the linear regression line through a supplied set of x- and y- values.",
		"Args": [
			"known_y's", "known_x's"
		]
	},
	{
		"Fname": "SMALL",
		"NewLine": "Yes",
		"Des": "returns the k'th smallest value from an array of numeric values.",
		"Args": [
			"array", "k"
		]
	},
	{
		"Fname": "SQRT",
		"NewLine": "No",
		"Des": "calculates the positive square root of a supplied number.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "SQRTPI",
		"NewLine": "No",
		"Des": "returns the square root of a supplied number multiplied by the mathematical constant, π.",
		"Args": [
			"number=SQRT"
		]
	},
	{
		"Fname": "STANDARDIZE",
		"NewLine": "Yes",
		"Des": "returns a normalized value of a distribution that is characterized by a supplied mean and standard deviation.",
		"Args": [
			"x", "mean", "standard_dev"
		]
	},
	{
		"Fname": "STDEV",
		"NewLine": "Yes",
		"Des": "calculates the sample standard deviation of a supplied set of values.",
		"Args": [
			"number1", "[number2]", "..."
		]
	},
	{
		"Fname": "STDEV",
		"NewLine": "Yes",
		"Des": "calculates the standard deviation of a supplied set of values.",
		"Args": [
			"number1", "[number2]", "..."
		]
	},
	{
		"Fname": "STDEV.P",
		"NewLine": "Yes",
		"Des": "calculates the sample standard deviation of a supplied set of values.",
		"Args": [
			"number1", "[number2]", "..."
		]
	},
	{
		"Fname": "STDEV.S",
		"NewLine": "Yes",
		"Des": "calculates the sample standard deviation of a supplied set of values.",
		"Args": [
			"number1", "[number2]", "..."
		]
	},
	{
		"Fname": "STDEVP",
		"NewLine": "Yes",
		"Des": "calculates the standard deviation of a supplied set of values.",
		"Args": [
			"number1", "[number2]", "..."
		]
	},
	{
		"Fname": "STDEVPA",
		"NewLine": "Yes",
		"Des": "calculates the standard deviation of a supplied set of values.",
		"Args": [
			"number1", "[number2]", "..."
		]
	},
	{
		"Fname": "STEYX",
		"NewLine": "Yes",
		"Des": "calculates the standard error for the line of best fit, through a supplied set of x- and y- values.",
		"Args": [
			"known_y's", "known_x's"
		]
	},
	{
		"Fname": "SUBSTITUTE",
		"NewLine": "Yes",
		"Des": "replaces one or more instances of a given text string, within an original text string.",
		"Args": [
			"text", "old_text", "new_text", "[instance_num]"
		]
	},
	{
		"Fname": "SUBTOTAL",
		"NewLine": "Yes",
		"Des": "performs a specified calculation (e.g. the sum, product, average, etc.) for a supplied set of values.",
		"Args": [
			"function_num", "ref1", "[ref2]", "..."
		]
	},
	{
		"Fname": "SUM",
		"NewLine": "Yes",
		"Des": "adds together a supplied set of numbers and returns the sum of these values.",
		"Args": [
			"number1", "[number2]", "..."
		]
	},
	{
		"Fname": "SUMIF",
		"NewLine": "Yes",
		"Des": "finds the values in a supplied array, that satisfy a given criteria, and returns the sum of the corresponding values in a second supplied array.",
		"Args": [
			"range", "criteria", "[sum_range]"
		]
	},
	{
		"Fname": "SUMIFS",
		"NewLine": "Yes",
		"Des": "finds values in one or more supplied arrays, that satisfy a set of criteria, and returns the sum of the corresponding values in a further supplied array.",
		"Args": [
			"sum_range", "criteria_range1", "criteria1", "[criteria_range2", "criteria2]", "..."
		]
	},
	{
		"Fname": "SUMPRODUCT",
		"NewLine": "Yes",
		"Des": "returns the sum of the products of the corresponding values in a set of supplied arrays.",
		"Args": [
			"array1", "[array2]", "[array3]", "..."
		]
	},
	{
		"Fname": "SUMSQ",
		"NewLine": "Yes",
		"Des": "returns the sum of squares of a supplied set of values.",
		"Args": [
			"number1", "[number2]", "..."
		]
	},
	{
		"Fname": "SWITCH",
		"NewLine": "Yes",
		"Des": "compares a number of supplied values to a supplied test expression and returns a result corresponding to the first value that matches the test expression. A default value can be supplied, to be returned if none of the supplied values match the test expression.",
		"Args": [
			"expression", " value1", " result1", " [value2", " result2]", " [value3", " result3]", "...", " [default] )"
		]
	},
	{
		"Fname": "SYD",
		"NewLine": "Yes",
		"Des": "calculates the sum-of-years digits depreciation for a specified period in the lifetime of an asset.",
		"Args": [
			"cost", "salvage", "life", "per"
		]
	},
	{
		"Fname": "T",
		"NewLine": "No",
		"Des": "tests if a supplied value is text and if so, returns the supplied text; Otherwise, the function returns an empty text string.",
		"Args": [
			"value"
		]
	},
	{
		"Fname": "T.DIST",
		"NewLine": "Yes",
		"Des": "calculates the one-tailed Student's T Distribution, which is a continuous probability distribution that is frequently used for testing hypotheses on small sample data sets.",
		"Args": [
			"x", "degrees_freedom", "cumulative"
		]
	},
	{
		"Fname": "T.DIST.2T",
		"NewLine": "Yes",
		"Des": "calculates the two-tailed Student's T Distribution, which is a continuous probability distribution that is frequently used for testing hypotheses on small sample data sets.",
		"Args": [
			"x", "degrees_freedom"
		]
	},
	{
		"Fname": "T.DIST.RT",
		"NewLine": "Yes",
		"Des": "calculates the right-tailed Student's T Distribution, which is a continuous probability distribution that is frequently used for testing hypotheses on small sample data sets.",
		"Args": [
			"x", "degrees_freedom"
		]
	},
	{
		"Fname": "T.INV",
		"NewLine": "Yes",
		"Des": "calculates the left-tailed inverse of the Student's T Distribution, which is a continuous probability distribution that is frequently used for testing hypotheses on small sample data sets.",
		"Args": [
			"probability", "degrees_freedom"
		]
	},
	{
		"Fname": "T.INV.2T",
		"NewLine": "Yes",
		"Des": "calculates the inverse of the two-tailed Student's T Distribution, which is a continuous probability distribution that is frequently used for testing hypotheses on small sample data sets.",
		"Args": [
			"probability", "degrees_freedom"
		]
	},
	{
		"Fname": "T.TEST",
		"NewLine": "Yes",
		"Des": "calculates the probability associated with the Student's T Test, which is commonly used for identifying whether two data sets are likely to have come from the same two underlying populations with the same mean.",
		"Args": [
			"array1", "array2", "tails", "type"
		]
	},
	{
		"Fname": "TAN",
		"NewLine": "No",
		"Des": "calculates the tangent of a given angle.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "TANH",
		"NewLine": "No",
		"Des": "calculates the hyperbolic tangent (tanh) of a supplied number.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "TBILLEQ",
		"NewLine": "Yes",
		"Des": "calculates the bond-equivalent yield for a Treasury Bill.",
		"Args": [
			"settlement", "maturity", "discount"
		]
	},
	{
		"Fname": "TBILLPRICE",
		"NewLine": "Yes",
		"Des": "returns the price, per $100 face value, of a Treasury Bill.",
		"Args": [
			"settlement", "maturity", "discount"
		]
	},
	{
		"Fname": "TBILLYIELD",
		"NewLine": "Yes",
		"Des": "calculates the yield of a Treasury Bill.",
		"Args": [
			"settlement", "maturity", "pr"
		]
	},
	{
		"Fname": "TDIST",
		"NewLine": "Yes",
		"Des": "calculates the Student's T Distribution, which is a continuous probability distribution that is frequently used for testing hypotheses on small sample data sets.",
		"Args": [
			"x", "degrees_freedom", "tails"
		]
	},
	{
		"Fname": "TEXT",
		"NewLine": "Yes",
		"Des": "converts a supplied numeric value into text, in a user-specified format.",
		"Args": [
			"value", "format_text"
		]
	},
	{
		"Fname": "TEXTJOIN",
		"NewLine": "Yes",
		"Des": "joins together a series of supplied text strings into one combined text string. The user can specify a delimiter to add between the individual text items, if required.",
		"Args": [
			"[delimiter]", "[ignore_empty]", "text1", "[text2]", "..."
		]
	},
	{
		"Fname": "TIME",
		"NewLine": "Yes",
		"Des": "accepts three integer arguments representing hours, minutes and seconds, and returns an Excel time.",
		"Args": [
			"hour", "minute", "second"
		]
	},
	{
		"Fname": "TIMEVALUE",
		"NewLine": "No",
		"Des": "converts a text representation of a time, into an Excel time.",
		"Args": [
			"time_text"
		]
	},
	{
		"Fname": "TINV",
		"NewLine": "Yes",
		"Des": "calculates the inverse of the two-tailed Student's T Distribution, which is a continuous probability distribution that is frequently used for testing hypotheses on small sample data sets.",
		"Args": [
			"probability", "degrees_freedom"
		]
	},
	{
		"Fname": "TODAY",
		"NewLine": "No",
		"Des": "returns the current date. The function has no arguments and therefore, the syntax of the function is simply:",
		"Args": [

		]
	},
	{
		"Fname": "TRANSPOSE",
		"NewLine": "No",
		"Des": "transposes an array of cells (i.e. the function copies a horizontal range of cells into a vertical range and vice versa).",
		"Args": [
			"array"
		]
	},
	{
		"Fname": "TREND",
		"NewLine": "Yes",
		"Des": "calculates the linear trend line through a given set of y-values and (optionally), a given set of x-values.",
		"Args": [
			"known_y's", "[known_x's]", "[new_x's]", "[const]"
		]
	},
	{
		"Fname": "TRIM",
		"NewLine": "No",
		"Des": "removes extra spaces (i.e. all spaces except for single spaces between words or characters) from a supplied text string.",
		"Args": [
			"text"
		]
	},
	{
		"Fname": "TRIMMEAN",
		"NewLine": "Yes",
		"Des": "calculates the trimmed mean (or truncated mean) of a supplied set of values.",
		"Args": [
			"array", "percent"
		]
	},
	{
		"Fname": "TRUNC",
		"NewLine": "Yes",
		"Des": "truncates a supplied number to a specified number of decimal places.",
		"Args": [
			"number", "[num_digits]"
		]
	},
	{
		"Fname": "TTEST",
		"NewLine": "Yes",
		"Des": "calculates the probability associated with the Student's T Test, which is commonly used for identifying whether two data sets are likely to have come from the same two underlying populations with the same mean.",
		"Args": [
			"array1", "array2", "tails", "type"
		]
	},
	{
		"Fname": "TYPE",
		"NewLine": "No",
		"Des": "For a supplied value, the Excel TYPE function returns an integer that represents the value's data type.",
		"Args": [
			"value"
		]
	},
	{
		"Fname": "UNICHAR",
		"NewLine": "No",
		"Des": "returns the Unicode character relating to a supplied number.",
		"Args": [
			"number"
		]
	},
	{
		"Fname": "UNICODE",
		"NewLine": "No",
		"Des": "returns the code point for the first character of a supplied text string.",
		"Args": [
			"text"
		]
	},
	{
		"Fname": "UPPER",
		"NewLine": "No",
		"Des": "converts all characters in a supplied text string to upper case.",
		"Args": [
			"text"
		]
	},
	{
		"Fname": "VALUE",
		"NewLine": "No",
		"Des": "converts a text string into a numeric value.",
		"Args": [
			"text"
		]
	},
	{
		"Fname": "VAR",
		"NewLine": "Yes",
		"Des": "returns the sample variance of a supplied set of values.",
		"Args": [
			"number1", "[number2]", "..."
		]
	},
	{
		"Fname": "VAR.P",
		"NewLine": "Yes",
		"Des": "returns the Variance of a given set of values.",
		"Args": [
			"number1", "[number2]", "..."
		]
	},
	{
		"Fname": "VAR.S",
		"NewLine": "Yes",
		"Des": "calculates the sample variance of a supplied set of values.",
		"Args": [
			"number1", "[number2]", "..."
		]
	},
	{
		"Fname": "VARA",
		"NewLine": "Yes",
		"Des": "calculates the sample variance of a supplied set of values.",
		"Args": [
			"number1", "[number2]", "..."
		]
	},
	{
		"Fname": "VARP",
		"NewLine": "Yes",
		"Des": "returns the Variance of a given set of values.",
		"Args": [
			"number1", "[number2]", "..."
		]
	},
	{
		"Fname": "VARPA",
		"NewLine": "Yes",
		"Des": "returns the Variance of a given set of values.",
		"Args": [
			"number1", "[number2]", "..."
		]
	},
	{
		"Fname": "VDB",
		"NewLine": "Yes",
		"Des": "calculates the depreciation of an asset, using the Double Declining Balance Method, or another specified depreciation rate, for a specified period (including partial periods).",
		"Args": [
			"cost", "salvage", "life", "start_period", "end_period", "[factor]", "[no_switch]"
		]
	},
	{
		"Fname": "VLOOKUP",
		"NewLine": "Yes",
		"Des": "looks up a given value in the left-hand column of a data array (or table), and returns the corresponding value from another column of the array.",
		"Args": [
			"lookup_value", "table_array", "col_index_num", "[range_lookup]"
		]
	},
	{
		"Fname": "WEEKDAY",
		"NewLine": "Yes",
		"Des": "returns an integer representing the day of the week for a supplied date.",
		"Args": [
			"serial_number", "[return_type]"
		]
	},
	{
		"Fname": "WEEKNUM",
		"NewLine": "Yes",
		"Des": "For a given date, the Excel Weeknum function returns an integer representing the week number (from 1 to 53) of the year.",
		"Args": [
			"serial_number", "[return_type]"
		]
	},
	{
		"Fname": "WEIBULL",
		"NewLine": "Yes",
		"Des": "calculates the Weibull Probability Density Function or the Weibull Cumulative Distribution Function for a supplied set of parameters.",
		"Args": [
			"x", "alpha", "beta", "cumulative"
		]
	},
	{
		"Fname": "WEIBULL.DIST",
		"NewLine": "Yes",
		"Des": "calculates the Weibull Probability Density Function or the Weibull Cumulative Distribution Function for a supplied set of parameters.",
		"Args": [
			"x", "alpha", "beta", "cumulative"
		]
	},
	{
		"Fname": "WORKDAY",
		"NewLine": "Yes",
		"Des": "returns a date that is a supplied number of working days (excluding weekends and holidays) ahead of a given start date.",
		"Args": [
			"start_date", "days", "[holidays]"
		]
	},
	{
		"Fname": "WORKDAY.INTL",
		"NewLine": "Yes",
		"Des": "returns a date that is a supplied number of working days (excluding weekends and holidays) ahead of a given start date. The function allows the user to specify which days of the week are counted as weekends.",
		"Args": [
			"start_date", "days", "[weekend]", "[holidays]"
		]
	},
	{
		"Fname": "XIRR",
		"NewLine": "Yes",
		"Des": "returns the Internal Rate of Return for a supplied series of cash flows (i.e. a set of values, which includes an initial investment value and a series of net income values) occurring at a series of supplied dates.",
		"Args": [
			"values", "dates", "[guess]"
		]
	},
	{
		"Fname": "XNPV",
		"NewLine": "Yes",
		"Des": "calculates the Net Present Value for a schedule of cash flows that is not necessarily periodic.",
		"Args": [
			"rate", "values", "dates"
		]
	},
	{
		"Fname": "XOR",
		"NewLine": "Yes",
		"Des": "returns the Exclusive Or logical operation for one or more supplied conditions.",
		"Args": [
			"logical_test1", "[logical_test2]", "..."
		]
	},
	{
		"Fname": "YEAR",
		"NewLine": "No",
		"Des": "returns an integer representing the year of a supplied date.",
		"Args": [
			"serial_number"
		]
	},
	{
		"Fname": "YEARFRAC",
		"NewLine": "Yes",
		"Des": "returns the fraction of a year that is represented by the number of whole days between two supplied dates.",
		"Args": [
			"start_date", "end_date", "[basis]"
		]
	},
	{
		"Fname": "YIELD",
		"NewLine": "Yes",
		"Des": "calculates the Yield of a security that pays periodic interest.",
		"Args": [
			"settlement", "maturity", "rate", "pr", "redemption", "frequency", "[basis]"
		]
	},
	{
		"Fname": "YIELDDISC",
		"NewLine": "Yes",
		"Des": "calculates the annual yield of a discounted security.",
		"Args": [
			"settlement", "maturity", "pr", "redemption", "[basis]"
		]
	},
	{
		"Fname": "YIELDMAT",
		"NewLine": "Yes",
		"Des": "calculates the annual yield of a security that pays interest at maturity.",
		"Args": [
			"settlement", "maturity", "issue", "rate", "pr", "[basis]"
		]
	},
	{
		"Fname": "Z.TEST",
		"NewLine": "Yes",
		"Des": "For a supplied hypothesized sample mean and a supplied set of values, the Excel Z.Test function calculates the one-tailed probability value of the Z-Test.",
		"Args": [
			"array", "x", "[sigma]"
		]
	},
	{
		"Fname": "ZTEST",
		"NewLine": "Yes",
		"Des": "For a supplied hypothesized sample mean and a supplied set of values, the Excel Ztest function calculates the one-tailed probability value of the Z-Test.",
		"Args": [
			"array", "x", "[sigma]"
		]
	}


];