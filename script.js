
//Date
var showDate=document.getElementById("show-date")
var showDate2=document.getElementById("show-date2")
var showDate3=document.getElementById("show-date3")
var showDate4=document.getElementById("show-date4")
var dateNow = new Date()
showDate.innerHTML = dateNow.toDateString()
showDate2.innerHTML = dateNow.toDateString()
showDate3.innerHTML = dateNow.toDateString()
showDate4.innerHTML = dateNow.toDateString()





 //likes counter
 var counter=document.getElementById("likes-counter")
 var previousTarget=null;
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





// Search Categories
const myFunction = () => {
  const searchbox=document.getElementById("myInput").value.toUpperCase();
  const blog=document.querySelectorAll(".col-sm-4")
  const items=document.getElementsByTagName("h3")

  for(var i = 0; i < items.length ; i++){
      let match=blog[i].getElementsByTagName('h3')[0];
      // console.log(match.textContent)


      if(match){
          let textvalue = match.textContent || match.innerHTML

          if(textvalue.toUpperCase().indexOf(searchbox) > -1){
              blog[i].style.display="";
              blog[i].classList.toggle("valid")
          }else{
              blog[i].style.display="none";
              blog[i].classList.toggle("invalid")
          }
      }
  }
}



// show toggle side bar on scroll
window.addEventListener("scroll",reveal)

function reveal(){
  var reveals=document.querySelectorAll(".reveal")

  for (var i = 0 ; i < reveals.length ;i++){
      var windowh=window.innerHeight;
      var revealt=reveals[i].getBoundingClientRect().top;
      var revealp=1300;

      if(revealt < windowh - revealp){
          reveals[i].classList.add("active")
          fixedbtn.classList.add("valid")
      
      }
      else{
          fixedbtn.classList.remove("valid")
          reveals[i].classList.remove("active")
          
      }
  }
}






// display side bar content on page load
window.addEventListener("load",()=>{
  var sidebar = document.getElementById("topImg")
  var blogs = document.getElementById("blogs")
  var home = document.getElementById("home")
  var contact = document.getElementById("contact")
  var travel = document.getElementById("travel")
  var photo = document.getElementById("photo")
  var about = document.getElementById("about")
  var tech = document.getElementById("tech")
  var sub = document.getElementById("sub")
  var subInput = document.getElementById("subInput")
  var subBtn = document.getElementById("subBtn")
  sidebar.classList.add("valid")
  blogs.classList.add("valid")
  home.classList.add("valid")
  contact.classList.add("valid")
  travel.classList.add("valid")
  photo.classList.add("valid")
  about.classList.add("valid")
  tech.classList.add("valid")
  sub.classList.add("valid")
  subInput.classList.add("valid")
  subBtn.classList.add("valid")
})



// modal comment validation
function CommentValid(){
var btn = document.getElementById("comment")
var name = document.getElementById("commentName")
var textarea = document.getElementById("commentArea")

if(name.value.length >=3 && textarea.value.length >=3){
  btn.disabled=false
  btn.classList.add("valid")
}else{
  btn.classList.remove("valid")
  btn.disabled=true
}


}

// Toggle SideBar
var toggleBar=document.getElementById("toggleSideBar")
var sideBar=document.getElementById("sideBar")
var mainContent= document.getElementById("mainContent")
var result = document.getElementById("result")
var body=document.getElementById("body")
toggleBar.addEventListener("click", () => {
  sideBar.classList.toggle("valid")
  mainContent.classList.toggle("valid")
  result.classList.toggle("valid")
  body.classList.toggle("valid")
})

$(document).ready(()=>{
  $("#sub").click(()=>{
    $(".main-content").load("contact.html")
  })
})