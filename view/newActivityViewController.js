function NewActivityViewController (view, model) {
	console.log ( view);
	this.popoverDismiss = function(){
		console.log("hej igen");
		var newName = $('#newActivityName').val();
		var newLength = $('#newActivityLength').val();
		var typeText = $('#typebutton').text();
		var newDesc = $('#newActivityDescription').val();
		var newTypeId;
		if(typeText==="Presentation") {
			newTypeId = 0;
		} else if(typeText==="Group Work") {
			newTypeId = 1;
		} else if(typeText==="Discussion") {
			newTypeId = 2;
		} else if(typeText==="Break") {
			newTypeId = 3;
		}
		var newAct = new Activity(newName,newLength,newTypeId,newDesc);
		model.addParkedActivity(newAct);
		console.log (model.parkedActivities);
		$('#addActivityButton').popover('hide');
	};
}