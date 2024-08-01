export default function createMarkup(arr) {
  return arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
    `<li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${tags}"
            />
          </a>
          <div class="description-container">
            <div class="description">
              <h2 class="description-title">Likes</h2>
              <p class="description-amount">${likes}</p>
            </div>
            <div class="description">
              <h2 class="description-title">Views</h2>
              <p class="description-amount">${views}</p>
            </div>
            <div class="description">
              <h2 class="description-title">Comments</h2>
              <p class="description-amount">${comments}</p>
            </div>
            <div class="description">
              <h2 class="description-title">Downloads</h2>
              <p class="description-amount">${downloads}</p>
            </div>
          </div>
        </li>`)
    .join("");
}
