// Your code goes here

//1 Make 'About Us' go to about.html on mouse click
const myA = document.querySelectorAll('a');
const myAbout = myA[1];
myAbout.addEventListener('click', (event) => {
myAbout.href = 'about.html'
})
// end about mouse click

//2 make H tag text turn red when mouse passes over form
// and turn black if already red
const myH = document.querySelectorAll('h1, h2, h3, h4, h5');
document.addEventListener("mouseenter", function( event ) {   
    // highlight the mouseenter target
    for ( i = 0; i < (myH.length - 1); i++)
    if( myH[i].style.color === "red" )
      { myH[i].style.color = "black"}
    else
      { myH[i].style.color = "red"}
}
)
// end mouse pass over

//3 alert when page is loaded
window.addEventListener('load', (event) => {
    alert('Get Ready For The Fun Bus!!!');
});
// end alert when loaded

//4 keydown on input box toggle background between blue and white
var input = document.createElement("input");
myH[1].appendChild(input) //'<a href="#">More</a>')
const myInput = document.querySelector('input');
myInput.type = 'text';
myInput.name = 'name';
myInput.value = '';
myInput.placeholder = 'Joe';
myInput.style = 'padding: 20px' 
myInput.addEventListener('keydown', (event) => {
    if(event.target.style.backgroundColor === 'blue')
  {
    event.target.style.backgroundColor = 'white';
    event.target.style.color = 'black';
  
  }
    else
    {
      event.target.style.backgroundColor = 'blue';
      event.target.style.color = 'white';
    }
  }
  )
// end keydown on input box toggle background between blue and white

//5 Alert new window view size when resized
function reportWindowSize() {
  alert('Window view size is now ' + window.innerHeight + 'x' +window.innerWidth)
}
window.onresize = reportWindowSize;
// end Alert new window view size when resized

//6 double click on input box toggle background between pink and white
myInput.addEventListener('dblclick', function (evrnt) {
    if(event.target.style.backgroundColor === 'pink')
  {
    event.target.style.backgroundColor = 'white';
    event.target.style.color = 'black';
  
  }
    else
    {
      event.target.style.backgroundColor = 'pink';
      event.target.style.color = 'white';
    }
  }
  )
//end double click on input box toggle background between pink and white

//7 alert when about to print
window.onbeforeprint = (event) => {
    alert('You are about to print this page');
  };
//end alert when about to print

//8 on scrollin toggle background between red and white
const myHtml = document.querySelectorAll('html');
window.addEventListener('scroll', function(event) {
    if(myHtml[0].style.backgroundColor === 'red')
  {
    myHtml[0].style.backgroundColor = 'white';
  }
    else
    {
        myHtml[0].style.backgroundColor = 'red';
    }
});
//end on scrollin toggle background between red and white

//9 put letter typed in input into console log
input.addEventListener('input', function(event) {
  console.log(event.data);
})
//end put letter typed in input into console log

//10 put letters selected in input into console log
input.addEventListener('select',function(event) {
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    console.log(`You selected: ${selection}`)
  })
//end put letters selected in input into console log

// Cancel the event as stated by the standard.
//   event.preventDefault();
  // Chrome requires returnValue to be set.
//   event.returnValue = '';
