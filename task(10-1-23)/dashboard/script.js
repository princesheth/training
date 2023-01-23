myfunc = async () => {
  const maindiv = document.querySelector(".cards");
  let response = await fetch("./c_data.json");
  var data = await response.json();
  console.log(data);
  let cards = data.cards;
  console.log(cards.length);
  num = 1;
  for (card of cards) {
    maindiv.innerHTML += `<div class="card card-${num}">
    <div>
        <div class="top">
            <div class="left"><img src="${card.img}" alt=""></div>
            <div class="right">
                <p class="fs-16 name">${card.name}</p>
                <p class="subject">${card.subject}</p>
                ${card.units ? `<p class="units">${card.units}</p>` : ''}
                <p class="division">${card.division}</p>
                ${card.strength ? `<p class="strength">${card.strength}</p>` : ''}
                
            </div>
        </div>
        <hr class="hr">
        <div class="bottom">
            <div class="img-1"></div>
            <div class="img-2"></div>
            <div class="img-3"></div>
            <div class="img-4"></div>
        </div>
    </div>
</div>`;

    num++;
  }
};
