//Select and declare var for future uses
var buttons = document.querySelectorAll('.btn');
var cards = document.querySelectorAll('.item');
var title = document.querySelectorAll('.text-center');
var searchBar = document.querySelector('input');
var image = document.querySelectorAll('img');

// To capitalize the first lettter of title
function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
}

//When user click on button
buttons.forEach(function(button){
    button.addEventListener('click',function(){
        var btnClick = button.textContent.toLowerCase();
        if (btnClick == 'all'){
            title[1].textContent="Member"
            cards.forEach(function(card){
                card.style.display = 'block';
            })
        }else {
            cards.forEach(function(card){
                if (card.classList.contains(btnClick)){
                    card.style.display = 'block';
                }else{
                    card.style.display = 'none';
                }
            })
            title[1].textContent=capitalize(btnClick)
        }
    });
})

// Search box
searchBar.onkeyup=function() {
    var inputText = searchBar.value.toLowerCase();
    var i = 0
    cards.forEach(function(element){
    if (inputText == ""){
        cards.forEach(function(element){
        element.style.display="block";})
    }else if (element.textContent.toLowerCase().includes(inputText)){
        cards[i].style.display = 'block'
    }else{
        cards[i].style.display = 'none'
    }
    i++
    })
    }    

// Change height when mouse hover over
image.forEach(function (element) {
    element.addEventListener("mouseover", myMouseover);
     function myMouseover() {
     this.style.height="70%";
     this.style.width="100%";
     this.style.filter="grayscale(100%)";
 }
 element.addEventListener("mouseout", myMouseout);
     function myMouseout() {
     this.style.height="55%";
     
     this.style.width="100%";
     this.style.filter="grayscale(0%)";
 }
 })
