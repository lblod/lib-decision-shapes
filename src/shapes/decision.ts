export const decisionShape = `
@prefix sh:      <http://www.w3.org/ns/shacl#> .
@prefix qb:      <http://purl.org/linked-data/cube#> .
@prefix lblodBesluit:	<http://lblod.data.gift/vocabularies/besluit/> .
<https://data.vlaanderen.be/shacl/besluit-publicatie#BesluitShape>
	a sh:NodeShape ;
	sh:targetClass <http://data.vlaanderen.be/ns/besluit#Besluit> ;
	sh:property [
		sh:name "beschrijving" ;
		sh:description "Een beknopte beschrijving van het besluit." ;
		sh:path <http://data.europa.eu/eli/ontology#description> ;
		sh:datatype <http://www.w3.org/2001/XMLSchema#string> ;
        sh:minCount 0 ;
		sh:maxCount 1 ;
        sh:resultMessage "Het besluit mag maximaal één beschrijving hebben."
	] ;
    sh:property [
		sh:name "inhoud" ;
		sh:description "De beschrijving van de beoogde rechtsgevolgen, het zogenaamde beschikkend gedeelte." ;
		sh:path <http://www.w3.org/ns/prov#value> ;
		sh:datatype <http://www.w3.org/2001/XMLSchema#string> ;
		sh:minCount 1 ;
		sh:maxCount 1 ;
        sh:resultMessage "De beslissing moet een artikelcontainer hebben."
	] ;
	sh:property [
		sh:name "citeeropschrift" ;
		sh:description "De beknopte titel of officiële korte naam van een decreet, wet, besluit... Deze wordt officieel vastgelegd. Deze benaming wordt in de praktijk gebruikt om naar de rechtsgrond te verwijzen." ;
		sh:path <http://data.europa.eu/eli/ontology#title_short> ;
		sh:datatype <http://www.w3.org/2001/XMLSchema#string> ;
        sh:minCount 0 ;
		sh:maxCount 1 ;
        sh:resultMessage "De beslissing mag niet meer dan één officiële titel hebben."
	] ;
    sh:property [
		sh:name "titel" ;
		sh:description "Titel van de legale verschijningsvorm." ;
		sh:path <http://data.europa.eu/eli/ontology#title> ;
		sh:datatype <http://www.w3.org/2001/XMLSchema#string> ;
		sh:minCount 1 ;
        sh:resultMessage "Het besluit moet minstens één titel hebben."
	] ;
	sh:property [
		sh:name "taal" ;
		sh:description "De taal van de verschijningsvorm." ;
		sh:path <http://data.europa.eu/eli/ontology#language> ;
		sh:class <http://www.w3.org/2004/02/skos/core#Concept> ;
		sh:minCount 1 ;
		sh:maxCount 1 ;
		qb:codeList <http://publications.europa.eu/mdr/authority/language/index.html> ;
        sh:resultMessage "Het besluit moet een geldige taal hebben."
	] ;
    sh:property [
		sh:name "heeftDeel" ;
		sh:description "Duidt een artikel aan van dit besluit." ;
		sh:path <http://data.europa.eu/eli/ontology#has_part> ;
		sh:class <http://data.vlaanderen.be/ns/besluit#Artikel> ;
		sh:minCount 0 ;
        sh:resultMessage "Het artikel moet het juiste type hebben."
	] ;
    sh:property [
		sh:name "citeert" ;
		sh:description "Een citatie in de wettelijke tekst. Dit omvat zowel woordelijke citaten als citaten in verwijzingen." ;
		sh:path <http://data.europa.eu/eli/ontology#cites> ;
		sh:class <http://data.europa.eu/eli/ontology#LegalExpression> ;
        sh:minCount 0 ;
        sh:resultMessage "De citatie moet het juiste type hebben."
	] ;
    sh:property [
		sh:name "motivering" ;
		sh:description "Beschrijving van de juridische en feitelijke motivering achter de beslissing die wordt uitgedrukt in het besluit." ;
		sh:path <http://data.vlaanderen.be/ns/besluit#motivering> ;
		sh:datatype <http://www.w3.org/1999/02/22-rdf-syntax-ns#langString> ;
		sh:minCount 1 ;
		sh:maxCount 1 ;
        sh:resultMessage "Het besluit moet één motivering hebben."
	] ;
	sh:property [
		sh:name "publicatiedatum" ;
		sh:description "De officiële publicatiedatum van het besluit." ;
		sh:path <http://data.europa.eu/eli/ontology#date_publication> ;
		sh:datatype <http://www.w3.org/2001/XMLSchema#date> ;
        sh:minCount 0 ;
		sh:maxCount 1 ;
        sh:resultMessage "Het besluit mag niet meer dan één publicatiedatum hebben."
	] ;
    sh:property [
		sh:name "buitenwerkingtreding" ;
		sh:description "De laatste dag waarop de regelgeving nog van kracht is." ;
		sh:path <http://data.europa.eu/eli/ontology#date_no_longer_in_force> ;
		sh:datatype <http://www.w3.org/2001/XMLSchema#date> ;
        sh:minCount 0 ;
		sh:maxCount 1
	] ;
	sh:property [
		sh:name "inwerkingtreding" ;
		sh:description "De datum waarop de regelgeving van kracht wordt." ;
		sh:path <http://data.europa.eu/eli/ontology#first_date_entry_in_force> ;
		sh:datatype <http://www.w3.org/2001/XMLSchema#date> ;
		sh:minCount 0 ;
		sh:maxCount 1 
	] ;
	sh:closed false .
`;
