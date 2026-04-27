迭代
---

## 1.4 版本

- 优化代码结构和性能
- 修复已知bug
- 增强对复杂公式的支持

## 2.0.0 工程化版本

### 核心目标
- 核心抽取成JS类库，使用标准JS工程化管理
- 支持多种打包格式，满足不同使用场景

### 具体任务
- **工程化配置**：
  - 初始化npm项目，配置package.json
  - 集成Webpack或Rollup打包工具
  - 配置ESLint和Prettier代码规范
- **打包支持**：
  - 支持打包成npm模块，供其他项目使用
  - 支持打包成浏览器可直接引入的JS文件
  - 支持Tree Shaking，减小打包体积
- **代码优化**：
  - 优化JS写法，使用现代ES6+语法
  - 补充必要注释，提高代码可读性
  - 重构核心逻辑，提高性能和可维护性
- **开发体验**：
  - 实现本地启动调试功能
  - 配置热重载，提高开发效率
- **文档和示例**：
  - 实现示例页面，展示工具的使用方法
  - 完善API文档
  - readme.md 拆分中文版本
  - readmes 添加详细的迭代记录
- **质量保证**：
  - 增加测试用例，确保工具的正确性
  - 配置CI/CD流水线，实现自动化测试
- **部署集成**：
  - 添加GitHub流水线打包功能，实现推送自动打包
  - 发布到npm仓库

### 优先级
1. 工程化配置和核心代码优化
2. 打包支持和测试用例
3. 文档和示例页面
4. CI/CD集成和发布

## 2.0.1 重写核心实现&优化代码结构

### 核心目标
- 采用语法树架构，提升代码可维护性和扩展性
- 设计友好的链式 API，提升开发者体验
- 采用成熟的 i18n 方案，减少维护成本

### 具体任务
- **语法树设计**：
  - 设计统一的 AST 节点结构 (FormulaNode)
  - 支持节点类型：function、operator、reference、literal
  - 存储层级、参数位置等元数据
- **代码结构重构**：
  ```
  src/
  ├── core/
  │   ├── Parser.js       # 语法解析器 → 生成语法树
  │   ├── Formatter.js    # 格式化器 → 从语法树生成格式化字符串
  │   ├── Explainer.js    # 解释器 → 从语法树生成解释
  │   └── Node.js         # AST 节点定义
  ├── i18n/
  │   ├── index.js        # i18next 配置
  │   └── functions/     # 函数翻译资源
  │       ├── en.js
  │       └── zh-CN.js
  ├── ExcelFormulaBeautifier.js
  └── index.js
  ```
- **链式 API 设计**：
  ```javascript
  const result = beautifier
    .parse('=IF(A1>10,"Yes","No")')  // 返回 FormulaNode
    .format({ indent: '  ', maxDepth: 0 })  // 返回格式化字符串
    .explain('zh-CN');  // 返回解释对象

  result.toString();      // 格式化字符串
  result.toArray();       // 数组形式
  result.toExplanation(); // 解释详情
  ```
- **i18n 实现**：
  - 采用 i18next 方案替代手动合并
  - 支持动态语言切换
  - 支持复数和格式化
- **边界情况处理**：
  - 非法公式：语法树构建时抛出有意义的错误
  - 循环引用：检测并标记
  - 命名范围：`MyRange` 等自定义名称支持
  - 数组公式：`{=...}` 语法支持

### 优先级
1. 语法树设计与 Parser 实现
2. 链式 API 设计
3. i18n 配置与资源文件
4. Formatter 和 Explainer 重构
5. 测试用例补充