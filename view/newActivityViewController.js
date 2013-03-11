function NewActivityViewController () {
	$("#confirmActivityButton").click(function(){
		console.log ("NewActivityViewController");
		function typeStringToId(typeText){
			var newTypeId;
			if(typeText==="Presentation") {
				newTypeId = 0;
			} else
			if(typeText==="Group Work") {
				newTypeId = 1;
			} else
			if(typeText==="Discussion") {
				newTypeId = 2;
			} else
			if(typeText==="Break") {
				newTypeId = 3;
			}
			console.log("TYPEID: "+newTypeId);
			return newTypeId;
		}

		var newName = $('#newActivityName').val();
		var newLength = $('#newActivityLength').val();
		var newType = $('#typebutton').text();
		var newDesc = $('#newActivityDescription').val();
		var newTypeId = typeStringToId(newType);
		var newAct = new Activity(newName,newLength,newTypeId,newDesc);
		model.addParkedActivity(newAct);
		console.log (model.parkedActivities);
		$('#addActivityButton').popover('hide');
	});
}