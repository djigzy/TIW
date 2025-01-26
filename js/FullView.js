function FullView(ImgLink) {
    document.getElementById("FullImage").src = ImgLink;
    document.getElementById("FullImageView").style.display = "flex";
}
function CloseFullView() {
    document.getElementById("FullImageView").style.display = "none";
}