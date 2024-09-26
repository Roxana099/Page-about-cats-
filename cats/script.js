document.addEventListener("DOMContentLoaded", function () {
    const uploadInput = document.getElementById("cat-upload");
    const catImg = document.getElementById("cat-img");
    const overlay = document.getElementById("overlay");
    const uploadForm = document.getElementById("cat-upload-form");
    const galleryList = document.getElementById("gallery-list");

    uploadInput.addEventListener("change", function () {
        const file = uploadInput.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            catImg.src = e.target.result; 
            overlay.style.display = 'none'; 
            addToGallery(e.target.result); 
        };

        if (file) {
            reader.readAsDataURL(file);
            overlay.style.display = 'flex';
        }
    });

    uploadForm.addEventListener("submit", function (e) {
        e.preventDefault(); 
        alert("Picture uploaded successfully!");
    });

    function addToGallery(imageSrc) {
        const listItem = document.createElement("li");
        const img = document.createElement("img");
        img.src = imageSrc;
        listItem.appendChild(img);
        galleryList.appendChild(listItem);
    }
});
