let filterInput = document.querySelector('#filter-input');

filterInput.addEventListener('keyup', filterWords);

function filterWords() {
    let filterValue = document.querySelector('#filter-input').value.toUpperCase();
    let filterValueNormalized = filterValue.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // get the ul
    let ul = document.querySelector('#words');
    // get li items from ul
    let li = ul.querySelectorAll('li.item');
    
    // loop through collection item lis

    for(let i = 0; i < li.length; i++) {
        let p = li[i].getElementsByTagName('p')[0] // use current iteration of li by using [i]

        let pUppercase = p.innerHTML.toUpperCase();
        let pNormalized = pUppercase.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        // p.innerHTML grabs whatever is inside the p tag
        // greater than -1 means that there's a match
        if(pNormalized.indexOf(filterValueNormalized) > -1 || pNormalized.indexOf(filterValue) > -1) {

            li[i].style.display = ''; // does nothing

        } else {
            li[i].style.display = 'none'; // makes non-matches disappear
        }
    }
}

var myArray = [
    'Mëër: Love',
    'A: I',
    'Aani: I, I am, me',
    'Beer: Good',
    'Aay: Go',
    'Abäc: Corn, Maize',
    'Abäga: Yellow',
    'Abära: Eight',
    'Abïciel: Six',
    "Abïëp: Trap for birds",
    'Abïï: Cloth',
    'Abïïc: Five',
    'Abïngween: Nine',
    'Abïreø: Seven',
    'Aciel: One',
    'Abööngö: 1. Pelican, 2. One litre glass bottle',
    'Abøøya: Afternoon',
    'Abungngö: Shrub',
    'Acaara: Idea, Thought, Opinion, Suggestion',
    'Acääp: Mathematics',
    'Ääm: Thigh',
    'Äp: Kindling, starting a fire',
    'Athulbuk: Tax',
    'Ba: But',
    'Baabura: 1. Cassava, 2. Mill',
    'Bung: Nothing',
    'Cøøna: Basket',
    'Guur-tøng: Peace agreement (lit. "To blunt the spear")',
    'Gwäc: Gender',
    'Køøl kääny: Bridewealth payment',
    'Nyikeenø, Royal Cook',
    'Pïny: Earth',
    'Dhaanhø: Person',
    'Adëëdi: Truth',
    'Jwøk: God',
    'Dwättö: Unity',
    'Käc: Hunger',
    'Paac: Village',
    'Kiper: For',
    'Teek: Strong',
    'Kööngngö: Culture, Way of Life',
    'Tïïc: Work',
    'Duut: Song',
    'Thoom: Thumb Piano',
    'Buul: Drum',
    'Therø: Little',
    'Mïërö: Beautiful'
]

function sortArray() {
    sortedArray = myArray.sort(new Intl.Collator().compare);

    for(x = 0; x < myArray.length; x++) {
        var ulWords = document.querySelector('#words');

        var newLi = document.createElement('li');
        newLi.classList.add('item');

        newLi.innerHTML = `
            <p>${myArray[x]}</p>
        `
        ulWords.appendChild(newLi);
    }
}

sortArray();