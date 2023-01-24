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
                <p class="fs-16 name">${card.name.text}<img src="${card.name.img}"/></p>
                <p class="subject">${card.subject.text}<span class="vr">|</span>${card.subject.text2}<span class="green">${card.subject.span}</span></p>
                ${card.units ? `<p class="units"><span class="bold">${card.units.unit}</span>Units&nbsp;<span class="bold">${card.units.lesson}</span> Lessons&nbsp; <span class="bold">${card.units.topic}</span> Topics</p>` : ''}
                <p class="division"><select name="sel" ><option value="${card.division.value}">${card.division.value}</option></select><img src="img/arrow-down.svg"></p>
                ${card.strength ? `<p class="strength">${card.strength.num}${card.strength.date ? `<span>|</span> ${card.strength.date}`:''}</p>` : ''}
                
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
