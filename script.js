

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
window.addEventListener("scroll",reveals)

function reveals(){
  var reveals=document.querySelectorAll(".reveal")
  var showMedial = document.getElementById("showMedial")
  var goUp = document.getElementById("goUp")


  for (var i = 0 ; i < reveals.length ;i++){
      var windowh=window.innerHeight;
      var revealt=reveals[i].getBoundingClientRect().top;
      var revealp=400;

      if(revealt < windowh - revealp){
          fixedbtn.classList.add("valid")
          showMedial.classList.add("valid")
          goUp.classList.add("valid")
      
      }
      else{
          fixedbtn.classList.remove("valid")
          showMedial.classList.remove("valid")
          goUp.classList.remove("valid")
      }
  }
}



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




// show element on scroll
window.addEventListener("scroll",reveal)

function reveal(){
    var reveals=document.querySelectorAll(".reveals")
    var reveals1=document.querySelectorAll(".reveals1")
    var reveals2=document.querySelectorAll(".reveals2")

    for (var i = 0 ; i < reveals.length ;i++){
        var windowh=window.innerHeight;
        var revealt=reveals[i].getBoundingClientRect().top;
        var revealp=200;

        if(revealt < windowh + revealp){
            reveals[i].classList.add("active")
            reveals1[i].classList.add("active")
            reveals2[i].classList.add("active")
        
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



// Toggle icon
function ToggleIcon(x) {
  x.classList.toggle("fa-toggle-on");
}

//Toggle dark mode text
function ToggleText() {
  var dark = document.getElementById("dark");
  if (dark.innerHTML === "Dark") {
    dark.innerHTML = "Light";
  } else {
    dark.innerHTML = "Dark";
  }
}


//Show Medial
var showMedial = document.getElementById("showMedial")
var arrowOut = document.getElementById("arrowOut")
arrowOut.addEventListener("click",()=>{
  showMedial.classList.toggle("active")
  arrowOut.classList.toggle("actives")
})




//Toggle Dark Mode
var toggleDark = document.getElementById("toggleDark")
var sideBarContent = document.getElementById("sideBarContent")
var body = document.getElementById("body")
var mainContent = document.getElementById("main-content")
var toggleSideBar = document.getElementById("toggleSideBars")
var carBtn = document.getElementById("carBtn")
toggleDark.addEventListener("click",()=>{
  sideBarContent.classList.toggle("valid")
  body.classList.toggle("active")
  mainContent.classList.toggle("active")
  toggleSideBar.classList.toggle("active")
  carBtn.classList.toggle("active")
})




 //likes counter
 var counter=document.getElementById("likes-counter")
 var like=document.getElementById("like")
 var counter1=document.getElementById("likes-counter1")
 var like1=document.getElementById("like1")
 var counter2=document.getElementById("likes-counter2")
 var like2=document.getElementById("like2")
 var counter3=document.getElementById("likes-counter3")
 var like3=document.getElementById("like3")
 var counter4=document.getElementById("likes-counter4")
 var like4=document.getElementById("like4")
 var counter5=document.getElementById("likes-counter5")
 var like5=document.getElementById("like5")
 var counter6=document.getElementById("likes-counter6")
 var like6=document.getElementById("like6")
 var counter7=document.getElementById("likes-counter7")
 var like7=document.getElementById("like7")
 var counter8=document.getElementById("likes-counter8")
 var like8=document.getElementById("like8")
 var counter9=document.getElementById("likes-counter9")
 var like9=document.getElementById("like9")
 var counter10=document.getElementById("likes-counter10")
 var like10=document.getElementById("like10")
 var counter11=document.getElementById("likes-counter11")
 var like11=document.getElementById("like11")
 var counter12=document.getElementById("likes-counter12")
 var like12=document.getElementById("like12")
 var counter13=document.getElementById("likes-counter13")
 var like13=document.getElementById("like13")
 var counter14=document.getElementById("likes-counter14")
 var like14=document.getElementById("like14")
 var previousTarget=null;
 var previousTarget1=null;
 var previousTarget2=null;
 var previousTarget3=null;
 var previousTarget4=null;
 var previousTarget5=null;
 var previousTarget6=null;
 var previousTarget7=null;
 var previousTarget8=null;
 var previousTarget9=null;
 var previousTarget10=null;
 var previousTarget11=null;
 var previousTarget12=null;
 var previousTarget13=null;
 var previousTarget14=null;
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

 like1.addEventListener("click",()=>{
  if(this===previousTarget1) {
      alert("Oops!! , you can't unlike this Blog");
      counter1.innerHTML;
  }
  else{
      counter1.innerHTML ++;
      like1.classList.add("valid")
      previousTarget1=this;
      return true;

  }
 
})

like2.addEventListener("click",()=>{
  if(this===previousTarget2) {
      alert("Oops!! , you can't unlike this Blog");
      counter2.innerHTML;
  }
  else{
      counter2.innerHTML ++;
      like2.classList.add("valid")
      previousTarget2=this;
      return true;

  }
 
})

like3.addEventListener("click",()=>{
  if(this===previousTarget3) {
      alert("Oops!! , you can't unlike this Blog");
      counter3.innerHTML;
  }
  else{
      counter3.innerHTML ++;
      like3.classList.add("valid")
      previousTarget3=this;
      return true;

  }
 
})

like4.addEventListener("click",()=>{
  if(this===previousTarget4) {
      alert("Oops!! , you can't unlike this Blog");
      counter4.innerHTML;
  }
  else{
      counter4.innerHTML ++;
      like4.classList.add("valid")
      previousTarget4=this;
      return true;

  }
 
})

like5.addEventListener("click",()=>{
  if(this===previousTarget5) {
      alert("Oops!! , you can't unlike this Blog");
      counter5.innerHTML;
  }
  else{
      counter5.innerHTML ++;
      like5.classList.add("valid")
      previousTarget5=this;
      return true;

  }
 
})

like6.addEventListener("click",()=>{
  if(this===previousTarget6) {
      alert("Oops!! , you can't unlike this Blog");
      counter6.innerHTML;
  }
  else{
      counter6.innerHTML ++;
      like6.classList.add("valid")
      previousTarget6=this;
      return true;

  }
 
})

like7.addEventListener("click",()=>{
  if(this===previousTarget7) {
      alert("Oops!! , you can't unlike this Blog");
      counter7.innerHTML;
  }
  else{
      counter7.innerHTML ++;
      like7.classList.add("valid")
      previousTarget7=this;
      return true;

  }
 
})

like8.addEventListener("click",()=>{
  if(this===previousTarget8) {
      alert("Oops!! , you can't unlike this Blog");
      counter8.innerHTML;
  }
  else{
      counter8.innerHTML ++;
      like8.classList.add("valid")
      previousTarget8=this;
      return true;

  }
 
})

like9.addEventListener("click",()=>{
  if(this===previousTarget9) {
      alert("Oops!! , you can't unlike this Blog");
      counter9.innerHTML;
  }
  else{
      counter9.innerHTML ++;
      like9.classList.add("valid")
      previousTarget9=this;
      return true;

  }
 
})

like10.addEventListener("click",()=>{
  if(this===previousTarget10) {
      alert("Oops!! , you can't unlike this Blog");
      counter10.innerHTML;
  }
  else{
      counter10.innerHTML ++;
      like10.classList.add("valid")
      previousTarget10=this;
      return true;

  }
 
})

like11.addEventListener("click",()=>{
  if(this===previousTarget11) {
      alert("Oops!! , you can't unlike this Blog");
      counter11.innerHTML;
  }
  else{
      counter11.innerHTML ++;
      like11.classList.add("valid")
      previousTarget11=this;
      return true;

  }
 
})

like12.addEventListener("click",()=>{
  if(this===previousTarget12) {
      alert("Oops!! , you can't unlike this Blog");
      counter12.innerHTML;
  }
  else{
      counter12.innerHTML ++;
      like12.classList.add("valid")
      previousTarget12=this;
      return true;

  }
 
})

like13.addEventListener("click",()=>{
  if(this===previousTarget13) {
      alert("Oops!! , you can't unlike this Blog");
      counter13.innerHTML;
  }
  else{
      counter13.innerHTML ++;
      like13.classList.add("valid")
      previousTarget13=this;
      return true;

  }
 
})

like14.addEventListener("click",()=>{
  if(this===previousTarget14) {
      alert("Oops!! , you can't unlike this Blog");
      counter14.innerHTML;
  }
  else{
      counter14.innerHTML ++;
      like14.classList.add("valid")
      previousTarget14=this;
      return true;

  }
 
})






 //seen counter
 var previousTarget00=null;
 var seen=document.getElementById("seen")
 var seenCounter = document.getElementById("seen-counter")
 var previousTarget01=null;
 var seen1=document.getElementById("seen1")
 var seenCounter1 = document.getElementById("seen-counter1")
 var previousTarget02=null;
 var seen2=document.getElementById("seen2")
 var seenCounter2 = document.getElementById("seen-counter2")
 var previousTarget03=null;
 var seen3=document.getElementById("seen3")
 var seenCounter3 = document.getElementById("seen-counter3")
 var previousTarget04=null;
 var seen4=document.getElementById("seen4")
 var seenCounter4 = document.getElementById("seen-counter4")
 var previousTarget05=null;
 var seen5=document.getElementById("seen5")
 var seenCounter5 = document.getElementById("seen-counter5")
 var previousTarget06=null;
 var seen6=document.getElementById("seen6")
 var seenCounter6 = document.getElementById("seen-counter6")
 var previousTarget07=null;
 var seen7=document.getElementById("seen7")
 var seenCounter7 = document.getElementById("seen-counter7")
 var previousTarget08=null;
 var seen8=document.getElementById("seen8")
 var seenCounter8 = document.getElementById("seen-counter8")
 var previousTarget09=null;
 var seen9=document.getElementById("seen9")
 var seenCounter9 = document.getElementById("seen-counter9")
 var previousTarget010=null;
 var seen10=document.getElementById("seen10")
 var seenCounter10 = document.getElementById("seen-counter10")
 var previousTarget011=null;
 var seen11=document.getElementById("seen11")
 var seenCounter11 = document.getElementById("seen-counter11")
 var previousTarget012=null;
 var seen12=document.getElementById("seen12")
 var seenCounter12 = document.getElementById("seen-counter12")
 var previousTarget013=null;
 var seen13=document.getElementById("seen13")
 var seenCounter13 = document.getElementById("seen-counter13")
 var previousTarget014=null;
 var seen14=document.getElementById("seen14")
 var seenCounter14 = document.getElementById("seen-counter14")

 seen.addEventListener("click",()=>{
 if(this===previousTarget00) {
     alert("Oops!! , you can't unseen this Blog");
     seenCounter.innerHTML;
 }
 else{
     seenCounter.innerHTML ++;
     seen.classList.add("valid")
     previousTarget00=this;
     return true;

 }

})
seen1.addEventListener("click",()=>{
if(this===previousTarget01) {
    alert("Oops!! , you can't unseen this Blog");
    seenCounter1.innerHTML;
}
else{
    seenCounter1.innerHTML ++;
    seen1.classList.add("valid")
    previousTarget01=this;
    return true;

}

})
seen2.addEventListener("click",()=>{
if(this===previousTarget02) {
    alert("Oops!! , you can't unseen this Blog");
    seenCounter2.innerHTML;
}
else{
    seenCounter2.innerHTML ++;
    seen2.classList.add("valid")
    previousTarget02=this;
    return true;

}

})
seen3.addEventListener("click",()=>{
if(this===previousTarget03) {
    alert("Oops!! , you can't unseen this Blog");
    seenCounter3.innerHTML;
}
else{
    seenCounter3.innerHTML ++;
    seen3.classList.add("valid")
    previousTarget03=this;
    return true;

}

})
seen4.addEventListener("click",()=>{
if(this===previousTarget04) {
    alert("Oops!! , you can't unseen this Blog");
    seenCounter4.innerHTML;
}
else{
    seenCounter4.innerHTML ++;
    seen4.classList.add("valid")
    previousTarget04=this;
    return true;

}

})
seen5.addEventListener("click",()=>{
if(this===previousTarget05) {
    alert("Oops!! , you can't unseen this Blog");
    seenCounter5.innerHTML;
}
else{
    seenCounter5.innerHTML ++;
    seen5.classList.add("valid")
    previousTarget05=this;
    return true;

}

})
seen6.addEventListener("click",()=>{
if(this===previousTarget06) {
    alert("Oops!! , you can't unseen this Blog");
    seenCounter6.innerHTML;
}
else{
    seenCounter6.innerHTML ++;
    seen6.classList.add("valid")
    previousTarget06=this;
    return true;

}

})
seen7.addEventListener("click",()=>{
if(this===previousTarget07) {
    alert("Oops!! , you can't unseen this Blog");
    seenCounter7.innerHTML;
}
else{
    seenCounter7.innerHTML ++;
    seen7.classList.add("valid")
    previousTarget07=this;
    return true;

}

})
seen8.addEventListener("click",()=>{
if(this===previousTarget08) {
    alert("Oops!! , you can't unseen this Blog");
    seenCounter8.innerHTML;
}
else{
    seenCounter8.innerHTML ++;
    seen8.classList.add("valid")
    previousTarget08=this;
    return true;

}

})
seen9.addEventListener("click",()=>{
if(this===previousTarget09) {
    alert("Oops!! , you can't unseen this Blog");
    seenCounter9.innerHTML;
}
else{
    seenCounter9.innerHTML ++;
    seen9.classList.add("valid")
    previousTarget09=this;
    return true;

}

})
seen10.addEventListener("click",()=>{
if(this===previousTarget010) {
    alert("Oops!! , you can't unseen this Blog");
    seenCounter10.innerHTML;
}
else{
    seenCounter10.innerHTML ++;
    seen10.classList.add("valid")
    previousTarget010=this;
    return true;

}

})
seen11.addEventListener("click",()=>{
if(this===previousTarget011) {
    alert("Oops!! , you can't unseen this Blog");
    seenCounter11.innerHTML;
}
else{
    seenCounter11.innerHTML ++;
    seen11.classList.add("valid")
    previousTarget011=this;
    return true;

}

})
seen12.addEventListener("click",()=>{
if(this===previousTarget012) {
    alert("Oops!! , you can't unseen this Blog");
    seenCounter12.innerHTML;
}
else{
    seenCounter12.innerHTML ++;
    seen12.classList.add("valid")
    previousTarget012=this;
    return true;

}

})
seen13.addEventListener("click",()=>{
if(this===previousTarget013) {
    alert("Oops!! , you can't unseen this Blog");
    seenCounter13.innerHTML;
}
else{
    seenCounter13.innerHTML ++;
    seen13.classList.add("valid")
    previousTarget013=this;
    return true;

}

})
seen14.addEventListener("click",()=>{
if(this===previousTarget014) {
    alert("Oops!! , you can't unseen this Blog");
    seenCounter14.innerHTML;
}
else{
    seenCounter14.innerHTML ++;
    seen14.classList.add("valid")
    previousTarget014=this;
    return true;

}

})
