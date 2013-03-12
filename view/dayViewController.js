function DayViewController(model) {

	this.model = model;
	this.numberOfDays = 2;

	$("#addADayButton").click(
		function(){
			model.addDay();
			var dayView = new DayView(model, mainController.dayViewController.numberOfDays);
			mainController.dayViewController.numberOfDays++;
		});

}