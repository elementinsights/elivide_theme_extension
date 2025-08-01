document.addEventListener('DOMContentLoaded', function () {
  // ========== 1. EXISTING: MutationObserver ==========
  const observer = new MutationObserver(() => {
    const shadowHost = document.querySelector('#perfect-product-finder');
    if (!shadowHost || !shadowHost.shadowRoot) return;

    // Prevent injecting more than once
    if (shadowHost.shadowRoot.querySelector('#injected-style')) return;

    const style = document.createElement('style');
    style.id = 'injected-style';
    style.textContent = `
      .progress-percentage {
        white-space: nowrap;
        display: inline-block;
        font-size: 14px;
      }
    `;
    shadowHost.shadowRoot.appendChild(style);
  });

  observer.observe(document.body, { childList: true, subtree: true });

  // ========== 2. REVIEWS.IO INJECTION ==========
  const waitForReviewsScript = () => {
    if (typeof ratingSnippet !== 'function') {
      return setTimeout(waitForReviewsScript, 100); // Retry until script loads
    }

    const productData = JSON.parse(
      document.getElementById('visible-products-json')?.textContent || '[]'
    );

    productData.forEach(({ handle, sku }) => {
      // Match product card by class e.g., "card--product__magnesium-taurate"
      const card = document.querySelector(`.card--product__${handle}`);
      if (!card || card.querySelector('.ruk_rating_snippet')) return;

      const titleEl = card.querySelector('.card__title');
      if (!titleEl) return;

      // Inject the Reviews.io snippet after product title
      const div = document.createElement('div');
      div.className = 'ruk_rating_snippet';
      div.setAttribute('data-sku', sku);

      titleEl.insertAdjacentElement('afterend', div);
    });

    // Initialize all injected widgets
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
