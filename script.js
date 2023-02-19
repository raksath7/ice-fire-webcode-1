let main = document.createElement("main");
main.setAttribute("class","main")
document.body.append(main)

let title = document.createElement("h1");
title.innerHTML = "BOOK STORE";
title.setAttribute("class", "title");
main.append(title);

let form = document.createElement("form");
form.setAttribute("class","class")
main.append(form);

let label = document.createElement("label");
label.innerText = "Search";
label.setAttribute("for","input")
form.append(label);

let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "input");
input.setAttribute("name", "input");
form.append(input);


let D = document.createElement("div");
document.body.append(D);
D.setAttribute("class", "App");

form.setAttribute("submit", handleSubmit);


async function getData() {
  await fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      res.map((details) => {
        let D1 = document.createElement("ul");
        D1.setAttribute("class", "D1");
        D1.setAttribute("id", "paginated-list");

        D.append(D1);
        //name
        let name = document.createElement("li");
        name.setAttribute("class", "name");
        D1.append(name);
        name.innerHTML = `Name: ${details.name}`;

        // isbn
        let isbn = document.createElement("li");
        isbn.setAttribute("class", "isbn");
        D1.append(isbn);
         isbn.innerHTML = `isbn: ${details.isbn}`;
        
        //pgno
        let pgNo = document.createElement("li");
        D1.append(pgNo);
        pgNo.setAttribute("class", "pgNo");
        pgNo.innerHTML = `Number Of Pages: ${details.numberOfPages}`;

        //authors
        let authors = document.createElement("li");
        authors.setAttribute("class", "authors");
        D1.append(authors);
         authors.innerHTML = `authors: ${details.authors}`;

        // publisher
        let publisher = document.createElement("li");
        D1.append(publisher);
        publisher.setAttribute("class", "publisher");
        publisher.innerHTML = `Publisher: ${details.publisher}`;

        let released = document.createElement("li");
        D1.append(released);
        released.setAttribute("class", "released");
        released.innerHTML = `Released: ${details.released}`;

      })
    }
    ) 
    .catch((err) => console.log(err));
}

let li = document.querySelectorAll("li");
function handleSubmit(e) {
  e.preventDefault();
  // let value = e.target.value;
  let value = document.querySelector("input").value;
  for (var i = 0; i < li.length; i++) {
        if(li[i].textContent.toLowerCase()
                .includes(value.toLowerCase())) {
            li[i].classList.add("show");
        } else {
            li[i].classList.remove("show");
        }
    }
}

getData()
