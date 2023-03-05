document.getElementById('btn').addEventListener('click', function(e){
    e.preventDefault()
    getColorsFromApi()
})

getColorsFromApi() {
    const seedColor = document.getElementById('color-picker').value
    const scheme = document.getElementById('scheme-picker').value

    fetch(`https://www.thecolorapi.com/schemes?hex=${seedColor.slice(1,7)}&mode=${scheme}`)
        .then(res => res.json())
        .then(data => {
            let colorArray = []
            for (let i=0; i<data.colors.length; i++){
                colorArray.push(data.colors[i].hex.value)
            }
            let html = ''
            for (let color of colorArray){
                html +=`
                <div class="mid-section">
                <div id="color-block" class="color-block" style="background-color:${color}"></div>
                <p>${color}</p>
                </div>`
            }
            
            document.querySelector('main').innerHTML = html
        })
}

    

