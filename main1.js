window.addEventListener(`load`, () => {
  let obj = {
    originale: "",
    minuscolo: "",
    senzaSpazi: "",
    numeroCaratteri: "",
    contieneJS: "",
    invertita: "",
    minuscolo: "",
  };
  let key;
  const btn = document.getElementById("btn");
  const inputUtente = document.getElementById("inputUtente");
  btn.addEventListener("click", () => {
    const analizzaTesto = (inputUtente) => {
      const input = inputUtente.value;
      const value1 = input;
      console.log(value1);
      const value2 = input.toLowerCase();
      console.log(value2);
      let value5 = ``;
      for (let i = input.length - 1; i >= 0; i--) {
        value5 += input[i];
      }
      console.log(value5);
      obj.originale = `${value1}`;
      obj.minuscolo = `${value2}`;
      obj.senzaSpazi = `${value3}`;
      obj.numeroCaratteri = `${value4}`;
      obj.invertita = `${value5}`;
    };
    return console.log(obj);
    // const value3 = input.trim;
    // const value4 = input.include(JS);
  });
});
