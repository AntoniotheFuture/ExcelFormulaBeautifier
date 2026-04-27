# ExcelFormulaBeautifier

[English](./README.md) | [中文](./README_zh-CN.md)

Excel Formula Beautifier - makes Excel formulas easy to read.

## Example:

```excel
=IFERROR(SUMIFS(D:D,E:E,1,F:F,"Apple") + 1,IF(3 * A1 > 10,20,100))
↓
=IFERROR(
    SUMIFS(
        D:D,
        E:E,
        1,
        F:F,
        "Apple"
    )+1,
    IF(
        3*A1>10,
        20,
        100
    )
  )
```

## Why?

When writing a complex formula in an Excel cell, it can be difficult to read and understand. Your co-workers may need a lot of time to decipher your formula. Inspired by SQL Beautifier Tools, I decided to develop a way to beautify Excel formulas that can be easily accessed via a web page.

## Demo

[https://antoniothefuture.github.io/ExcelFormulaBeautifier-demo.github.io/](https://antoniothefuture.github.io/ExcelFormulaBeautifier-demo.github.io/)

## Video Tutorial

[https://www.bilibili.com/video/BV1s14y1p7m6/](https://www.bilibili.com/video/BV1s14y1p7m6/)

## Installation

```bash
npm install
```

## Build

```bash
# Development build
npm run build:dev

# Production build
npm run build
```

## Usage

### Basic Usage

```javascript
import ExcelFormulaBeautifier from './src/ExcelFormulaBeautifier.js';
import ExFunction from './src/ExFunctions.js';

// Create instance with dependency injection
const beautifier = new ExcelFormulaBeautifier(ExFunction);

// Format a formula
beautifier.format('=IFERROR(SUMIFS(D:D,E:E,1,F:F,"Apple")+1,IF(3*A1>10,20,100))');

// Get formatted result as string
console.log(beautifier.getResultString());

// Get formatted result as array
console.log(beautifier.getResultArray());
```

### Browser Usage

```html
<script src="dist/excel-formula-beautifier.js"></script>
<script>
  // Use global constructor
  const beautifier = new ExcelFormulaBeautifier();
  
  // Or use pre-configured instance
  // const beautifier = ExcelFormulaBeautifierInstance;
  
  beautifier.format('=SUM(A1:A10)');
  console.log(beautifier.getResultString());
</script>
```

## API Documentation

### Constructor

```javascript
new ExcelFormulaBeautifier(exFunctions)
```

**Parameters:**
- `exFunctions` (Array): Optional. Array of Excel function definitions. Default: `[]`

### Methods

#### `format(formula)`
Format an Excel formula.

**Parameters:**
- `formula` (String): The Excel formula to format (must start with `=`)

**Example:**
```javascript
beautifier.format('=IF(A1>10, "Yes", "No")');
```

#### `getResultString()`
Get formatted result as a string.

**Returns:** String - Formatted formula

**Example:**
```javascript
beautifier.format('=SUM(A1:A10)');
console.log(beautifier.getResultString());
// Output: =SUM(
//     A1:A10
//   )
```

#### `getResultArray()`
Get formatted result as an array of lines.

**Returns:** Array - Array of formatted lines

**Example:**
```javascript
beautifier.format('=SUM(A1:A10)');
console.log(beautifier.getResultArray());
// Output: ['=SUM(', '    A1:A10', '  )']
```

#### `explain()`
Generate explanations for the formatted formula.

**Note:** Must be called after `format()`.

**Example:**
```javascript
beautifier.format('=SUM(A1:A10)');
beautifier.explain();
```

#### `getExplainsString()`
Get explanations as a string.

**Returns:** String - Formatted explanation

**Example:**
```javascript
beautifier.format('=SUM(A1:A10)');
beautifier.explain();
console.log(beautifier.getExplainsString());
```

#### `getExplainsArr()`
Get explanations as an array.

**Returns:** Array - Array of explanation objects

**Example:**
```javascript
beautifier.format('=SUM(A1:A10)');
beautifier.explain();
console.log(beautifier.getExplainsArr());
```

#### `getErrorArr()`
Get error information for invalid formulas.

**Returns:** Array - Array of error codes

**Example:**
```javascript
beautifier.format('=IF(A1>10(1)'); // Invalid formula
console.log(beautifier.getErrorArr());
// Output: ['102'] (bracket mismatch)
```

#### `getUsedFunctionArr()`
Get information about functions used in the formula.

**Returns:** Array - Array of used function information

**Example:**
```javascript
beautifier.format('=SUM(A1:A10)');
console.log(beautifier.getUsedFunctionArr());
// Output: [{ index: 11, function: {...}, rows: [0] }]
```

### Configuration Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `tabs` | String | `'  '` | Indentation string |
| `lineBreaker` | String | `'\n'` | Line break character |
| `space` | String | `' '` | Space character |
| `maxDepth` | Number | `0` | Maximum nesting depth (0 = unlimited) |
| `stringPlaceholder` | String | `'_String_'` | Placeholder for extracted strings |

**Example:**
```javascript
const beautifier = new ExcelFormulaBeautifier(ExFunction);
beautifier.tabs = '\t'; // Use tabs instead of spaces
beautifier.maxDepth = 2; // Limit nesting to 2 levels
beautifier.format('=IF(A1>10,SUM(B1:B10),0)');
```

### Error Codes

| Code | Description |
|------|-------------|
| 100 | ExFunctions not found or incomplete |
| 101 | Double quotes count should be even |
| 102 | Brackets count should be balanced |
| 103 | Invalid comma position |
| 105 | Too many arguments |

## Run Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

## Code Quality

```bash
# Lint code
npm run lint

# Fix lint issues
npm run lint:fix

# Format code with Prettier
npm run format
```

## Notice

The complete runnable project has been released as a [release](https://github.com/AntoniotheFuture/ExcelFormulaBeautifier/releases)

## Version History

- **1.0**: Initial release
- **1.1**:
  - Refactored to JS object
  - Optimized JS code
  - Added function descriptions
  - Sample page built with Bootstrap V3
- **1.2**:
  - Added support for complex references
- **2.0.0**:
  - Engineering configuration (Webpack, ESLint, Prettier)
  - Core code optimization (ES6 Class refactoring)
  - Jest unit tests
  - Dependency injection pattern
  - GitHub Actions CI/CD

## Next Steps

- npm package publishing
- Add support for custom functions
- Add more Excel functions

## License

This project is under GPL-3.0 License