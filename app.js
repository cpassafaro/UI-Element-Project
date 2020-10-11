//get access to exit button
let exit = document.querySelector('.exit')
//inside of modal
let modal = document.querySelector('.modal');
//get access to element that blurs our whole background
let backgroundCover = document.querySelector('.modal-overlay')
//get modal guts
let modalGuts = document.querySelector('.modal-guts')

//access to empty image half of modal
let emptyImage = document.querySelector('.modal-image')
//access empty modal title area
let title = document.querySelector('.title')
//access to empty author area
let author = document.querySelector('.author')
//access to empty description area
let description = document.querySelector('.description')



let allTiles = [{
        search: 'gardening',
        element: document.querySelector('.image1')
    }, {
        search: 'murder',
        element: document.querySelector('.image2')
    }, {
        search: 'food',
        element: document.querySelector('.image3')
    },{
        search: 'romance',
        element: document.querySelector('.image4')
    },{
        search:'comedy',
        element: document.querySelector('.image5')
    },{
        search: 'sports',
        element: document.querySelector('.image6')
    }, {
        search: 'war',
        element: document.querySelector('.image7')
    }, {
        search: 'decorations',
        element: document.querySelector('.image8')
    },{
        search: 'clothing',
        element: document.querySelector('.image9')
    },{
        search:'suvival',
        element: document.querySelector('.image10')
    },{
        search: 'fantasy',
        element: document.querySelector('.image11')
    }, {
        search: 'biography',
        element: document.querySelector('.image12')
    }, {
        search: 'health',
        element: document.querySelector('.image13')
    },{
        search: 'history',
        element: document.querySelector('.image14')
    },{
        search:'exercise',
        element: document.querySelector('.image15')
    },{
        search: 'motivation',
        element: document.querySelector('.image16')
    }, {
        search: 'religion',
        element: document.querySelector('.image17')
    }, {
        search: 'philosophy',
        element: document.querySelector('.image18')
    }
]


function setTiles(searchTerm, element) {
    let url = `https://www.googleapis.com/books/v1/volumes?q=subject:${searchTerm}`

    //fetch request to populate the books information
    fetch(url)
    .then(res => {
        // console.log(res)
        return res.json()
    })
    .then(data => {
        if (data && data.items && data.items[0])
        element.style.backgroundImage=`url(${data.items[0].volumeInfo.imageLinks.smallThumbnail})`;
    })
    .catch(err =>{
        console.log('Something went wrong', err)
    })
}

function setActions(searchTerm, element) {
    element.addEventListener('click', () =>{
        emptyImage.src = ``
        //url for gardens
        let url = `https://www.googleapis.com/books/v1/volumes?q=subject:${searchTerm}`
        //fetch request to populate the books information
        fetch(url)
        .then(res => {
            // console.log(res)
            return res.json()
        })
        .then(data => {
            title.textContent = `${data.items[0].volumeInfo.title}` 
            author.textContent = `Author: ${data.items[0].volumeInfo.authors.toString(' ')}`
            description.textContent = `Description: ${data.items[0].volumeInfo.description}`
            emptyImage.src = `${data.items[0].volumeInfo.imageLinks.smallThumbnail}`
            
        })
        .catch(err =>{
            console.log('Something went wrong', err)
        })
        backgroundCover.style.display = 'flex';
        // let image = document.createElement('div')
        return modal.style.display = "flex"
    })
}

allTiles.forEach((tile) => {
    setTiles(tile.search, tile.element)
    setActions(tile.search, tile.element)
})



//exit functionality
exit.addEventListener('click', goAwayModal)

function goAwayModal(){
    backgroundCover.style.display = 'none'
    modal.style.display = "none"
}
