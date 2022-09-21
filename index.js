const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");

btn.addEventListener("click", (e) => {
  const li = document.createElement("li");
  li.textContent = input.value;
  result.append(li);
  input.value = "";

  const del = document.createElement("button");
  del.textContent = "delete";
  li.append(del);
  del.addEventListener("click", (e) => {
    e.target.parentElement.remove();
    result.childNodes.length <= 0 ? (result.style.border = "none") : null;
  });

  const select = document.createElement("input");
  select.type = "checkbox";
  li.prepend(select);

  select.addEventListener("click", (e) => {
    e.target.parentElement.classList.toggle("done");
  });

  del.style.marginLeft = "5px";
  del.style.marginTop = "10px";
  select.style.marginRight = "5px";
  select.style.marginTop = "5px";
  result.style.color = "white";
  result.style.marginTop = "50px";
  result.style.border = "2px solid";
  result.style.width = "40%";
  result.style.marginLeft = "450px";
  result.style.listStyleType = "none";
  result.style.borderRadius = "10px 20px 30px 40px/30px";

});
