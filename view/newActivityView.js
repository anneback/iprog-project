function NewActivityView () {
	//this._name = name;
	//this._length = length;
	//this._typeid = typeid;
	//this._description = description;

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

	//TextArea code
	/*$('#descriptionTextArea').focusin(function() {
    	if( this.value == 'Description of the activity..' ) {
        	this.value = '';
    	}
		}).focusout(function() {
   		if ( this.value == '' ) {
        	this.value = 'Description of the activity..';    
    	}
	});*/
}