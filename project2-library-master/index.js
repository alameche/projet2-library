// Vous êtes libraire et vous souhaitez créer un petit programme pour gérer votre stock

// Vous devez créer plusieurs fonctions pour avoir une vue d'ensemble de votre stock

// Toute notre bibliothèque
const books = require('./library.json');

// **** console.log(typeof books) 
// **** console.log(books) 

// @TODO : complète cette fonction

/**
 * Renvoie le nombre de livres en stock
 * @param{array} les livres en stock
 * @returns{boolean} nombre de livres
 */
function nbBooks(nbr) {
   console.log (`NOMBRE TOTAL DE LIVRE: ${nbr.length}`)
}
// nbBooks(books)


/**
 * Lister efficacement dans la console tous les titres du stock
 * @param{array} les livres en stock
 */
function listAllTitles(liste) {
   let total = []
   for (let i = 0 ;i < liste.length; i++) {
   total[i] = (liste[i].title)
    //  console.log(liste[i].title)
   }
console.log (total.sort())
}
//listAllTitles(books)

// @TODO : écrivez la fonction suivante
/**  
 * Ajouter un livre à l'intérieur du stock
 * @param{array} les livres en stock
 * @param{string} titre du livre
 * @param{string} auteur du livre
 * @param{string} genre du livre
 * @param{number} pages du livre
 * @param{string} langue du livre
 * @param{number} année du livre publié
* @returns{array} le nouveau stock
*/ 

function ajoutBook (nameLibrary, nameAuthor, nameTitle, nbrPages, nameGenre, nameLanguage, nbrYear) {
   
   let newBook = {
      author: nameAuthor, title: nameTitle, pages: nbrPages, 
      genre: nameGenre, language: nameLanguage, year: nbrYear
            }

   nameLibrary.push(newBook)
   return (nameLibrary)
}


    // @BONUS : modifiez maintenant le stock actuel avec le nouveau stock renvoyé par la fonction écrite 
//          ci-dessus

ajoutBook (books,'Muslim Ndjerrou', 'Un mois chez mon frère à Riyadh', 
           31,"Aventure", "JavaScript", 2023)


  // @TODO : écris la même fonction que ci-dessus mais maintenant elle ne reçoit qu'un objet contenant 
//         toutes les informations sur un nouveau livre à ajouter au stock

function addBook (livre) {
    books.push(livre)
    return (books)
    }
    

// @TODO : écrivez la fonction suivante
/**
 * Ajouter un livre dans le stock - nouvelle version
 * @param{object} toutes les infos sur le nouveau livre
 * @param{array} le nouveau stock
 */
let myBook = { author: "Muslim Ndjerrou", title: "Un mois chez mon frère à Riyadh", 
               pages: 31, genre: "Aventure", language: "JavaScript", year: "2023" }

  //addBook (myBook)

// @TODO : écrivez la fonction suivante
/**
 * Supprimer un livre en particulier
 * @param{array} stock de livres
 * @param{number} index du livre à supprimer
 */
function deleteBook (stock,deleteTitle) {
   for (let i=0; i < stock.length; i++){
       if(stock[i].title === deleteTitle){
       stock.splice(i,1)
      return (stock)
       }
   }
   }


// @TODO : écrivez la fonction suivante
/**
 * Mettre à jour le titre d'un livre particulier
 * @param{array} stock de livres
 * @param{string} nouveau titre du livre
 */
function updateTitle (stock, oldTitle, newTitle){
   for (let i=0; i < stock.length; i++){
      
      if(stock[i].title == oldTitle) {
      stock[i].title = newTitle
      console.log (stock)
      }
  }
}
// updateTitle (books, 'Murder on the Orient Express', 'Express!!!!!!')



/// @TODO : écrire une fonction qui liste dans la console uniquement les livres écrits en anglais
function englishBook() {
   for (let i = 0 ;i < books.length; i++) {
      if (books[i].language == 'English'){
      console.log(books[i].title)
   } 
}
}
//englishBook()



// @TODO : écrire une fonction qui liste dans la console uniquement les livres de plus de 300 pages
function volumineuxBook() {
   for (let i = 0 ;i < books.length; i++) {
            if (books[i].pages > 300) {
      console.log(books[i].title)
   } 
}
}
//volumineuxBook()



// @TODO : écrire une fonction qui liste dans la console uniquement les livres de moins de 300 pages
function dietBook() {
   for (let i = 0 ;i < books.length; i++) {
            if (books[i].pages < 300) {
      console.log(books[i].title)
   } 
}
}
//dietBook()



// @TODO : écrire une fonction qui renvoie tous les livres écrits entre 2000 (exclus) et 2010
function periodBook() {
   for (let i = 0 ;i < books.length; i++) {
            if (books[i].year > 2000 && books[i].year <= 2010) {
      console.log(books[i].title)
   } 
}
}
//periodBook()



// @TODO écrit une fonction qui renvoie tous les livres du genre "Fantasy" et en anglais
function fantasyEnglishBook() {
   for (let i = 0 ;i < books.length; i++) {
            if (books[i].genre == 'Fantasy' && books[i].language == 'English') {
      console.log(books[i].title)
   } 
}
}
//fantasyEnglishBook()



// BONUS:

// @TODO écrit une fonction qui renvoie un livre contenant le mot ride dans son titre

function researchTitle (letters) {
   for (let i = 0 ;i < books.length; i++) {
   if ((books[i].title).includes(letters)) {
   console.log(books[i].title)
   } 
}
}
 // researchTitle ('ride')