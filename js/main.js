var btnSubmit = document.querySelector(".btnSubmit");
var btnsRating = document.querySelectorAll(".rating .rating-number");
let numeroEscolhido;

window.addEventListener("load", () => {
  btnsRating.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      btnsRating.forEach((sem) => {
        sem.classList.remove("ativo");
      });

      btn.classList.add("ativo");
      numeroEscolhido = e.target.textContent;
    });
  });
});

btnSubmit.addEventListener("click", () => {
  document.querySelector('.n-escolhido').textContent = numeroEscolhido;
  if(numeroEscolhido == undefined){
    alert("Escolha a pontuação");
    return false;
  }
  document.querySelector(".ration").classList.add("opacidade-zero");

  setTimeout(() => {
    document.querySelector(".ration").classList.add("d-none");
  }, 500);

  setTimeout(() => {
    document.querySelector(".thank").classList.add("opacidade-1");
  }, 500);

  setTimeout(() => {
    document.querySelector(".thank").classList.add("d-block");
  }, 500);
});
