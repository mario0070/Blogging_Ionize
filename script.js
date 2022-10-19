
//Date
var showDate=document.getElementById("show-date")
var showDate2=document.getElementById("show-date2")
var dateNow = new Date()
showDate.innerHTML = dateNow.toDateString()
showDate2.innerHTML = dateNow.toDateString()


 var counter=document.getElementById("likes-counter")

 var previousTarget=null;
 //likes counter
 var like=document.getElementById("like")
    like.addEventListener("click",()=>{
    if(this===previousTarget) {
        alert("Oops!! , you can't unlike this Blog");
        counter.innerHTML;
    }
    else{
        counter.innerHTML ++;
        like.classList.add("valid")
        previousTarget=this;
        return true;

    }
   
 })

 //seen counter
 var previousTarget1=null;
 var seen=document.getElementById("seen")
 var seenCounter = document.getElementById("seen-counter")
 seen.addEventListener("click",()=>{
 if(this===previousTarget1) {
     alert("Oops!! , you can't unseen this Blog");
     seenCounter.innerHTML;
 }
 else{
     seenCounter.innerHTML ++;
     seen.classList.add("valid")
     previousTarget1=this;
     return true;

 }

})
