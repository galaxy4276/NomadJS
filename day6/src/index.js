
const selectSector = document.querySelector(".selectSector");

const changeSector = e => {
  if (e.target.value!=='')
    localStorage.setItem(`Country`, e.target.value);
};

selectSector.addEventListener("change", changeSector);
