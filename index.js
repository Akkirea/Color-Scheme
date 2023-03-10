const btn = document.getElementById('btn')
const main = document.getElementById('main')

btn.addEventListener('click', function(event){
    event.preventDefault()
    const hex = document.getElementById('selected-color').value.slice(1,7)
    const mode = document.getElementById('scheme-picker').value
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=4`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("color-seed").style.background = "#" + hex
            document.getElementById("hex-seed").textContent = "#" + hex.toUpperCase()
            for(let i=0; i<data.colors.length;i++) {
                document.getElementById(`color-${i+1}`).style.background = data.colors[i].hex.value
                document.getElementById(`hex-${i+1}`).textContent = data.colors[i].hex.value
            }
        })
})




