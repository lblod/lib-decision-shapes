import * as fs from 'fs';
import { getHTMLExampleOfDocumentType, getShapeOfDocumentType } from '../src';

describe('I want the tool to return a shape per document type (notulen, besluitenlijst, agenda)', () => {
    test('retrieving document type Notulen returns expected SHACL', async () => {
        const DOCUMENT_TYPE = 'Notulen';
        const expected = fs.readFileSync('./shapes/notulen.ttl').toString();
        const actual = getShapeOfDocumentType(DOCUMENT_TYPE);
  
        expect(actual).toBe(expected);
    });

    test('retrieving document type Besluitenlijst returns expected SHACL', async () => {
        const DOCUMENT_TYPE = 'Besluitenlijst';
        const expected = fs.readFileSync('./shapes/decision-list.ttl').toString();
        const actual = getShapeOfDocumentType(DOCUMENT_TYPE);
  
        expect(actual).toBe(expected);
    });

    test('retrieving document type Agenda returns expected SHACL', async () => {
        const DOCUMENT_TYPE = 'Agenda';
        const expected = fs.readFileSync('./shapes/basic-agenda.ttl').toString();
        const actual = getShapeOfDocumentType(DOCUMENT_TYPE);
  
        expect(actual).toBe(expected);
    });
});

describe('I want the tool to return an HTML example per document type (notulen, besluitenlijst, agenda)', () => {
    test('retrieving document type Notulen returns expected example', async () => {
        const DOCUMENT_TYPE = 'Notulen';
        const expected = fs.readFileSync('./examples/notulen.html').toString();
        const actual = getHTMLExampleOfDocumentType(DOCUMENT_TYPE);
  
        expect(actual).toBe(expected);
    });

    test('retrieving document type Besluitenlijst returns expected example', async () => {
        const DOCUMENT_TYPE = 'Besluitenlijst';
        const expected = fs.readFileSync('./examples/decision-list.html').toString();
        const actual = getHTMLExampleOfDocumentType(DOCUMENT_TYPE);
  
        expect(actual).toBe(expected);
    });

    test('retrieving document type Agenda returns expected example', async () => {
        const DOCUMENT_TYPE = 'Agenda';
        const expected = fs.readFileSync('./examples/basic-agenda.html').toString();
        const actual = getHTMLExampleOfDocumentType(DOCUMENT_TYPE);
  
        expect(actual).toBe(expected);
    });
});