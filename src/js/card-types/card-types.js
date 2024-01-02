export default class CardWidget {
  // This class response for diferent types of cards. If we need more, we can add them to list _awaviableCards
  // and use them in cardShow, note that also we need to add images to /img folder with name of card
  constructor(element) {
    this._element = element;
    this._awailableCards = ['visa', 'mastercard', 'express', 'discover',  'jsb', 'diners'];
  }


  cardShow() {
    const container = this._element.querySelector(".cards-container");

    this._awailableCards.forEach(card => {
      container.innerHTML += `<div class="card-item type-${card} filter-active" style="
        width: 100px;
        height: 70px;
        background-size: 100%;
        background-repeat: no-repeat;
        margin: 10px; 
        background-position: center;">
      </div>`

    })

  }
}
