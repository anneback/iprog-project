function DayView(model, number) {
	/*this.startTime = $('#startTime');
	this.endTime = $('#endTime');
	this.totalLength = $('#totalLength');
	this.activityTable = $('#activityTable');*/

	var startTime = '08:00';
	var endTime = '12:00';
	var totalLength = 20;
	var dayNumber = number;
	var totalLengthDiscussion = 14;
	var totalLengthGroupWork = 32;
	var totalLengthPresentation = 36;
	var totalLengthBreak = 18;

	setupTable();

	function setupTable() {

		var dayDiv =  $('<div>');
		dayDiv.attr('id','day'+dayNumber);
		dayDiv.attr('class','span3 dayContainer');

		var timePickerDiv = $('<div>');
		timePickerDiv.attr('class','input-append bootstrap-timepicker');
		timePickerDiv.append('<input id="startTime'+dayNumber+'" type="text" class="input-small">');
		timePickerDiv.append('<span class="add-on"><i class="icon-time"></i></span>');
		dayDiv.append(timePickerDiv);

		var endTimeDiv = $('<div>');
		endTimeDiv.attr('id','endTime'+dayNumber);
		endTimeDiv.attr('style','text-align: center');
		endTimeDiv.append('End time: '+endTime);
		dayDiv.append(endTimeDiv);

		var totalLengthDiv = $('<div>');
		totalLengthDiv.attr('id','totalLength'+dayNumber);
		totalLengthDiv.attr('style','text-align: center');
		totalLengthDiv.append('Total length: '+totalLength);
		dayDiv.append(totalLengthDiv);

		var progressBarDiscussionDiv = $('<div>');
		progressBarDiscussionDiv.attr('class','bar bar-success');
		progressBarDiscussionDiv.attr('style','width: '+totalLengthDiscussion+'%');
		var progressBarPresentationDiv = $('<div>');
		progressBarPresentationDiv.attr('class','bar bar-info');
		progressBarPresentationDiv.attr('style','width: '+totalLengthPresentation+'%');
		var progressBarBreakDiv = $('<div>');
		progressBarBreakDiv.attr('class','bar bar-warning');
		progressBarBreakDiv.attr('style','width: '+totalLengthBreak+'%');
		var progressBarGroupWorkDiv = $('<div>');
		progressBarGroupWorkDiv.attr('class','bar bar-danger');
		progressBarGroupWorkDiv.attr('style','width: '+totalLengthGroupWork+'%');

		var progressBarDiv = $('<div>');
		progressBarDiv.attr('id','progressBar'+dayNumber);
		progressBarDiv.attr('class','progress');
		progressBarDiv.append(progressBarDiscussionDiv);
		progressBarDiv.append(progressBarPresentationDiv);
		progressBarDiv.append(progressBarBreakDiv);
		progressBarDiv.append(progressBarGroupWorkDiv);
		dayDiv.append(progressBarDiv);

		var tr = $('<tr>');

		var dayTable = $('<table>');
		dayTable.attr('id','scheduleTable'+dayNumber);
		dayTable.attr('class','table table-bordered');
		dayTable.append(tr);

		var dndContainerDiv = $('<div>');
		dndContainerDiv.attr('id','dnd'+dayNumber);
		dndContainerDiv.attr('class','dnd-container');
		dndContainerDiv.append(dayTable);
		dayDiv.append(dndContainerDiv);

		$('#dayCanvas').append(dayDiv);

        $('#startTime'+dayNumber).timepicker({
            minuteStep: 1,
            showMeridian: false
        });
		console.log(model.days[dayNumber]._activities);
		new DragAndDropListView(model, model.days[dayNumber]._activities, '#scheduleTable'+dayNumber);

        incrementDayNumber();
	}

	function incrementDayNumber() {
		this.dayNumber++;
	}
}
