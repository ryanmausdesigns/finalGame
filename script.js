let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

var FoldersInLevel = {
    "level1":
        [
            {
                "id": "level1",
                "xPosition": 10,
                "yPosition": 10,
                "width": 200,
                "height": 780,
                "fillStyle": "red",
            },
            {
                "xPosition": 220,
                "yPosition": 10,
                "width": 100,
                "height": 780,
                "fillStyle": "yellow",
            },
            {
                "xPosition": 330,
                "yPosition": 10,
                "width": 60,
                "height": 780,
                "fillStyle": "blue",
            }
            // ,
            // {
            //     "id": "yellow",
            //     "xPosition": 153,
            //     "yPosition": 608,
            //     "width": 54, "height": 44,
            //     "fillStyle": "yellow",
            // },
            // {
            //     "id": "blue",
            //     "xPosition": 275,
            //     "yPosition": 532,
            //     "width": 54,
            //     "height": 44,
            //     "fillStyle": "blue",
            // }
        ],
    "level2":
        [
            {
                "id": "red1",
                "xPosition": 20,
                "yPosition": 546,
                "width": 133, "height": 233,
                "fillStyle": "#FFB3B3",
            },

            {
                "id": "red2",
                "xPosition": 20,
                "yPosition": 283,
                "width": 133, "height": 253,
                "fillStyle": "#FF8080",
                "level": 2
            },
            {
                "id": "level1",
                "xPosition": 20,
                "yPosition": 20,
                "width": 133,
                "height": 253,
                "fillStyle": "#FF4C4C",
                "level": 2,
                "id2": "level2"

            }
        ],
    "level3":
        [
            {
                "id": "red1",
                "xPosition": 30,
                "yPosition": 30,
                "width": 88, "height": 71,
                "fillStyle": "#6A2A2A",
                "level": 3
            },
            {
                "id": "red1",
                "xPosition": 30,
                "yPosition": 111,
                "width": 88, "height": 71,
                "fillStyle": "#742E2E",
                "level": 3
            },
            {
                "id": "red1",
                "xPosition": 30,
                "yPosition": 192,
                "width": 88, "height": 71,
                "fillStyle": "#5D2525",
                "level": 3,
                "id3": "level3"
            }
        ]
};

var FilesInLevel = {
    "level1":
        [
            {
                "fillStyle": "#DA5656",
                "id": "level1",
                "id2": "level2",
                "id3": "level3",
            },
        ]
}

const renderFolders = () => {
    for (var i = 0; i < FoldersInLevel.level1.length; i++) {
        var folder = FoldersInLevel.level1[i];
        ctx.fillStyle = folder.fillStyle;
        ctx.fillRect(folder.xPosition, folder.yPosition, folder.width, folder.height);
    };
    ctx.font = "12px arial"
    ctx.fillText("push", 230, 610);
    ctx.fillText("arrows to move", 230, 630);
    ctx.fillText("r to reset", 230, 650);
    ctx.fillText("level 1", 230, 500);
    ctx.fillText("which hue?", 230, 530);
};

fileXPosition = 230;
fileYPosition = 710;
let speed = 5;

const renderFile = (x, y) => {
    ctx.fillStyle = "#5D2525"
    ctx.fillRect(x, y, 44, 44)
};

const renderSecondLevelFolders = () => {
    for (var i = 0; i < FoldersInLevel.level2.length; i++) {
        var folder = FoldersInLevel.level2[i];
        ctx.fillStyle = folder.fillStyle;
        ctx.fillRect(folder.xPosition, folder.yPosition, folder.width, folder.height);
        ctx.fillStyle = "yellow";
        ctx.fillRect(230, 450, 80, 100)
        ctx.font = "12px Arial";
        ctx.fillStyle = "blue";
        ctx.fillText("level 2", 230, 500);
        ctx.fillText("which tint?", 230, 530);

    };

};

const renderThirdLevelFolders = () => {
    for (var i = 0; i < FoldersInLevel.level3.length; i++) {
        var folder = FoldersInLevel.level3[i];
        ctx.fillStyle = folder.fillStyle;
        ctx.fillRect(folder.xPosition, folder.yPosition, folder.width, folder.height);
        ctx.fillStyle = "yellow";
        ctx.fillRect(230, 450, 80, 100)
        ctx.font = "12px Arial";
        ctx.fillStyle = "blue";
        ctx.fillText("level 3", 230, 500);
        ctx.fillText("which shade?", 230, 530);

    };
};

const renderCongrats = () => {
    ctx.font = "12px Arial";
    ctx.fillStyle = "blue";
    ctx.fillText("you matched", 230, 50);
    ctx.fillText("the color", 230, 100);
    ctx.fillText("thru 3", 230, 150);
    ctx.fillText("diff levels!", 230, 200);
    ctx.fillText("wow!", 230, 250);
    ctx.fillStyle = "yellow";
    ctx.fillRect(230, 450, 80, 100)
}


const step = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    renderFolders();
    renderFile(fileXPosition, fileYPosition);
    progress();
    renderFile(fileXPosition, fileYPosition);
    window.requestAnimationFrame(step);
};

const onKeyDown = (event) => {
    let key = event.key
    if (key == "ArrowUp") {
        fileYPosition += -1 * speed;
    }
    if (key == "ArrowDown") {
        fileYPosition += 1 * speed;
    }
    if (key == "ArrowLeft") {
        fileXPosition += -1 * speed;
    }
    if (key == "ArrowRight") {
        fileXPosition += 1 * speed;
    }
    if (key == "r") {
        fileXPosition = 230
        fileYPosition = 710
    }
}

const progress = () => {
    for (var i = 0; i < FoldersInLevel.level1.length; i++) {
        const folder = FoldersInLevel.level1[i];
        if (fileXPosition >= folder.xPosition && fileXPosition < folder.xPosition + folder.width && fileYPosition >= folder.yPosition && fileYPosition < folder.yPosition + folder.height) {
            for (var i = 0; i < FilesInLevel.level1.length; i++) {
                const file = FilesInLevel.level1[i];
                if (folder.id === file.id) {
                    renderSecondLevelFolders()
                    for (var i = 0; i < FoldersInLevel.level2.length; i++) {
                        const folder2 = FoldersInLevel.level2[i];
                        if (fileXPosition >= folder2.xPosition && fileXPosition < folder2.xPosition + folder2.width && fileYPosition >= folder2.yPosition && fileYPosition < folder2.yPosition + folder2.height) {
                            if (folder2.id2 === file.id2) {
                                renderThirdLevelFolders()
                                for (var i = 0; i < FoldersInLevel.level3.length; i++) {
                                    const folder3 = FoldersInLevel.level3[i];
                                    if (fileXPosition >= folder3.xPosition && fileXPosition < folder3.xPosition + folder3.width && fileYPosition >= folder3.yPosition && fileYPosition < folder3.yPosition + folder3.height) {
                                        if (folder3.id3 === file.id3) {
                                            renderCongrats()
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};

document.addEventListener("keydown", onKeyDown);
window.requestAnimationFrame(step);


