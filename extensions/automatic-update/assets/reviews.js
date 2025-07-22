document.addEventListener('DOMContentLoaded', function () {
  const waitForReviewsScript = () => {
    if (typeof ratingSnippet !== 'function') {
      return setTimeout(waitForReviewsScript, 100); // Wait until Reviews.io script is loaded
    }

    const productData = JSON.parse(
      document.getElementById('visible-products-json')?.textContent || '[]'
    );

    productData.forEach(({ handle, sku }) => {
      // Find the product card using a class like "card--product__handle"
      const card = document.querySelector(`.card--product__${handle}`);
      if (!card || card.querySelector('.ruk_rating_snippet')) return;

      const titleEl = card.querySelector('.card__title');
      if (!titleEl) return;

      // Inject the Reviews.io star rating snippet
      const div = document.createElement('div');
      div.className = 'ruk_rating_snippet';
      div.setAttribute('data-sku', sku);

      titleEl.insertAdjacentElement('afterend', div);
    });

    // Initialize Reviews.io rating snippet
    ratingSnippet('ruk_rating_snippet', {
      store: 'www.elivide.co.uk',
      mode: 'default',
      color: '#0E1311',
      linebreak: false,
      text: 'Reviews',
      singularText: 'Review',
      lang: 'en',
      usePolaris: true,
      showEmptyStars: false
    });
  };

  waitForReviewsScript();
});
