
function getModalWindow(idname) {
    $('body').append('<div class="screener"></div><div class="modal" id="'+idname+'"><button type="button" class="close">&times;</button></div>');
    $('.screener, .modal .close').click(dropModalWindow);
}
function dropModalWindow() {
    $('.screener, .modal').remove();
}

$(function(){
    $('#modal').click(function(){
        getModalWindow();
        $('.modal').click(function(){
            
            dropModalWindow();
        });
    });
    
  
});