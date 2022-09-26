function setBooks(){
    event.preventDefault()
    let inputName = document.getElementById("name").value;
    let inputAuthor = document.getElementById("author").value;
    let inputDesc = document.getElementById("desc").value;
    let inputDate = document.getElementById("added").value;
    let category = document.getElementById("category").value;
    let price = document.getElementById("price").value;
    let bookMark = "BookMark"
    let buy = "Buy"
    let bookObj = {
        inputName,
        inputAuthor,
        inputDesc,
        inputDate,
        category,
        buy,
        bookMark,
        price,
    }

    // let booksArr = []
    // booksArr.push(bookObj)
//    let storageArr = JSON.parse( localStorage.getItem("book-list") );
//     console.log(storageArr)
//    if(storageArr !== null){
//        booksArr.push(storageArr)
//    }
    
    localStorage.setItem("book-list", JSON.stringify([...JSON.parse(localStorage.getItem("book-list") || "[]"), bookObj]))


}