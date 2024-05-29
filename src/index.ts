import { basicAgendaShape } from './shapes/basic-agenda';
import { decisionListShape } from './shapes/decision-list';
import { notulenShape } from './shapes/notulen';

import { basicAgendaExample } from './examples/basic-agenda';
import { decisionListExample } from './examples/decision-list';
import { notulenExample } from './examples/notulen';

// const basicAgendaShape = require('./shapes/basic-agenda.js');
// const decisionListShape = require('./shapes/decision-list.js');
// const notulenShape = require('./shapes/notulen.js');

// const basicAgendaExample = require('./examples/basic-agenda.js');
// const decisionListExample = require('./examples/decision-list.js');
// const notulenExample = require('./examples/notulen.js');

export function getShapeOfDocumentType(type: string): string {
    const typeLowerCase = type.toLowerCase();
    switch (typeLowerCase) {
        case 'https://data.vlaanderen.be/id/concept/BesluitDocumentType/8e791b27-7600-4577-b24e-c7c29e0eb773':
        case 'notulen': {
          return notulenShape;
        }
        case 'https://data.vlaanderen.be/id/concept/BesluitDocumentType/3fa67785-ffdc-4b30-8880-2b99d97b4dee':
        case 'besluitenlijst': {
          return decisionListShape;
        }
        case 'https://data.vlaanderen.be/id/concept/BesluitDocumentType/13fefad6-a9d6-4025-83b5-e4cbee3a8965': 
        case 'agenda': {
          return basicAgendaShape;
        }
    };
    throw Error(`No SHACL file found for document type: ${type}.`)
}

export function getHTMLExampleOfDocumentType(type: string): string {
    const typeLowerCase = type.toLowerCase();
    switch (typeLowerCase) {
        case 'https://data.vlaanderen.be/id/concept/BesluitDocumentType/8e791b27-7600-4577-b24e-c7c29e0eb773':
        case 'notulen': {
          return notulenExample;
        }
        case 'https://data.vlaanderen.be/id/concept/BesluitDocumentType/3fa67785-ffdc-4b30-8880-2b99d97b4dee':
        case 'besluitenlijst': {
          return decisionListExample;
        }
        case 'https://data.vlaanderen.be/id/concept/BesluitDocumentType/13fefad6-a9d6-4025-83b5-e4cbee3a8965': 
        case 'agenda': {
          return basicAgendaExample;
        }
    };  
    throw Error(`No HTML example found for document type: ${type}.`)
}