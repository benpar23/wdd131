const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener('click', function () {
    
    if (input.value.trim() !== '') {

        displayList(input.value);

        chaptersArray.push(input.value);

        setChapterList();

        input.value = '';

        input.focus();
    }
})

input.addEventListener('keypress', function (e) {
    
    if (e.key === "Enter" && input.value.trim() !== '') {

        button.click();
    }
})


let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
})

function displayList(item) {
    
    const li = document.createElement('li');

    const deleteButton = document.createElement('button');

    li.textContent = item;

    deleteButton.textContent = "❌";

    deleteButton.classList.add("delete");

    li.append(deleteButton);

    list.append(li);

    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    })
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}
