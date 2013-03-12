function MainController(model) {
	this.addActivityButton = $('#addActivityButton');
	this.activitySchedule = $('#activitySchedule');
	this.startTime = $('#startTime');
	this.endTime = $('#endTime');
	this.totalLength = $('#totalLength');
	this.addADayButton = $('#addADay');


	this.model = model;
	createTestData(model);
	var dragAndDropListView = new DragAndDropListView(model);
	var newActivityView = new NewActivityView();
	this.newActivityViewController = new NewActivityViewController(newActivityView, model);
	var dayView = new DayView(model);
	var dayViewController = new DayViewController(model);

}
