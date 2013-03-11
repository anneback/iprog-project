function NewActivityView () {
	this._name = $('#newActivityName').val();
	this._length = $('#newActivityLength').val();
	this._typeid = $('#typebutton').text();
	this._description = $('#newActivityDescription').val();

	$('#addActivityButton').popover({
		html:true,
		placement:'bottom',
		title: function() {
      		return $("#titlePopupField").html();
    	},
			content: function() {
				return $("#contentPopupField").html();
    	}
	});
}
