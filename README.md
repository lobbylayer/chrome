# lobbylayer
A browser extension and proof of concept for unvealing Swiss PMs lobbies on news websites

## Tech Stack

Chrome-Extension-Webpack-Boilerplate

https://github.com/samuelsimoes/chrome-extension-webpack-boilerplate/tree/react

## TODO

* ~~enable functionality only on specific domains, e.g. srf.ch~~
* ~~get a list of all lobbywatch entities (PMs, lobbyists)~~
* discover such entities in article texts of srf.ch - better algorithm (Timo)
* order connections by potency (descending) (Angelo) 
* ~~load interests for such entities from Lobbywatch API~~
* display interests in the best possible form -> UX
* move interests box to the bottom (Angelo)

## BUGS

* Candidate extraction in extractor.js does not always work, example: http://www.srf.ch/news/schweiz/session/nationalrat-fuer-bankgeheimnis-initiative-und-gegenvorschlag -> Lukas Reimann is indexed as "Reimann↵Nationalrat" - because it is not delimited with a space but with a CR.
* Matching of final matches could be more sensible, see line 36 in extractor.js. Example: http://www.srf.ch/news/schweiz/session/so-geht-es-weiter-nach-der-mei-abstimmung - Kurt Fluri is not matched.
* Proof that both Reimanns are correctly recognized: http://www.srf.ch/news/schweiz/nationalrat-will-eu-beitrittsgesuch-zurueckziehen - but another but: Lukas Reimann seems to have some duplicated interets (Freidenker Bern)

### Future

* inline annotations
* show only high potency connections and low on demand (Angelo)

## Examples

[SRF](http://www.srf.ch/news/schweiz/session/nationalrat-fuer-bankgeheimnis-initiative-und-gegenvorschlag), [RTS](http://www.rts.ch/info/regions/autres-cantons/8357820-le-pdc-tessinois-appuie-le-referendum-contre-l-application-du-9-fevrier.html)
