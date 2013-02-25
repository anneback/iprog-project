function DragAndDropListView (model) {

	setupListView();

	function setupListView(){
		var tmpList = model.days;
		for (var i = model.days.length - 1; i >= 0; i--) {
			var activity = tmpList[i];
			var tr = $('<tr>');
			//[0]presentation = .info, [1]discussion = .success, [2]break = .warning, [3]groupwork = .error
			//"Presentation" = info,"Group Work" = .error,"Discussion" = .success,"Break" = .warning
			if(activity.getType.equals("Presentation")) {
				tr.attr('class','info');
			} else 
			if(activity.getType.equals("Group Work")) {
				tr.attr('class','error');
			} else
			if(activity.getType.equals("Discussion")) {
				tr.attr('class','success');
			} else
			if(activity.getType.equals("Break")) {
				tr.attr('class','warning');
			}
			tr.append('<td>'+activity._length+'</td>');
			tr.append('<td>'+activity._name+'</td>');	
			$('activityTable').append(tr);
		};
	}
};
