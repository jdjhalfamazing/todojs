let list = document.getElementById("list");
let input = document.getElementById("input");

function addItem() {
  let item = input.value.trim();
  if (item !== "") {
    let li = document.createElement("li");
    li.innerHTML = `<span>${item}</span><button onclick="removeItem(this)">Delete</button>`;
    list.appendChild(li);
    input.value = "";
  }
}

function removeItem(item) {
  item.parentNode.remove();
}
