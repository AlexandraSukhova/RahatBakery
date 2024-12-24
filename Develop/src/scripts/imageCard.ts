import { MenuItem } from "./interface";

export function createMenuImageCard(
  cardInfo: MenuItem,
  blockName: string,
  container: HTMLTemplateElement,
  mq: boolean,
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
  const cardButton = ImageCard.querySelector(".button") as HTMLButtonElement;

  cardHeader.textContent = cardInfo.name;
  cardDescription.textContent = cardInfo.description;
  cardInfo.imgUrl
    ? (cardImage.src = cardInfo.imgUrl)
    : console.log("Изображение не найдено");
  cardImage.alt = cardInfo.name;

  mq
    ? (cardButton.textContent = "buy")
    : (cardButton.textContent = "buy on grab");

  return cardItem;
}
