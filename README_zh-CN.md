# ExcelFormulaBeautifier Excel公式格式化/美化

[English](./README.md) | 中文

Excel Formula Beautifier,让Excel公式更易于阅读。

Excel公式格式化/美化,将Excel公式转为易读的排版。

## 示例：

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

## 起因

当我们在Excel单元格中编写复杂的公式时，往往会面临一个困难，那就是公式太难阅读了，您的同事需要花费大量时间才能理解您的公式。因此，我决定开发一种方法让Excel公式格式化/美化变得更容易，通过网页轻松访问。

## 示例

[https://antoniothefuture.github.io/ExcelFormulaBeautifier-demo.github.io/](https://antoniothefuture.github.io/ExcelFormulaBeautifier-demo.github.io/)

## 视频演示

[https://www.bilibili.com/video/BV1s14y1p7m6/](https://www.bilibili.com/video/BV1s14y1p7m6/)

## 使用方法

本工具可以部署到您的内网中使用：下载html和js文件到内网中的共享文件夹，然后用浏览器打开html文件。

### JavaScript 调用方式
1. 新建一个 ExcelFormulaBeautifier 对象
2. 赋值参数：deep:0（最深展开层次）
3. 调用其 format 函数
4. 调用 getResultString 或 getResultArray 获取分行结果
5. 调用 explain 函数进行解释
6. 调用 getExplainsString 或 getExplainsArr 获取解释结果

### npm 包使用
```bash
npm install excel-formula-beautifier
```

```javascript
import ExcelFormulaBeautifier from 'excel-formula-beautifier';

const beautifier = new ExcelFormulaBeautifier();
beautifier.format('=IFERROR(SUMIFS(D:D,E:E,1,F:F,"Apple")+1,IF(3*A1>10,20,100))');
console.log(beautifier.getResultString());
```

## 运行测试

```bash
npm test
```

## 说明

完整的可运行项目已发布为 [Release](https://github.com/AntoniotheFuture/ExcelFormulaBeautifier/releases)

## 版本历史
- 1.0：初始版本
- 1.1：
  - 重构成JS对象
  - 优化JS写法
  - 添加函数使用说明
  - 示例页面使用Bootstrap V3构造
- 1.2
  - 增加对复杂引用的支持
- 2.0.0
  - 工程化配置（Webpack、ESLint、Prettier）
  - 核心代码优化（ES6 Class重构）
  - npm 包发布支持
  - Jest 单元测试

## 下一步计划
- 增加对自定义函数的支持

## 开源协议

本项目基于 GPL-3.0 开源协议