function MainController(model) {
	this.addActivityButton = $('#addActivityButton');
	this.activitySchedule = $('#activitySchedule');
	this.startTime = $('#startTime');
	this.endTime = $('#endTime');
	this.totalLength = $('#totalLength');
	this.addADayButton = $('#addADay');

	createTestData(model);
	var dragAndDropListView = new DragAndDropListView(model);
	var newActivityView = new NewActivityView();
	console.log("hej");
	this.newActivityViewController = new NewActivityViewController(newActivityView, model);

}
