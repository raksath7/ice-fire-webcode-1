let title = document.createElement("h1");
title.innerHTML = "BOOK STORE";
title.setAttribute("class", "title");
document.body.append(title);

let D = document.createElement("div");
document.body.append(D);
D.setAttribute("class", "App");

// D1.setAttribute("class","D1")
async function getData() {
  await fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((details) => {
      // result && console.log(result[0]);
      for (let i of details) {
        console.log(details[i])
      // result.map((details) => {
        let D1 = document.createElement("div");
        D1.setAttribute("class", "D1");
        D.append(D1);
        //name
        let name = document.createElement("div");
        D1.append(name);
        name.setAttribute("class", "name");
        // name.innerHTML = `Name: ${details.name}`;
        let nameN = document.createElement("div");
        nameN.innerHTML = `Book Name`;
        let nameValue = document.createElement("div");
        nameValue.innerHTML = `${details[i]["name"]}`;
        name.append(nameN);
        name.append(nameValue);
        // isbn
        let isbn = document.createElement("div");
        isbn.setAttribute("class", "isbn");
        D1.append(isbn);
        let isbnN = document.createElement("div");
        isbnN.innerHTML = `isbn`;
        let isbnValue = document.createElement("div");
        isbnValue.innerHTML = ` ${details.isbn}`;
        isbn.append(isbnN);
        isbn.append(isbnValue);
        //pgno
        let pgNo = document.createElement("div");
        D1.append(pgNo);
        pgNo.setAttribute("class", "pgNo");
        // pgNo.innerHTML = `Number Of Pages: ${details.numberOfPages}`;
        let pgNoN = document.createElement("div");
        pgNoN.innerHTML = `Number Of Pages:`;
        let pgNoValue = document.createElement("div");
        pgNoValue.innerHTML = ` ${details.numberOfPages}`;
        pgNo.append(pgNoN);
        pgNo.append(pgNoValue);
        //authors
        let authors = document.createElement("div");
        D1.append(authors);
        authors.setAttribute("class", "authors");
        let authorsN = document.createElement("div");
        authorsN.innerHTML = `Author:`;
        let authorsValue = document.createElement("div");
        authorsValue.innerHTML = `  ${details.authors}`;
        authors.append(authorsN);
        authors.append(authorsValue);
        // publisher
        let publisher = document.createElement("div");
        D1.append(publisher);
        publisher.setAttribute("class", "publisher");
        // publisher.innerHTML = `Publisher: ${details.publisher}`;
        let publisherN = document.createElement("div");
        publisherN.innerHTML = `publisher:`;
        let publisherValue = document.createElement("div");
        publisherValue.innerHTML = `  ${details.publisher}`;
        publisher.append(publisherN);
        publisher.append(publisherValue);
        //released
        let released = document.createElement("div");
        D1.append(released);
        released.setAttribute("class", "released");
        // released.innerHTML = `Released: ${details.released}`;
        let releasedN = document.createElement("div");
        releasedN.innerHTML = `released:`;
        let releasedValue = document.createElement("div");
        releasedValue.innerHTML = `  ${details.released}`;
        released.append(releasedN);
        released.append(releasedValue);
      };
  
    })
    .catch((err) => console.log(err));
}
getData();
