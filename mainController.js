function MainController(model) {
	this.addActivityButton = $('#addActivityButton');
	this.activitySchedule = $('#activitySchedule');
	this.startTime = $('#startTime');
	this.endTime = $('#endTime');
	this.totalLength = $('#totalLength');
	this.addADayButton = $('#addADay');
	this.addActivityButton = $('#addActivityButton');
	
	createTestData();
	var dragAndDropListView = new DragAndDropListView(model);
	var newActivityView = new NewActivityView();

	this.addActivityButton.click(function(){
		$("#confirmActivityButton").popover('hide');
	});

}
