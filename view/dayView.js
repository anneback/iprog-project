function DayView(model) {
	/*this.startTime = $('#startTime');
	this.endTime = $('#endTime');
	this.totalLength = $('#totalLength');
	this.activityTable = $('#activityTable');*/

	var startTime = '08:00';
	var endTime = '12:00';
	var totalLength = 20;

	setupTable();

	function setupTable() {

		var dayNumber = 1;

		var dayDiv =  $('<div>');
		dayDiv.attr('id','day'+dayNumber);
		dayDiv.attr('class','span3');

		var timePickerDiv = $('<div>');
		timePickerDiv.attr('class','input-append bootstrap-timepicker');
		timePickerDiv.append('<input id="startTime" type="text" class="input-small">');
		timePickerDiv.append('<span class="add-on"><i class="icon-time"></i></span>');
		dayDiv.append(timePickerDiv);

		var endTimeDiv = $('<div>');
		endTimeDiv.attr('id','endTime');
		endTimeDiv.attr('style','text-align: center');
		endTimeDiv.append('End time: '+endTime);
		dayDiv.append(endTimeDiv);

		var totalLength = $('<div>');
		totalLength.attr('id','endTime');
		totalLength.attr('style','text-align: center');
		totalLength.append('Total length: '+totalLength);
		dayDiv.append(totalLength);

		var tr = $('<tr>');
		tr.append('<td>intro2</td>');

		var dayTable = $('<table>');
		dayTable.attr('id','scheduleTable');
		dayTable.attr('class','table table-bordered');
		dayTable.append(tr);

		var dndContainerDiv = $('<div>');
		dndContainerDiv.attr('id','dnd'+dayNumber);
		dndContainerDiv.attr('class','dnd-container');
		dndContainerDiv.append(dayTable);
		dayDiv.append(dndContainerDiv);

		$('#dayCanvas').append(dayDiv);
	}
}
