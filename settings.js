var toggle = true;

function setShowStyle() {
    let mainSheet = $("#stylesheet").attr("href");
    if (mainSheet == "style-night.css") {
        $("#stylesheet").attr("href", "style-light.css");
    } else {
        $("#stylesheet").attr("href", "style-night.css");
    }
};

var isPlaying = false;

function setPlay() {
    if (!isPlaying) {
        if ($("#interval").val() == "") {
            play(100);
        } else {
            play(parseInt($("#interval").val()));
        }
        $("#play").html("stop");
        $("#next").prop("disabled", true);
        $("#interval").prop("disabled", true);
    } else {
        stop();
        $("#play").html("play");
        $("#next").prop("disabled", false);
        $("#interval").prop("disabled", false);
    }
    isPlaying = !isPlaying;
}

function sendArgs() {
    pattern($("#args").val());
    refresh();
}