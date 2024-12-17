import "../styles/style.scss";
import coverImage from '../images/cover.jpg'
import { ensureElement } from "./utils/utils";
import { createMenuPositionCard } from "./menuCard";
import { menu, review } from "./mock";
import { MenuItem, ReviewItem } from "./interface";
import { createMenuImageCard } from "./imageCard";
import { createReviewCard } from "./reviewCard";

const cardItem = ensureElement<HTMLTemplateElement>('#menu-item');
const cardImage = ensureElement<HTMLTemplateElement>('#card-image');
const cardReview = ensureElement<HTMLTemplateElement>('#card-review');
const menuPositionList = 'menu__position-list';
const menuImagesList = 'menu__images-list';
const reviewList = '.section__reviews_list';
const menuImage = 'menu__images';
const menuPosition = 'menu__position';
const reviewItem = 'review__card';

const cover = document.querySelector<HTMLImageElement>(".cover__image");
if(cover) {cover.src = coverImage}

function renderCard(listName: string, createCard: HTMLElement) {
  const cardList = document.querySelector(listName);
  const cardElem = createCard;
  cardList?.append(cardElem);
}

function addMenuCards(cardInfo: MenuItem[]) {
  cardInfo.forEach(i => {
    i.category === 'bread' ? renderCard(`.${menuPositionList}-bread`, createMenuPositionCard(i, menuPosition, cardItem)) :
    i.category === 'dishes' ? renderCard(`.${menuPositionList}-dishes`, createMenuPositionCard(i, menuPosition, cardItem)) :
    renderCard(`.${menuPositionList}-desserts`, createMenuPositionCard(i, menuPosition, cardItem));

    if(i.imgUrl) {
      i.category === 'bread' ? renderCard(`.${menuImagesList}-bread`, createMenuImageCard(i, menuImage, cardImage)) :
      i.category === 'dishes' ? renderCard(`.${menuImagesList}-dishes`, createMenuImageCard(i, menuImage, cardImage)) :
      renderCard(`.${menuImagesList}-desserts`, createMenuImageCard(i, menuImage, cardImage))
    }
  })
}

  function addReviewCards(cardInfo: ReviewItem[]) {
    cardInfo.forEach(i => renderCard(reviewList, createReviewCard(i, reviewItem, cardReview)) )
  }

addMenuCards(menu);
addReviewCards(review);



