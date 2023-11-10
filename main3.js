window.addEventListener(`load`, () => {
  const body = document.body;
  const button = document.getElementById("bottoneInvio");
  const inputUtente = document.getElementById("testoUtente");
  console.log(inputUtente.value);
  button.addEventListener(`click`, () => {
    const input = inputUtente.value;
    const par = document.createElement("p");
    par.innerHTML = `${input}`;
    body.appendChild(par);
  });
});
