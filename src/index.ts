import * as fs from 'fs';

export function getShapeOfDocumentType(type: string): string {
    const typeLowerCase = type.toLowerCase();
    switch (typeLowerCase) {
        case 'https://data.vlaanderen.be/id/concept/BesluitDocumentType/8e791b27-7600-4577-b24e-c7c29e0eb773':
        case 'notulen': {
          return fs.readFileSync('./shapes/notulen.ttl').toString();
        }
        case 'https://data.vlaanderen.be/id/concept/BesluitDocumentType/3fa67785-ffdc-4b30-8880-2b99d97b4dee':
        case 'besluitenlijst': {
          return fs.readFileSync('./shapes/decision-list.ttl').toString();
        }
        case 'https://data.vlaanderen.be/id/concept/BesluitDocumentType/13fefad6-a9d6-4025-83b5-e4cbee3a8965': 
        case 'agenda': {
          return fs.readFileSync('./shapes/basic-agenda.ttl').toString();
        }
    };
    throw Error(`No SHACL file found for document type: ${type}.`)
}

export function getHTMLExampleOfDocumentType(type: string): string {
    const typeLowerCase = type.toLowerCase();
    switch (typeLowerCase) {
        case 'https://data.vlaanderen.be/id/concept/BesluitDocumentType/8e791b27-7600-4577-b24e-c7c29e0eb773':
        case 'notulen': {
          return fs.readFileSync('./examples/notulen.html').toString();
        }
        case 'https://data.vlaanderen.be/id/concept/BesluitDocumentType/3fa67785-ffdc-4b30-8880-2b99d97b4dee':
        case 'besluitenlijst': {
          return fs.readFileSync('./examples/decision-list.html').toString();
        }
        case 'https://data.vlaanderen.be/id/concept/BesluitDocumentType/13fefad6-a9d6-4025-83b5-e4cbee3a8965': 
        case 'agenda': {
          return fs.readFileSync('./examples/basic-agenda.html').toString();
        }
    };
    throw Error(`No HTML example found for document type: ${type}.`)
}