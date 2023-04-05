const Traveller = function (journeys) {
    this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function () {
    return this.journeys.map(journey => journey.startLocation)
};

Traveller.prototype.getJourneyEndLocations = function () {
    return this.journeys.map(journey => journey.endLocation)
};

Traveller.prototype.getJourneysByTransport = function (transport) {
    return this.journeys.filter(j => j.transport === transport)
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
    return this.journeys.filter(j => j.distance > minDistance)
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
    return this.journeys.reduce((acc, curr) => {
        return acc + curr.distance
    }, 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
    return this.journeys.map(j => j.transport).filter((transport, index, array) => array.indexOf(transport) === index)
}


module.exports = Traveller;
