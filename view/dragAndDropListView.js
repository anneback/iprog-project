function DragAndDropListView (model, dayNumber, parentElement) {

	setupListView();
	model.addObserver(this);

	this.update = function(arg) {
		setupListView();
	};

	function setupListView(){
		$(parentElement).empty();
		var day = dayOrParkedActivities(model,dayNumber);
		for (var j = 0; j < day.length; j++) {
			var activity = day[j];
			var tr = $('<tr>');
			//[0]presentation = .info, [1]discussion = .success, [2]break = .warning, [3]groupwork = .error
			//"Presentation" = .info,"Group Work" = .error,"Discussion" = .success,"Break" = .warning
			var id = 'day'+dayNumber+'pos'+j;
			tr.attr('id',id);
			tr.attr('draggable','true');
			if(activity.getType()==="Presentation") {
				tr.attr('class','info');
			} else if(activity.getType()==="Group Work") {
				tr.attr('class','error');
			} else
			if(activity.getType()==="Discussion") {
				tr.attr('class','success');
			} else
			if(activity.getType()==="Break") {
				tr.attr('class','warning');
			}
			tr.append('<td>'+activity._length+'</td>');
			tr.append('<td>'+activity._name+'</td>');
			$(parentElement).append(tr);
			new DragAndDropController(dayNumber,j,'#'+id);
		}
	}

	function dayOrParkedActivities (model, dayNumber) {
		if (dayNumber === null) return model.parkedActivities;
		else return model.days[dayNumber]._activities;
	}
}
