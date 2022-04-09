# ExcelFormulaBeautifier Excel公式格式化/美化

Excel Formula Beautifier,make Excel formulas more easy to read.

Excel公式格式化/美化,将Excel公式转为易读的排版。

## Why? 起因

When we are writing a complex formula in an Excel Cell we have to face a difficulty,that is,the formula is too hard to read and it will take a lot of time for your co-worker to understand your formula,so I am going to create a way to make this thing more easier,inspired by the some SQL Beautifier Tools,I decided to develop a way to beautif Excel formula,which can easily access by webpage.

我们在编写Excel公式，特别是复杂的，带有多层if嵌套的公式，往往会显得让人难以阅读，我希望通过开发一个网页版的Excel公式格式化/美化工具来帮助大家更好地理解您或您同事写的Excel公式。

## Demo 示例

[https://t.nonemin.com/excelformula](https://t.nonemin.com/excelformula)

 

## Usage 使用

The web page can be deployed to your local area network and access via shared folder,to do so,just download the html and js file into the shared folder,then use your browser to open the html file.

本工具可以部署到您的内网中使用：下载html和js文件到内网中的共享文件夹，然后用浏览器打开html文件。

### 调用方式:JS
1. 新建一个ExcelFormulaBeautifier 对象
2. 赋值参数：deep:0, //最深展开层次
3. 调用其format 函数，
4. 调用getResultString 或 getResultArray 获取分行结果
5. 调用 explain 函数进行解释。
6. 调用 getExplainsString 或 getExplainsArr 获取解释结果

## Notice 说明

The complete runnable project has been released as a [release](https://github.com/AntoniotheFuture/ExcelFormulaBeautifier/releases)

可运行的完整项目已经发布为 [Release](https://github.com/AntoniotheFuture/ExcelFormulaBeautifier/releases) 

## 版本
- 1.0：初始版本
- 1.1：
  - 重构成JS对象
  - 优化JS写法
  - 添加函数使用说明
  - 示例页面使用Bootstrap V3构造

## LICENSE

This project is under GPL-3.0 License