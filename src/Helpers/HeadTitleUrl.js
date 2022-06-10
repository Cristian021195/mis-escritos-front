export const HeadTitleUrl = (url) => {
  let url_arr = url.split('/').filter(e=>e !== '')
  document.title = Analizar(url_arr);
}

function Analizar (words){
  let out = '';
  words.forEach(word => {
    out += word.charAt(0).toUpperCase() + word.slice(1) + ' ';
  });
  return out;
}
