export function getCardTypeIcon(type) {
  let cardTypeIcon;
  switch(type) {
    case 'task': cardTypeIcon = 'fa-exclamation-circle'; break;
    case 'enhancement': cardTypeIcon = 'fa-bullseye'; break;
    case 'bug': cardTypeIcon = 'fa-bug'; break;
    default: cardTypeIcon = 'fa-question'; break;
  }
  return cardTypeIcon;
}

export function getCardTypeIconClassName(type) {
  return `card-${type}-icon`;
}
