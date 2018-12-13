let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

var FilesInLevel = {
    "level1":
        [
            {
                "id": "red",
                "xPosition": 300,
                "yPosition": 710,
                "width": 44,
                "height": 54,
                "fillStyle": "red",
                "level": 1
            },
            {
                "id": "yellow",
                "xPosition": 300,
                "yPosition": 639,
                "width": 44,
                "height": 54,
                "fillStyle": "yellow",
                "level": 1
            },
        ],
    "level2":
        [
            {
                "id": "red.8",
                "xPosition": 281,
                "yPosition": 636,
                "width": 44,
                "height": 54,
                "fillStyle": "#FA6464",
            },
            {
                "id": "orange.2",
                "xPosition": 336,
                "yPosition": 636,
                "width": 44,
                "height": 54,
                "fillStyle": "#FFEBCC",
                "level": 2
            },
            {
                "id": "blue.8",
                "xPosition": 281,
                "yPosition": 707,
                "width": 44,
                "height": 54,
                "fillStyle": "#3333FF",
                "level": 2
            },
            {
                "id": "purple",
                "xPosition": 336,
                "yPosition": 707,
                "width": 44,
                "height": 54,
                "fillStyle": "#9B00FF",
                "level": 2
            }
        ]
};
var FoldersInLevel = {
    "level1":
        [
            {
                "id": "red",
                "xPosition": 110,
                "yPosition": 720,
                "width": 54,
                "height": 44,
                "fillStyle": "red",
            },
            {
                "id": "yellow",
                "xPosition": 153,
                "yPosition": 608,
                "width": 54, "height": 44,
                "fillStyle": "yellow",
            },
            {
                "id": "blue",
                "xPosition": 275,
                "yPosition": 532,
                "width": 54,
                "height": 44,
                "fillStyle": "blue",
            }
        ],
    "level2":
        [
            {
                "id": "orange",
                "xPosition": 132,
                "yPosition": 663,
                "width": 54,
                "height": 44,
                "fillStyle": "orange",
                "level": 2
            },

            {
                "id": "green",
                "xPosition": 209,
                "yPosition": 564,
                "width": 54, "height": 44,
                "fillStyle": "#85FF00",
                "level": 2
            },
            {
                "id": "purple",
                "xPosition": 343,
                "yPosition": 507,
                "width": 54, "height": 44,
                "fillStyle": "#9B00FF",
                "level": 2
            }
        ]
};

const renderFiles = () => {
    for (var i = 0; i < FilesInLevel.level1.length; i++) {
        var file = FilesInLevel.level1[i];
        ctx.fillStyle = file.fillStyle;
        ctx.fillRect(file.xPosition, file.yPosition, file.width, file.height);
    };
};

const renderFolders = () => {
    for (var i = 0; i < FoldersInLevel.level1.length; i++) {
        var folder = FoldersInLevel.level1[i];
        ctx.fillStyle = folder.fillStyle;
        ctx.fillRect(folder.xPosition, folder.yPosition, folder.width, folder.height);
    };
};

var selectedFile = [
];
var selectedFolder = [
];
const onMouseDown = (event) => {
    let bound = canvas.getBoundingClientRect();

    // Mouse X and Y
    let mouseXPosition = event.pageX - bound.top;
    let mouseYPosition = event.pageY - bound.left;

    for (var i = 0; i < FilesInLevel.level1.length; i++) {
        var file = FilesInLevel.level1[i];
        if (mouseXPosition >= file.xPosition && mouseXPosition < file.xPosition + file.width && mouseYPosition >= file.yPosition && mouseYPosition < file.yPosition + file.height) {
            selectedFile.push(file.fillStyle);
            console.log(selectedFile);
            // ctx.fillStyle = file.fillStyle;
            // ctx.fillRect(mouseXPosition, mouseYPosition, file.width, file.height);
            // document.getElementById('status').innerHTML = "you touched the " + file.id + " file"
        };
    };

    for (var i = 0; i < FoldersInLevel.level1.length; i++) {
        var folder = FoldersInLevel.level1[i];
        if (mouseXPosition >= folder.xPosition && mouseXPosition < folder.xPosition + folder.width && mouseYPosition >= folder.yPosition && mouseYPosition < folder.yPosition + file.height) {
            selectedFolder.push(folder.fillStyle);
            console.log(selectedFolder);
            // ctx.fillStyle = file.fillStyle;
            // ctx.fillRect(mouseXPosition, mouseYPosition, file.width, file.height);
            // document.getElementById('status').innerHTML = "you touched the " + file.id + " file"
        };
    };
};

const removeMatch = (selectedFile, selectedFolder) => {
    if (JSON.stringify(selectedFile) === JSON.stringify(selectedFolder)) {
        console.log('They are equal!');
    }
    // if (selectedFile[0] === selectedFolder[0]) {
    //     FilesInLevel.level1.splice(1, 1);
    //     console.log("test");
    // }
}

const step = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    renderFiles();
    renderFolders();
    onMouseDown();
    removeMatch(selectedFile, selectedFolder);
    window.requestAnimationFrame(step);
};

document.addEventListener("mousedown", onMouseDown);
window.requestAnimationFrame(step);


