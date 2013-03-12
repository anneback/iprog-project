function DayViewController(model) {

	this.model = model;

	$("#addADayButton").click(
		function(){
			model.addDay();
			var dayView = new DayView(model);
			//dayView.incrementDayNumber();
		});

}