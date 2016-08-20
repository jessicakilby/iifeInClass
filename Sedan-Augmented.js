var Sedan = (function(newSedan){
	var max_occupancy = 6;
	var current_occupancy = 0;

	// var type = "minivan";
	newSedan.getOccupancy = function() {
		return current_occupancy;
	};

	newSedan.setOccupancy = function(occupancy){
		if (occupancy <= max_occupancy) {
		current_occupancy=occupancy;
		} else {
			throw "cannot exceed max occupancy of " + max_occupancy;
		}
	};

	newSedan.getType=function() {
		return "minivan";
	};

	return newSedan;

})(Sedan || {});