const getCroppedImageUrl = (url: string) => {
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  // url.indexOf(target): the starting position of the media parameter
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
  // url.slice(0, index): get all characters from the beginning of url all the way to the 'media/'(include itself) parameter
};

export default getCroppedImageUrl;
