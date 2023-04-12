const img = document.createElement('img');

document.body.append(img);

const ImgUrl = new URL('../media/oes2.jpg', import.meta.url);
img.src = imgUrl.href;

