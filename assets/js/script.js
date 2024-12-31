function handleUpload() {
    const fileInput = document.getElementById('videoFile');
    const gallery = document.getElementById('videoGallery');

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const videoURL = URL.createObjectURL(file);

        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';

        videoCard.innerHTML = `
            <img src="assets/images/thumbnail-placeholder.png" alt="Thumbnail">
            <div class="details">
                <p>${file.name}</p>
                <video controls src="${videoURL}" style="width:100%;"></video>
                <button onclick="deleteVideo(this)">Delete</button>
            </div>
        `;

        gallery.appendChild(videoCard);
        fileInput.value = ""; // Reset input
    } else {
        alert('Please select a video file to upload.');
    }
}

function deleteVideo(button) {
    const videoCard = button.parentElement.parentElement;
    videoCard.remove();
}

function logout() {
    alert('Logging out! This feature requires authentication backend integration.');
}