function MainController(model) {
	this.addActivityButton = $('#addActivityButton');
	this.activitySchedule = $('#activitySchedule');
	this.startTime = $('#startTime');
	this.endTime = $('#endTime');
	this.totalLength = $('#totalLength');
	this.addADayButton = $('#addADay');
	
	createTestData();
	var dragAndDropListView = new DragAndDropListView(model);
	var newActivityView = new NewActivityView();
	var newActivityViewController = new NewActivityViewController();

}
