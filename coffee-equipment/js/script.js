
const buttons = document.querySelectorAll("[data-filter]");
const cards = document.querySelectorAll("[data-cat]");
buttons.forEach(btn => btn.addEventListener("click", () => {
  buttons.forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  const key = btn.dataset.filter;
  cards.forEach(card => {
    card.style.display = key === "all" || card.dataset.cat === key ? "" : "none";
  });
}));
const topBtn = document.getElementById("backTop");
topBtn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
window.addEventListener("scroll",()=>topBtn.style.opacity=window.scrollY>400?"1":".25");
