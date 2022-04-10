const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1:

const cat = {
    complain: function() {
        console.log("Meow!");
    }
};

// Question 2:

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Question 3:

heading.style.fontSize = "2em";

// Question 4:

heading.className = "subheading";

// Question 5:

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
};

// Question 6:

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// Question 7:

function createCatList(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
};
createCatList(cats);

// Question 8:

let html = "";

function createCats(cats) {
    for (let i = 0; i < cats.length; i++) {
        let catAge = "Age unknown";
        if (cats[i].age) {
            catAge = cats[i].age;
        }
        html += `<div>
                    <h5>${cats[i].name}</h5>
                    <p>${catAge}</p>
                </div>`
    }
    return html;
};

const updatedHtml = createCats(cats);
const catCont = document.querySelector(".cat-container");
catCont.innerHTML = updatedHtml;