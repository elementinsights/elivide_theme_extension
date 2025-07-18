document.addEventListener('DOMContentLoaded', function () {
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
});
