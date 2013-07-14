function photo_onSuccess(imageData) {
    var image = document.getElementById('selectedImage');
    image.src = "data:image/jpeg;base64," + imageData;
}

function photo_onFail(message) {
    alert('Failed because: ' + message);
}