//get slider items | array.from  [es6 feature]
var sliderImages = Array.from(document.querySelectorAll(".slider-container img"))

//get number of slides
var slidesCount = sliderImages.length

//set current slide
var currentslide = 1

//slide number  element [#2]
var slideNumberElement = document.getElementById("slide-number")

//previous and next buttons
let prevButton = document.getElementById("prev")
let nextButton = document.getElementById("next")

//handle click on previous and next buttons
nextButton.onclick = nextSlide
prevButton.onclick = prevSlide

//craet the main ul element
var paginationElement = document.createElement("ul")

//set id on created ul element
paginationElement.setAttribute("id","pagination-ul")

//creat list items based on slides count
 for (var i = 1; i<= slidesCount; i++ ){

//creat the li
var paginationItem = document.createElement("li")


//set custom attribute 
paginationItem.setAttribute("data-index", i)

//set item content
paginationItem.appendChild(document.createTextNode(i))

//append items to the main ul list
paginationElement.appendChild(paginationItem)
 }

//add the created ul elemet to the page
document.getElementById("indicators").appendChild(paginationElement)

//get the new created ul
var paginationCreatedUl= document.getElementById("pagination-ul")

//get paginations items| array.from  [es6 feature]
var paginationsbullets = Array.from(document.querySelectorAll("#pagination-ul li"))

//loop through all bullets items
for(var i = 0; i<paginationsbullets.length; i++ ){
paginationsbullets[i].onclick= function(){
    currentslide= parseInt(this.getAttribute("data-index"))
    theChecker() 
}
}

//trigger the checker function
theChecker() 

//next slide function
function nextSlide (){
  if(nextButton.classList.contains("disabled")){
//return nothing
return false
  }else{
    currentslide++;

    theChecker() 
  }
}

//previous slide function
function prevSlide(){
    if(prevButton.classList.contains("disabled")){
        //return nothing
        return false
          }else{
            currentslide--;
        
            theChecker() 
          }
}

//creat the checker function 
function theChecker(){

    //set the slide number
    slideNumberElement.textContent = 'Slide #' + (currentslide) + ' of ' + (slidesCount);

 //remove all all active classes
 removeallactive()

//set active class on current slide
sliderImages[currentslide - 1].classList.add("active")

 //set active class on current pagination items
 paginationCreatedUl.children[currentslide - 1].classList.add("active")

//check if current slide is the first
if(currentslide == 1){
//add disabled class on previous button
prevButton.classList.add("disabled")
}else{
    
//remove disabled class from previous button
prevButton.classList.remove("disabled")
}
//check if current slide is the last
if(currentslide == slidesCount){
//add disabled class on previous button
nextButton.classList.add("disabled")
}else{
    
//remove disabled class from previous button
nextButton.classList.remove("disabled")
}
}

//remove all active classes form images and bullets
function removeallactive(){

    //loop through images
    sliderImages.forEach(function(img){

img.classList.remove("active")
    })
    
    //loop through pagination bullets
    paginationsbullets.forEach(function(bullet){

        bullet.classList.remove("active")
    })
}
