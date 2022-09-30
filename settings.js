var toggle = true;

function setShowStyle() {
    let mainSheet = $("#stylesheet").attr("href");
    if (mainSheet == "style-night.css") {
        $("#stylesheet").attr("href", "style-light.css");
    } else {
        $("#stylesheet").attr("href", "style-night.css");
    }
    console.log("test");
};

var isPlaying = false;

function setPlay() {
    if (!isPlaying) {
        play();
    } else {
        stop();
    }
}