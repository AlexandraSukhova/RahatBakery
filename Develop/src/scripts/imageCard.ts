import { MenuItem } from "./interface";

export function createMenuImageCard(
  cardInfo: MenuItem,
  blockName: string,
  container: HTMLTemplateElement,
) {
  const cardContainer = container.content.cloneNode(true) as HTMLElement;
  const cardItem = cardContainer.querySelector(
    `.${blockName}-item`,
  ) as HTMLElement;
  const ImageCard = cardItem.querySelector(`.${blockName}-card`) as HTMLElement;

  const cardHeader = ImageCard.querySelector(
    `.${blockName}-header`,
  ) as HTMLHeadingElement;
  const cardDescription = ImageCard.querySelector(
    `.${blockName}-description`,
  ) as HTMLParagraphElement;
  const cardImage = ImageCard.querySelector(
    `.${blockName}-image`,
  ) as HTMLImageElement;

  cardHeader.textContent = cardInfo.name;
  cardDescription.textContent = cardInfo.description;
  cardInfo.imgUrl
    ? (cardImage.src = cardInfo.imgUrl)
    : console.log("Изображение не найдено");
  cardImage.alt = cardInfo.name;

  return cardItem;
}
