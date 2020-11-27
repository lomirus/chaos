window.addEventListener('resize', function () {
    canvas.width = document.body.offsetWidth - 2
    canvas.height = window.innerHeight
})

const canvas = document.querySelector('canvas')
canvas.width = document.body.offsetWidth - 2
canvas.height = window.innerHeight

const context = canvas.getContext('2d')
const workers = new Array()
for (let i = 0; i < 8; i++) {
    workers[i] = new Worker('worker.js')
    workers[i].addEventListener('message', event =>
        context.putImageData(event.data, 0, 0)
    )
}


setInterval(function () {
    for(let i = 0; i < 8; i++){
        setTimeout(function(){
            imageData = context.createImageData(canvas.width, canvas.height)
            workers[i].postMessage(imageData)
        }, i*30)
    }
    
}, 240)


