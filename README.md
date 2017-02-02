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
* Matching of final matches could be more sensible, see line 36 in extractor.js

### Future

* inline annotations
* show only high potency connections and low on demand (Angelo)
