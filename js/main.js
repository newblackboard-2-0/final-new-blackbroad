const allFolder = [

    { name: `NOTE 01`, text: `Lorem1`, class: ["cssbtn", "htmlbtn", "importantbtn", "asignmentsbtn"] },
    { name: `NOTE 02`, text: `Lorem2`, class: ["cssbtn", "htmlbtn", "javabtn"] },
    { name: `NOTE 03`, text: `Lorem3`, class: ["asignmentsbtn", "htmlbtn", "javabtn"] },
    { name: `NOTE 04`, text: `Lorem4`, class: ["cssbtn", "htmlbtn", "importantbtn"] },
    { name: `NOTE 05`, text: `Lorem5`, class: ["cssbtn", "importantbtn", "javabtn"] },

];


function printsFolder(folder) {
  console.log(folder.class)
    return `
        <div class="folder">
            <h3 class="notefolder">${folder.name}</h3>
            <p>${folder.text}</p>
            <div class="dots">
                ${ folder.class.map(cat => `<span class="dot ${cat}"></span>`).join(' ')   }
            </div>
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
