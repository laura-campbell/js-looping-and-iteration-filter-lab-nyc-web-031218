function findMatching(drivers, string) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === string.toLowerCase();
});
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function (driverName) {
    return driverName[0]+driverName[1] === string;
});
}

function matchName(drivers, string) {
  return drivers.filter(function (driverName) {
    return driverName.name === string;
});
}
