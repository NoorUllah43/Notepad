const textarea = document.querySelector("#textarea");
let openFileBtn = document.querySelector("#openFileBtn");
let saveFileBtn = document.querySelector("#saveFileBtn");
let saveAsFileBtn = document.querySelector("#saveAsFileBtn");


let fileHandle;
async function openFile() {
    [fileHandle] = await window.showOpenFilePicker();
    let fileData = await fileHandle.getFile();
    let text = await fileData.text();
    // console.log(fileData);
    // console.log(text);
    textarea.value = text;
}

async function save() {
    let saveFile = await fileHandle.createWritable();
    await saveFile.write(textarea.value);
    await saveFile.close();
}

async function saveAs() {
    fileHandle = await window.showSaveFilePicker()
    save();
}
openFileBtn.addEventListener('click', openFile);
saveFileBtn.addEventListener('click', save);
saveAsFileBtn.addEventListener('click', saveAs);