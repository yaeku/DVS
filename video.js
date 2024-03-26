window._wq = window._wq || [];
_wq.push({ id: 'hwvxkjp65l', onReady: function(video) {
  console.log("I got a handle to the video!", video);
}});

$("#play").click(function () {
    _wq.push({
        id: "hwvxkjp65l", onReady: function (video) {
            video.play();
            video.unmute();
        }
    });
})