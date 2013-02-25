window.onready = function(){
    // Handle drops
    var drop_box = document.querySelector('#dnd1');

    drop_box.addEventListener('dragstart', function(e){
        e.dataTransfer.setData('text/html', this.innerHTML);
        e.dataTransfer.effectAllowed = 'copy';
    }, false);

    drop_box.addEventListener('dragenter', function(e){
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
        this.classList.add('over');
    }, false);

    drop_box.addEventListener('dragover', function(e){
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
        return false;
    }, false);

    drop_box.addEventListener('dragleave', function(e){
        e.preventDefault();
        this.classList.remove('over');
    }, false);

    drop_box.addEventListener('drop', function(e){
        e.preventDefault();
        console.log("Dropping");
        model.moveActivity(0,0,0,1);
        this.classList.remove('over');
        var success_message = document.createElement('p');
        success_message.innerHTML = 'dropped: ' + e.dataTransfer.getData(0);
        this.appendChild(success_message);
    }, false);
};