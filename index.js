
const bodyEl= document.querySelector('body')

bodyEl.addEventListener('mousemove', (event) => {
        let x= event.offsetX
        let y= event.offsetY
        const spanEl= document.createElement('span')
        bodyEl.appendChild(spanEl)
        //positioning the span
        spanEl.style.left= x + 'px'
        spanEl.style.top= y + 'px'
        //setting the height and width randomly
        //remove the pre assigned height and with in css
        const size = Math.random() * 100
        spanEl.style.height= size + 'px'
        spanEl.style.width= size + 'px'
       //to remove the hearts otherwise messy
       setTimeout(()=>{
        spanEl.remove();
       }, 3000)

})

