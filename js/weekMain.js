const allFolder = [

    { name: `Week01`,  class: ["cssbtn", "htmlbtn", "assignmentsbtn", "importantbtn"] },
    { name: `Week02`,  class: ["cssbtn", "htmlbtn", "jsbtn"] },
    { name: `Week03`,  class: ["newbtn", "htmlbtn", "jsbtn"] },
    { name: `Week04`,  class: ["cssbtn", "htmlbtn", "newbtn"] },
    { name: `Week05`,  class: ["cssbtn", "jsbtn", "importantbtn"] },

];

function printsFolder(folder) {
  console.log(folder.class)
    return `
        <div class="folders">
            <span class="image">
            <p>${folder.name}</p>
            </span>
        </div>`;
}

document.getElementById('notes').addEventListener('change', event => {

    if (!event.target.matches('input')) return;
    printsAllFolders(event.target.value);
});


function printsAllFolders(filterNotesBy = "") {

    let filteredFolders = [...allFolder];

    //const filterNotesBy = document.getElementById('notes').notes.value;
    //console.log(filterNotesBy, filteredFolders);
    if (filterNotesBy != "")
        filteredFolders = filteredFolders.filter(folder => folder.class.includes(filterNotesBy));
    //console.log(filterNotesBy, filteredFolders);

    document.getElementById('all-folders').innerHTML = filteredFolders.map(folder => printsFolder(folder)).join('')

}

printsAllFolders();

document.getElementById("cssbtn").addEventListener("click", myFunction);

function myFunction() {

}
