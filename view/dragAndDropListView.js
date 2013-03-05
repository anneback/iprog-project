function DragAndDropListView (model) {

	setupListView();

	function setupListView(){
		var tmpList = model.days;
		for (var i = model.days.length - 1; i >= 0; i--) {
			var day = tmpList[i];
			for (var j = day._activities.length - 1; j >= 0; j--) {
			var activity = day._activities[j];
			var tr = $('<tr>');
			//[0]presentation = .info, [1]discussion = .success, [2]break = .warning, [3]groupwork = .error
			//"Presentation" = .info,"Group Work" = .error,"Discussion" = .success,"Break" = .warning

			tr.attr('draggable', 'true');
			tr.attr('ondragstart', 'drag(event)');
			if(activity.getType()==="Presentation") {
				tr.attr('class','info');
			} else 
			if(activity.getType()==="Group Work") {
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
			$('#activityTable').append(tr);
			};
		};
	}
};
