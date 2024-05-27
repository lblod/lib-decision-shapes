# lib-decisions-shapes
NPM library to retrieve shapes of decisions and examples

# Install

```
npm install lib-decision-shapes
```

# Usage

```
import { getHTMLExampleOfDocumentType, getShapeOfDocumentType } from 'lib-decision-shapes';

const shape = getShapeOfDocumentType('notulen');
const example = getHTMLExampleOfDocumentType('notulen');
```