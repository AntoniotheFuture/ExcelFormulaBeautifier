Iterations
---

## 1.4 Version

- Optimized code structure and performance
- Fixed known bugs
- Enhanced support for complex formulas

## 2.0.0 Engineering Version

### Core Objectives
- Extract core functionality into a JS library with standard JS engineering management
- Support multiple packaging formats to meet different usage scenarios

### Specific Tasks
- **Engineering Configuration**:
  - Initialize npm project, configure package.json
  - Integrate Webpack or Rollup bundling tools
  - Configure ESLint and Prettier code standards
- **Packaging Support**:
  - Support packaging as npm module for other projects
  - Support packaging as JS file directly importable by browsers
  - Support Tree Shaking to reduce bundle size
- **Code Optimization**:
  - Optimize JS syntax using modern ES6+ syntax
  - Add necessary comments to improve code readability
  - Refactor core logic to improve performance and maintainability
- **Development Experience**:
  - Implement local startup debugging functionality
  - Configure hot reload to improve development efficiency
- **Documentation and Examples**:
  - Implement example page showcasing tool usage
  - Improve API documentation
  - Split readme.md into Chinese and English versions
  - Add detailed iteration records to readmes
- **Quality Assurance**:
  - Increase test coverage to ensure tool correctness
  - Configure CI/CD pipeline for automated testing
- **Deployment Integration**:
  - Add GitHub pipeline packaging functionality for automatic packaging on push
  - Publish to npm registry

### Priority
1. Engineering configuration and core code optimization
2. Packaging support and test cases
3. Documentation and example page
4. CI/CD integration and publishing

## 2.0.1 Rewrite Core Implementation & Optimize Code Structure

### Core Objectives
- Adopt AST architecture to improve code maintainability and extensibility
- Design user-friendly chain API to enhance developer experience
- Use mature i18n solution to reduce maintenance costs

### Specific Tasks
- **AST Design**:
  - Design unified AST node structure (FormulaNode)
  - Support node types: function, operator, reference, literal
  - Store metadata like level, argument position
- **Code Structure Refactoring**:
  ```
  src/
  ├── core/
  │   ├── Parser.js       # Parser → generates AST
  │   ├── Formatter.js    # Formatter → generates formatted string from AST
  │   ├── Explainer.js    # Explainer → generates explanations from AST
  │   └── Node.js         # AST node definition
  ├── i18n/
  │   ├── index.js        # i18next configuration
  │   └── functions/     # Function translation resources
  │       ├── en.js
  │       └── zh-CN.js
  ├── ExcelFormulaBeautifier.js
  └── index.js
  ```
- **Chain API Design**:
  ```javascript
  const result = beautifier
    .parse('=IF(A1>10,"Yes","No")')  // Returns FormulaNode
    .format({ indent: '  ', maxDepth: 0 })  // Returns formatted string
    .explain('zh-CN');  // Returns explanation object

  result.toString();      // Formatted string
  result.toArray();       // Array format
  result.toExplanation(); // Explanation details
  ```
- **i18n Implementation**:
  - Use i18next instead of manual file merging
  - Support dynamic language switching
  - Support plurals and formatting
- **Edge Case Handling**:
  - Invalid formulas: throw meaningful errors during AST construction
  - Circular references: detect and mark
  - Named ranges: support custom names like `MyRange`
  - Array formulas: support `{=...}` syntax

### Priority
1. AST design and Parser implementation
2. Chain API design
3. i18n configuration and resource files
4. Formatter and Explainer refactoring
5. Test coverage expansion