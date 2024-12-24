import { ReviewItem } from "./interface";

export function createReviewCard(
  cardInfo: ReviewItem,
  blockName: string,
  container: HTMLTemplateElement,
) {
  const cardContainer = container.content.cloneNode(true) as HTMLElement;
  const cardItem = cardContainer.querySelector(
    `.${blockName}-item`,
  ) as HTMLElement;
  const ImageCard = cardItem.querySelector(`.${blockName}`) as HTMLElement;

  const cardHeader = ImageCard.querySelector(
    `.${blockName}-name`,
  ) as HTMLHeadingElement;
  const cardDescription = ImageCard.querySelector(
    `.${blockName}-description`,
  ) as HTMLParagraphElement;

  cardHeader.textContent = cardInfo.userName;
  cardDescription.textContent = cardInfo.reviewText;

  return cardItem;
}
