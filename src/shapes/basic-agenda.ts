export const basicAgendaShape = `@prefix sh:      <http://www.w3.org/ns/shacl#> .
@prefix qb:      <http://purl.org/linked-data/cube#> .
@prefix lblodBesluit:	<http://lblod.data.gift/vocabularies/besluit/> .

<https://data.vlaanderen.be/shacl/besluit-publicatie#DocumentShape>
	a sh:NodeShape ;
	sh:targetClass <http://xmlns.com/foaf/0.1/Document> ;
  	sh:property [
		sh:name "documenttype" ;
		sh:description "Type van het besluit. Concept uit een van volgende concept schemes: https://data.vlaanderen.be/id/conceptscheme/BesluitType https://data.vlaanderen.be/id/conceptscheme/BesluitDocumentType" ;
		sh:path <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> ;
		sh:minCount 1 ;
		lblodBesluit:usageNote '1'
	] ;
    sh:property [
		sh:name "publicatiedatum" ;
		sh:description "De officiële publicatiedatum van het besluit." ;
		sh:path <http://data.europa.eu/eli/ontology#date_publication> ;
		sh:datatype <http://www.w3.org/2001/XMLSchema#date> ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '2'
	] .

<https://data.vlaanderen.be/shacl/besluit-publicatie#AgendapuntShape>
	a sh:NodeShape ;
	sh:targetClass <http://data.vlaanderen.be/ns/besluit#Agendapunt> ;
	sh:property [
		sh:name "aangebrachtNa" ;
		sh:description "Het agendapunt dat op de agenda direct dit agendapunt voorafging." ;
		sh:path <http://data.vlaanderen.be/ns/besluit#aangebrachtNa> ;
		sh:class <http://data.vlaanderen.be/ns/besluit#Agendapunt> ;
        lblodBesluit:maturiteitsniveau "Niveau 1" ;
        sh:minCount 0 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '2'
	] ;
	sh:property [
		sh:name "heeftOntwerpbesluit" ;
		sh:description "Een (mogelijks nog aan te vullen of aan te passen) ontwerp voor het besluit dat uit dit agendapunt zou voortkomen." ;
		sh:path <http://data.vlaanderen.be/ns/besluit#heeftOntwerpbesluit> ;
		sh:class <http://xmlns.com/foaf/0.1/Document> ;
		lblodBesluit:usageNote '20'
	] ;
	sh:property [
		sh:name "refereertAan" ;
		sh:description "Een ander agendapunt waarnaar verwezen wordt vanuit dit agendapunt." ;
		sh:path <http://purl.org/dc/terms/references> ;
		sh:class <http://data.vlaanderen.be/ns/besluit#Agendapunt> ;
		lblodBesluit:usageNote '21'
	] ;
	sh:property [
		sh:name "beschrijving" ;
		sh:description "Korte beschrijving van het agendapunt." ;
		sh:path <http://purl.org/dc/terms/description> ;
		sh:datatype <http://www.w3.org/2001/XMLSchema#string> ;
        lblodBesluit:maturiteitsniveau "Niveau 1" ;
        sh:minCount 0 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '3'
	] ;
	sh:property [
		sh:name "geplandOpenbaar" ;
		sh:description "Geeft aan of het agendapunt al dan niet bedoeld is om openbaar te bespreken." ;
		sh:path <http://data.vlaanderen.be/ns/besluit#geplandOpenbaar> ;
		sh:datatype <http://www.w3.org/2001/XMLSchema#boolean> ;
        lblodBesluit:maturiteitsniveau "Niveau 1" ;
		sh:minCount 1 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '4'
	] ;
	sh:property [
		sh:name "titel" ;
		sh:description "De naam van het agendapunt." ;
		sh:path <http://purl.org/dc/terms/title> ;
		sh:datatype <http://www.w3.org/2001/XMLSchema#string> ;
        lblodBesluit:maturiteitsniveau "Niveau 1" ;
		sh:minCount 1 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '5'
	] ;
	sh:property [
		sh:name "type" ;
		sh:description "Type van het agendapunt." ;
		sh:path <http://data.vlaanderen.be/ns/besluit#Agendapunt.type> ;
		sh:class <http://www.w3.org/2004/02/skos/core#Concept> ;
		sh:minCount 0 ;
		lblodBesluit:usageNote '6'
	] ;
	sh:closed false .
    
<https://data.vlaanderen.be/shacl/besluit-publicatie#ZittingShape>
	a sh:NodeShape ;
	sh:targetClass <http://data.vlaanderen.be/ns/besluit#Zitting> ;
  	sh:property [
		sh:name "behandelt" ;
		sh:description "Een formeel vastgelegd agendapunt van de zitting." ;
		sh:path <http://data.vlaanderen.be/ns/besluit#behandelt> ;
		sh:class <http://data.vlaanderen.be/ns/besluit#Agendapunt> ;
        lblodBesluit:maturiteitsniveau "Niveau 1" ;
		sh:minCount 1 ;
		lblodBesluit:usageNote '7'
	] ;
	sh:property [
		sh:name "geplandeStart" ;
		sh:description "Het tijdstip waarop de zitting gepland is om te beginnen." ;
		sh:path <http://data.vlaanderen.be/ns/besluit#geplandeStart> ;
		sh:datatype <http://www.w3.org/2001/XMLSchema#dateTime> ;
        lblodBesluit:maturiteitsniveau "Niveau 1" ;
		sh:minCount 1 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '8'
	] ;
  	sh:property [
		sh:name "isGehoudenDoor" ;
		sh:description "Duidt aan door welk orgaan de zitting is gehouden." ;
		sh:path <http://data.vlaanderen.be/ns/besluit#isGehoudenDoor> ;
		sh:class <http://data.vlaanderen.be/ns/besluit#Bestuursorgaan> ;
        lblodBesluit:maturiteitsniveau "Niveau 1" ;
		sh:minCount 1 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '9'
	] ;
    sh:property [
		sh:name "locatie" ;
		lblodBesluit:maturiteitsniveau "Niveau 1" ;
		sh:description "Locatie waar de zitting plaatsvindt. Doorgaans is dit een zaal in een gebouw." ;
		sh:path <http://www.w3.org/ns/prov#atLocation> ;
		sh:class <http://www.w3.org/ns/prov#Location> ;
        lblodBesluit:maturiteitsniveau "Niveau 1" ;
        sh:minCount 0 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '10'
	] ;
	sh:property [
		sh:name "heeftAgenda" ;
		sh:description "De formele agenda van de zitting." ;
		sh:path <http://data.vlaanderen.be/ns/besluit#heeftAgenda> ;
		sh:class <http://xmlns.com/foaf/0.1/Document> ;
        sh:minCount 0 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '1'
	] ;
  	sh:closed false .

<https://data.vlaanderen.be/shacl/mandatendatabank#Bestuursorgaan(inbestuursperiode)Shape>
	a sh:NodeShape ;
	sh:targetClass <http://data.vlaanderen.be/ns/besluit#Bestuursorgaan> ;
	sh:property [
		sh:name "isTijdspecialisatieVan (mandaat)" ;
		sh:description "Duidt de bronentiteit aan waarvan deze entiteit een tijdsgebonden specialisatie is. De specialisatie stelt de bron voor gedurende een bepaalde periode." ;
		sh:path <http://data.vlaanderen.be/ns/mandaat#isTijdspecialisatieVan> ;
		sh:class <http://data.vlaanderen.be/ns/besluit#Bestuursorgaan> ;
		sh:minCount 0 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '33'
	] ;
	sh:closed false .

<https://data.vlaanderen.be/shacl/besluit-publicatie#BestuursorgaanShape>
	a sh:NodeShape ;
	sh:targetClass <http://data.vlaanderen.be/ns/besluit#Bestuursorgaan> ;
	sh:property [
		sh:name "classificatie" ;
		lblodBesluit:maturiteitsniveau "Bonusniveau" ;
		sh:description "Het type bestuursorgaan." ;
		sh:path <http://www.w3.org/ns/org#classification> ;
		sh:class <http://www.w3.org/2004/02/skos/core#Concept> ;
		sh:minCount 1 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '12'
	] ;
	sh:property [
		sh:name "naam" ;
		lblodBesluit:maturiteitsniveau "Bonusniveau" ;
		sh:description "Naam van de bestuursorgaan." ;
		sh:path <http://www.w3.org/2004/02/skos/core#prefLabel> ;
		sh:datatype <http://www.w3.org/2001/XMLSchema#string> ;
		sh:minCount 1 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '13'
	] ;
	sh:property [
		sh:name "bestuurt" ;
		lblodBesluit:maturiteitsniveau "Bonusniveau" ;
		sh:description "De bestuurseenheid die door het orgaan bestuurd wordt." ;
		sh:path <http://data.vlaanderen.be/ns/besluit#bestuurt> ;
		sh:class <http://data.vlaanderen.be/ns/besluit#Bestuurseenheid> ;
		sh:minCount 1 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '14'
	] ;
	sh:closed false .

<https://data.vlaanderen.be/shacl/besluit-publicatie#BestuurseenheidShape>
	a sh:NodeShape ;
	sh:targetClass <http://data.vlaanderen.be/ns/besluit#Bestuurseenheid> ;
	sh:property [
		sh:name "classificatie" ;
		sh:description "Classificatie van de bestuurseenheid." ;
		sh:path <http://data.vlaanderen.be/ns/besluit#classificatie> ;
		sh:class <http://www.w3.org/2004/02/skos/core#Concept> ;
		sh:minCount 1 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '15'
	] ;
	sh:property [
		sh:name "naam" ;
		lblodBesluit:maturiteitsniveau "Bonusniveau" ;
		sh:description "Naam van de bestuurseenheid." ;
		sh:path <http://www.w3.org/2004/02/skos/core#prefLabel> ;
		sh:datatype <http://www.w3.org/2001/XMLSchema#string> ;
		sh:minCount 1 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '16'
	] ;
	sh:property [
		sh:name "werkingsgebied" ;
		sh:description "Geografische gebied waarbinnen de bestuurseenheid bepaalde verantwoordelijkheden heeft waarbinnen het bestuurshandelingen kan stellen." ;
		sh:path <http://data.vlaanderen.be/ns/besluit#werkingsgebied> ;
		sh:class <http://www.w3.org/ns/prov#Location> ;
		sh:minCount 1 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '17'
	] ;
	sh:closed false .

<https://data.vlaanderen.be/shacl/besluit-publicatie#WerkingsgebiedShape>
	a sh:NodeShape ;
	sh:targetClass <http://www.w3.org/ns/prov#Location> ;
	sh:property [
		sh:name "naam" ;
		lblodBesluit:maturiteitsniveau "Bonusniveau" ;
		sh:description "Naam van het werkingsgebied." ;
		sh:path <http://www.w3.org/2000/01/rdf-schema#label> ;
		sh:datatype <http://www.w3.org/2001/XMLSchema#string> ;
		sh:minCount 1 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '18'
	] ;
	sh:property [
		sh:name "werkingsgebiedNiveau" ;
		sh:description "Niveau (gemeente, provincie, gewest...) van het gebied waarbinnen de bestuurseenheid bepaalde verantwoordelijkheden heeft waarbinnen het bestuurshandelingen kan stellen." ;
		sh:path <http://mu.semte.ch/vocabularies/ext/werkingsgebiedNiveau> ;
		sh:datatype <http://www.w3.org/2001/XMLSchema#string> ;
		sh:minCount 0 ;
		sh:maxCount 1 ;
		lblodBesluit:usageNote '19'
	] ;
	sh:closed false .`