var textarea = document.querySelector(".textarea");
var tagsel = document.querySelector(".tags");
textarea.focus();
textarea.addEventListener("keyup", function (eventx) {
  createTags(eventx.target.value);
});
function createTags(getavalue) {
  var values = getavalue.split(" ");
  var filtervalues = values.filter(filterx).map(mapx);

  tagsel.innerHTML = "";

  filtervalues.forEach((elementg) => {
    const createlemet = document.createElement("span");
    createlemet.classList.add("tag");
    createlemet.innerText = elementg;
    tagsel.appendChild(createlemet);
  });
}

function filterx(tags) {
  var tagsx = tags.trim();
  return tagsx !== "";
}
function mapx(mapelement) {
  return mapelement.trim();
}
