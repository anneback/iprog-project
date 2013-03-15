function DragAndDropListView (model, dayNumber, parentElement) {

    setupListView(model,dayNumber);
    model.addObserver(this);
    this.dayNumber = dayNumber;
    this.model = model;

    this.update = function(arg) {
        setupListView(this.model,this.dayNumber);
    };

    function setupListView(md,dn){
        $(parentElement).empty();
        var day = dayOrParkedActivities(md,dn);
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
        var parentParent = $(parentElement).parent();
        console.log($(parentElement).parent());
        parentParent.bind('dragenter', function(e){
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            this.classList.add('over');
        }, false);

        parentParent.bind('dragover', function(e){
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            return false;
        }, false);

        parentParent.bind('dragleave', function(e){
            e.preventDefault();
            this.classList.remove('over');
        }, false);

        parentParent.get(0).addEventListener('drop', function(e){
            e.preventDefault();
            var json = $.parseJSON(e.dataTransfer.getData('Text'));
            console.log("Dropping");
            model.moveActivity(json[0],json[1],dn,day.length+1);
            this.classList.remove('over');
            var success_message = 'dropped: ' + json[0] + 'pos' + json[1];
            console.log(success_message);
            return false;
        });
        // parentParent.droppable({
        //     drop: function(event, ui) {
        //         var json = $.parseJSON(e.dataTransfer.getData('Text'));
        //         console.log("Dropping");
        //         model.moveActivity(json[0],json[1],dayNumber,day.length+1);
        //         this.classList.remove('over');
        //         var success_message = 'dropped: ' + json[0] + 'pos' + json[1];
        //         console.log(success_message);
        //     }
        // });
    }

    function dayOrParkedActivities (model, dayNumber) {
        if (dayNumber === null) return model.parkedActivities;
        else return model.days[dayNumber]._activities;
    }
}
