function DragAndDropController(day, position, element){
    // Handle drops
    var element = document.querySelector(element);


    element.addEventListener('dragstart', function(e){
        console.log(day);
        e.dataTransfer.setData('Text', '["'+day+'","'+position+'"]');
        e.dataTransfer.effectAllowed = 'copy';
    }, false);

    element.addEventListener('dragenter', function(e){
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
        this.classList.add('over');
    }, false);

    element.addEventListener('dragover', function(e){
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
//        return false;
    }, false);

    element.addEventListener('dragleave', function(e){
        e.preventDefault();
        this.classList.remove('over');
    }, false);

    element.addEventListener('drop', function(e){
        e.preventDefault();
        var json = $.parseJSON(e.dataTransfer.getData('Text'));
        console.log("Dropping");
        model.moveActivity(json[0],json[1],day,position);
        this.classList.remove('over');
        var success_message = 'dropped: ' + json[0] + 'pos' + json[1];
        console.log(success_message);
    });
}