const FORM_STEPS = 6;
function doChangingStepStuff(id,isPrevious)
{    
    //Do blurring for all except active form portion    
    for(var i = 1;  i <= FORM_STEPS; i++)
    {
        elemId = "step"+i;
        elemStepId = "step"+i+"_progress";

        //Remove blurness from the element currently focussed
        if(id == elemId)
        {
            $('#'+elemId).css("-webkit-filter","blur(0px)");
            $('#'+elemId).css("-moz-filter","blur(0px)");
            $('#'+elemId).css("-o-filter","blur(0px)");
            $('#'+elemId).css("-ms-filter","blur(0px)");
            $('#'+elemId).css("filter","blur(0px)");
            $('#'+elemStepId).addClass('current').removeClass('complete');
            if(isPrevious)
            {
                //$('#'+"step"+i+"_progress").addClass('complete').removeClass("current");
                $('#'+"step"+(i+1)+"_progress").removeClass("complete").removeClass("current");
            }
            else
            {
                $('#'+"step"+(i-1)+"_progress").addClass('complete').removeClass("current");
            }

            continue;
        }

        //Blur all other elements            
        $('#'+elemId).css("-webkit-filter","blur(5px)");
        $('#'+elemId).css("-moz-filter","blur(5px)");
        $('#'+elemId).css("-o-filter","blur(5px)");
        $('#'+elemId).css("-ms-filter","blur(5px)");
        $('#'+elemId).css("filter","blur(5px)");

    }
    
    $('html,body').animate({
        scrollTop: $("#"+id).offset().top},
        'slow');
    
       
}
