// Your code goes here
    // event.target.style.backgroundColor = 'white';
    // event.target.style.borderColor = 'green';
    // event.target.style.borderStyle = 'solid';

    // 1. double the home item when moused over
    let home = document.querySelector('.nav-link');
    home.addEventListener('mouseover', (event) => {
        event.target.textContent = 'Home Home'
        event.target.style = 'width: 10px;'
      });
    // 2. restore the home item when mouse leaves
    home.addEventListener('mouseleave', (event) => {
        event.target.textContent = 'Home'
      });
    // 3. double the about item when moused over
    let about = document.querySelector('.nav-link:nth-of-type(2)');
      about.addEventListener('mouseover', (event) => {
        event.target.textContent = 'About Us About Us'
        event.target.style = 'width: 10px;'
      });
    // 4. restore the about item when mouse leaves
    about.addEventListener('mouseleave', (event) => {
        event.target.textContent = 'About Us'
      });
    // 5. double the blog item when moused over
    let blog = document.querySelector('.nav-link:nth-of-type(3)');
      blog.addEventListener('mouseover', (event) => {
        event.target.textContent = 'Blog Blog'
        event.target.style = 'width: 10px;'
      });
    // 6. restore the blog item when mouse leaves
    blog.addEventListener('mouseleave', (event) => {
        event.target.textContent = 'Blog'
      });
    // 7. double the contact item when moused over
    let contact = document.querySelector('.nav-link:nth-of-type(4)');
      contact.addEventListener('mouseover', (event) => {
        event.target.textContent = 'Contact Contact'
        event.target.style = 'width: 10px;'
      });
    // 8. restore the contact item when mouse leaves
    contact.addEventListener('mouseleave', (event) => {
        event.target.textContent = 'Contact'
      });
// 9. rotate pictures when scrolled
      let imgs = document.querySelectorAll('img')
      window.addEventListener('scroll', (event) => {
for (i=0, x=''; i<imgs.length; i++)
{
  if (i===0)
  {
    x = imgs[i].src
    imgs[i].src = imgs[i+1].src
  }
else
{
    if (i===imgs.length - 1)
    {imgs[i].src = x }
    else
    { imgs[i].src = imgs[i+1].src }
}
}
})
// 10. save picture paths  and h2 texts on load
let images = []
let h2s = document.querySelectorAll('h2')
let hh =[]
window.addEventListener('load', (event) => {
    for (i=0; i<imgs.length; i++)
     {images.push(imgs[i].src)}
    for (i=0; i<h2s.length; i++)
     {hh.push(h2s[i].textContent)}

})
// 11. restore pictures to original position on click
let html = document.querySelector('html')

html.addEventListener('click', (event) => {
    for (i=0; i<imgs.length; i++)
     {imgs[i].src = images[i]}

})
// 12. on window resize, so height and width
window.addEventListener('resize', (event) => {
    alert(window.innerHeight+ 'x' + window.innerWidth)

})
// 13. give alert message showing what was copied to the clipboard
html.addEventListener('copy', (event) => {
    const selection = document.getSelection();
    alert( selection)
});
// 14. give alert message showing what was copied to the clipboard
html.addEventListener('paste', (event) => {
    const selection = document.getSelection();
    alert( selection)
});
