document.addEventListener("DOMContentLoaded", function() {
    const frames = document.querySelectorAll(".hp-2-blck1");

    frames.forEach(frame => {
        frame.addEventListener("mouseover", () => {
            console.log("Clicked!");
            // setTimeout(() => {
            //     frameAnim(frame);
            // }, 500);
            frameAnim(frame);
        });
    });

    function frameAnim(frame) {
        // frame.querySelector(".frame").style.transform = "scale(1.01)";
        // frame.querySelector(".frame").style.padding = "15px";
        frame.querySelector(".frame").style.transform = "upscale";
    }

    console.log("Hey");
});







document.addEventListener("DOMContentLoaded", function() {
    const frames = document.querySelectorAll(".hp-2-blck1");

    frames.forEach(frame => {
        frame.addEventListener("mouseout", () => {
            console.log("Clicked!");
            // setTimeout(() => {
            //     frameAnim(frame);
            // }, 500);
            frameAnim(frame);
        });
    });

    function frameAnim(frame) {
        // frame.querySelector(".frame").style.transform = "scale(1)";
        // frame.querySelector(".frame").style.padding = "5px";
    }

    console.log("Hey");
});











