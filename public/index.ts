export const getCardImages = (url: string) => {
  switch (url) {
    case "bireysel":
      return "/bireysel.webp";
    case "cift":
      return "/cift.webp";
    case "cocuk":
      return "/cocuk.webp";
    case "cinsel":
      return "/cinsel.webp";
    case "online":
      return "/online.webp";
    case "testler":
      return "/testler.webp";
    case "kurumsal":
      return "/kurumsal.webp";
    default:
      return "/";
  }
};
