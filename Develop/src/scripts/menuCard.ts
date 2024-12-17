import { MenuItem } from "./interface";
import { createElement } from "./utils/utils";

export function createMenuPositionCard(cardInfo: MenuItem, blockName: string, container: HTMLTemplateElement) {

  const cardContainer = container.content.cloneNode(true) as HTMLElement;
  const cardItem = cardContainer.querySelector(`.${blockName}-item`) as HTMLElement;

  const cardHeader = cardItem.querySelector(`.${blockName}-header`) as HTMLHeadingElement;
  const cardPrice = cardItem.querySelector(`.${blockName}-price`) as HTMLParagraphElement;
  const cardDescription = cardItem.querySelector(`.${blockName}-description`) as HTMLParagraphElement;
  const cardFillingList = cardItem.querySelector(`.${blockName}-filling-list`);
  const cardFillingTitle = cardItem.querySelector(`.${blockName}-filling-title`) as HTMLHeadingElement;

  cardHeader.textContent = cardInfo.name;
  cardPrice.textContent = cardInfo.price;
  cardDescription.textContent = cardInfo.description;

  if(cardInfo.filling) {
    cardFillingTitle.textContent = 'Filling:';

    cardInfo.filling.forEach(i => {
      const listElem = createElement("li");
      listElem.textContent = i;
      cardFillingList?.append(listElem);
    })
  }

  return cardItem;
}