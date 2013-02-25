function DragAndDropListView (model) {

	setupListView();

	function setupListView(){
		var tmpList = model.days;
		for (var i = model.days.length - 1; i >= 0; i--) {
			var activity = tmpList.[i];
			var tr = $('<tr>');
			//[0]presentation = .info, [1]discussion = .success, [2]break = .warning, [3]groupwork = .error
			if(activity._typeid==0) {
				tr.attr('class','info');
			} else 
			if(activity._typeid==1) {
				tr.attr('class','success');
			} else
			if(activity._typeid==2) {
				tr.attr('class','warning');
			} else
			if(activity._typeid==3) {
				tr.attr('class','error');
			}
			tr.append('<td>'+activity._length+'</td>');
			tr.append('<td>'+activity._name+'</td>');	
			$('activityTable').append(tr);
		};
	}
}
