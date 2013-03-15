function DayView(model, number) {
	/*this.startTime = $('#startTime');
	this.endTime = $('#endTime');
	this.totalLength = $('#totalLength');
	this.activityTable = $('#activityTable');*/
	var dayNumber = number;
	var endTime = model.days[dayNumber].getEnd();
	var totalLength = model.days[dayNumber].getTotalLength();
	/*var totalLengthDiscussion = 14;
	var totalLengthGroupWork = 32;
	var totalLengthPresentation = 36;
	var totalLengthBreak = 18;
	*/
	var percentOfPresentation = 0;
	var percentOfDiscussion = 0;
	var percentOfBreak = 0;
	var percentOfGroupWork = 0;

	var totalOfWholeDay; 
	var totalLengthPresentation;
	var totalLengthDiscussion;
	var totalLengthBreak;
	var totalLengthGroupWork;

	getPercent();
	setupTable();
	

	function getPercent() {

		if (model.days[dayNumber].getTotalLength()!='undefined') {
			totalOfWholeDay = model.days[dayNumber].getTotalLength();
		} else {
			totalOfWholeDay = 1;
		}

		if (model.days[dayNumber].getLengthByType(0)!='undefined') {
			totalLengthPresentation = model.days[dayNumber].getLengthByType(0);
		} else {
			totalLengthPresentation = 0;
		}

		if (model.days[dayNumber].getLengthByType(1)!='undefined') {
			totalLengthDiscussion = model.days[dayNumber].getLengthByType(1);
		} else {
			totalLengthDiscussion = 0;
		}

		if (model.days[dayNumber].getLengthByType(2)!='undefined') {
			totalLengthBreak = model.days[dayNumber].getLengthByType(2);
		} else {
			totalLengthBreak = 0;
		}

		if (model.days[dayNumber].getLengthByType(3)!='undefined') {
			totalLengthGroupWork = model.days[dayNumber].getLengthByType(3);
		} else {
			totalLengthGroupWork = 0;
		}

		percentOfPresentation = Math.round(100*(totalLengthPresentation/totalOfWholeDay));
		percentOfDiscussion = Math.round(100*(totalLengthDiscussion/totalOfWholeDay));
		percentOfBreak = Math.round(100*(totalLengthBreak/totalOfWholeDay));
		percentOfGroupWork = Math.round(100*(totalLengthGroupWork/totalOfWholeDay));

		console.log('totalLength: '+ totalOfWholeDay+ 'min');
		console.log('totalLengthPresentation: '+ totalLengthPresentation+ 'min');
		console.log('percent: pres '+ percentOfPresentation+'% '+percentOfDiscussion+'% dis '+percentOfBreak+'% bre '+percentOfGroupWork+'% gro ');

	}

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
		totalLengthDiv.append('Total length: '+totalLength+' min');
		dayDiv.append(totalLengthDiv);

		var progressBarDiscussionDiv = $('<div>');
		progressBarDiscussionDiv.attr('class','bar bar-success');
		progressBarDiscussionDiv.attr('style','width: '+percentOfDiscussion+'%');
		var progressBarPresentationDiv = $('<div>');
		progressBarPresentationDiv.attr('class','bar bar-info');
		progressBarPresentationDiv.attr('style','width: '+percentOfPresentation+'%');
		var progressBarBreakDiv = $('<div>');
		progressBarBreakDiv.attr('class','bar bar-warning');
		progressBarBreakDiv.attr('style','width: '+percentOfBreak+'%');
		var progressBarGroupWorkDiv = $('<div>');
		progressBarGroupWorkDiv.attr('class','bar bar-danger');
		progressBarGroupWorkDiv.attr('style','width: '+percentOfGroupWork+'%');

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
            showMeridian: true
        });
		console.log(model.days[dayNumber]._activities);
		new DragAndDropListView(model, dayNumber, '#scheduleTable'+dayNumber);

        incrementDayNumber();
	}

	function incrementDayNumber() {
		this.dayNumber++;
	}
}
