self.addEventListener('message', function (event) {
    let imageData = event.data
    for (let i = 0; i < imageData.width * imageData.height * 4; i += 4) {
        imageData.data[i + 0] = Math.round(Math.random() * 256)
        imageData.data[i + 1] = Math.round(Math.random() * 256)
        imageData.data[i + 2] = Math.round(Math.random() * 256)
        imageData.data[i + 3] = 256
    }
    self.postMessage(imageData)
})