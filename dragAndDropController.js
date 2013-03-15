function DragAndDropController(collection, element){
    // Handle drops
    var element = document.querySelector(element);

    element.addEventListener('dragstart', function(e){
        e.dataTransfer.setData('text/html', this.innerHTML);
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
        return false;
    }, false);

    element.addEventListener('dragleave', function(e){
        e.preventDefault();
        this.classList.remove('over');
    }, false);

    element.addEventListener('drop', function(e){
        e.preventDefault();
        console.log("Dropping");
        model.moveActivity(0,0,0,1);
        this.classList.remove('over');
        var success_message = document.createElement('p');
    }, false);
}
function drag(ev) {
    ev.dataTransfer.setData("Text",ev.target.id);
}