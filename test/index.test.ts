import { getHTMLExampleOfDocumentType, getShapeOfDocumentType } from '../src';

describe('I want the tool to return a shape per document type (notulen, besluitenlijst, agenda)', () => {
    test('retrieving document type Notulen returns expected SHACL', async () => {
        const DOCUMENT_TYPE = 'Notulen';
        const expected: string = require('../src/shapes/notulen.js');
        const actual: string = getShapeOfDocumentType(DOCUMENT_TYPE);
  
        expect(actual).toBe(expected);
        expect(typeof actual).toBe('string');
    });

    test('retrieving document type Besluitenlijst returns expected SHACL', async () => {
        const DOCUMENT_TYPE = 'Besluitenlijst';
        const expected = require('../src/shapes/decision-list.js');
        const actual = getShapeOfDocumentType(DOCUMENT_TYPE);
  
        expect(actual).toBe(expected);
    });

    test('retrieving document type Agenda returns expected SHACL', async () => {
        const DOCUMENT_TYPE = 'Agenda';
        const expected = require('../src/shapes/basic-agenda.js');
        const actual = getShapeOfDocumentType(DOCUMENT_TYPE);
  
        expect(actual).toBe(expected);
    });
});

describe('I want the tool to return an HTML example per document type (notulen, besluitenlijst, agenda)', () => {
    test('retrieving document type Notulen returns expected example', async () => {
        const DOCUMENT_TYPE = 'Notulen';
        const expected = require('../src/examples/notulen.js');
        const actual = getHTMLExampleOfDocumentType(DOCUMENT_TYPE);
  
        expect(actual).toBe(expected);
    });

    test('retrieving document type Besluitenlijst returns expected example', async () => {
        const DOCUMENT_TYPE = 'Besluitenlijst';
        const expected = require('../src/examples/decision-list.js');
        const actual = getHTMLExampleOfDocumentType(DOCUMENT_TYPE);
  
        expect(actual).toBe(expected);
    });

    test('retrieving document type Agenda returns expected example', async () => {
        const DOCUMENT_TYPE = 'Agenda';
        const expected = require('../src/examples/basic-agenda.js');
        const actual = getHTMLExampleOfDocumentType(DOCUMENT_TYPE);
  
        expect(actual).toBe(expected);
    });
});