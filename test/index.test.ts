import { getHTMLExampleOfDocumentType, getShapeOfDocumentType } from '../src';

import { basicAgendaShape } from '../src/shapes/basic-agenda';
import { decisionListShape } from '../src/shapes/decision-list';
import { notulenShape } from '../src/shapes/notulen';

import { basicAgendaExample } from '../src/examples/basic-agenda';
import { decisionListExample } from '../src/examples/decision-list';
import { notulenExample } from '../src/examples/notulen';

describe('I want the tool to return a shape per document type (notulen, besluitenlijst, agenda)', () => {
    test('retrieving document type Notulen returns expected SHACL', async () => {
        const DOCUMENT_TYPE = 'Notulen';
        const expected: string = notulenShape;
        const actual: string = getShapeOfDocumentType(DOCUMENT_TYPE);
  
        expect(actual).toBe(expected);
        expect(typeof actual).toBe('string');
    });

    test('retrieving document type Besluitenlijst returns expected SHACL', async () => {
        const DOCUMENT_TYPE = 'Besluitenlijst';
        const expected = decisionListShape;
        const actual = getShapeOfDocumentType(DOCUMENT_TYPE);
  
        expect(actual).toBe(expected);
    });

    test('retrieving document type Agenda returns expected SHACL', async () => {
        const DOCUMENT_TYPE = 'Agenda';
        const expected = basicAgendaShape;
        const actual = getShapeOfDocumentType(DOCUMENT_TYPE);
  
        expect(actual).toBe(expected);
    });
});

describe('I want the tool to return an HTML example per document type (notulen, besluitenlijst, agenda)', () => {
    test('retrieving document type Notulen returns expected example', async () => {
        const DOCUMENT_TYPE = 'Notulen';
        const expected = notulenExample;
        const actual = getHTMLExampleOfDocumentType(DOCUMENT_TYPE);
  
        expect(actual).toBe(expected);
    });

    test('retrieving document type Besluitenlijst returns expected example', async () => {
        const DOCUMENT_TYPE = 'Besluitenlijst';
        const expected = decisionListExample;
        const actual = getHTMLExampleOfDocumentType(DOCUMENT_TYPE);
  
        expect(actual).toBe(expected);
    });

    test('retrieving document type Agenda returns expected example', async () => {
        const DOCUMENT_TYPE = 'Agenda';
        const expected = basicAgendaExample;
        const actual = getHTMLExampleOfDocumentType(DOCUMENT_TYPE);
  
        expect(actual).toBe(expected);
    });
});