# ExcelFormulaBeautifier Excel Formula Beautifier

[English](./README.md) | [中文](./README_zh-CN.md)

Excel Formula Beautifier - makes Excel formulas easy to read.

## Example:

``` Excel
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

## Usage

The web page can be deployed to your local area network and accessed via shared folder. Simply download the html and js files into the shared folder, then open the html file in your browser.

### JavaScript API
1. Create a new ExcelFormulaBeautifier object
2. Set parameters: deep:0 (maximum expansion depth)
3. Call the format function
4. Call getResultString or getResultArray to get formatted results
5. Call explain function to get explanations
6. Call getExplainsString or getExplainsArr to get explanation results

### npm Package (Coming Soon)
```bash
# npm install excel-formula-beautifier  # Coming soon
```

```javascript
// import ExcelFormulaBeautifier from 'excel-formula-beautifier';  // Coming soon

const beautifier = new ExcelFormulaBeautifier();
beautifier.format('=IFERROR(SUMIFS(D:D,E:E,1,F:F,"Apple")+1,IF(3*A1>10,20,100))');
console.log(beautifier.getResultString());
```

## Run Tests

```bash
npm test
```

## Notice

The complete runnable project has been released as a [release](https://github.com/AntoniotheFuture/ExcelFormulaBeautifier/releases)

## Version History
- 1.0: Initial release
- 1.1:
  - Refactored to JS object
  - Optimized JS code
  - Added function descriptions
  - Sample page built with Bootstrap V3
- 1.2
  - Added support for complex references
- 2.0.0
  - Engineering configuration (Webpack, ESLint, Prettier)
  - Core code optimization (ES6 Class refactoring)
  - Jest unit tests

## Next Steps
- npm package publishing
- Add support for custom functions

## License

This project is under GPL-3.0 License