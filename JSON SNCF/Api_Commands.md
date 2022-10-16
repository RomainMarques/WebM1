# Fetching All Contents

## Base URL
https://api.sncf.com/v1/coverage/sncf/

### Modules
* [Journeys](#journeys)

### Separators
* ? => where
* & => and

## Journeys
https://api.sncf.com/v1/coverage/sncf/journeys

### Parameters
* from : admin:fr:{code postale}
* to : admin:fr:{code postale}
* datetime : YYYYMMDDTHHMMSS

### JSON Explanaition

Journeys => Sections[] (Each section is a step of the journey), it contains :
* from : Departure stop area {name, id, stop_point => coord}
* to : Arrival stop area {name, id, stop_point => coord}

#### Example
https://api.sncf.com/v1/coverage/sncf/journeys?from=admin:fr:75056&to=admin:fr:69123&datetime=20220927T083706

## commercial modes
https://api.sncf.com/v1/coverage/sncf/commercial_modes

### JSON Explanaition
commercial_modes[] => id, name (id => trains name in their database, name => name of the train)