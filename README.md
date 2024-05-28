# lib-decisions-shapes
NPM library to retrieve shapes of decisions and examples

# Install

```
npm install lib-decision-shapes
```

# Usage

```
const { getHTMLExampleOfDocumentType, getShapeOfDocumentType } = require('lib-decision-shapes');

const shape = getShapeOfDocumentType('notulen');
const example = getHTMLExampleOfDocumentType('notulen');
```