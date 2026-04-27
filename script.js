
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

sections.forEach(sec => {
  sec.style.opacity = "0";
  sec.style.transform = "translateY(40px)";
  sec.style.transition = "0.6s";
  observer.observe(sec);
});

function openImage(src) {
  const popup = document.getElementById("imagePopup");
  const img = document.getElementById("popupImg");

  popup.style.display = "flex";
  img.src = src;   // replaces image (no extra image)
}

function closeImage() {
  document.getElementById("imagePopup").style.display = "none";
}