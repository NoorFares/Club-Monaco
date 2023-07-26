// Function to open the modal and populate it with product data
function openProductModal(imageSrc, title, description, price, colors) {
    const modal = $('#productModal');

    // Update the modal content with the product data
    modal.find('.product-image').html(`<img src="${imageSrc}" alt="${title}" class="img-fluid">`);
    modal.find('.product-title').text(title);
    modal.find('.product-description').text(description);
    modal.find('.product-price').text(price);

    // Clear any previous color options
    modal.find('.product-colors').empty();

    // Add color options to the modal
    for (const color of colors) {
      modal.find('.product-colors').append(`<span class="color-option color-${color}"></span>`);
    }

    // Show the modal
    modal.modal('show');
  }

  // Event handler for "Buy Now" button clicks
  // Event handler for "Buy Now" button clicks
  $('.btn.btn-primary.Buy').on('click', function (event) {
    event.preventDefault();

    const card = $(this).closest('.card');
    const imageSrc = card.find('img.card-img-top').attr('src');
    const title = card.find('.card-title').text();
    const description = card.find('.card-text').text();
    const price = card.find('.product-price').text().trim(); // Extracting the price without the dollar sign
    const colors = card.find('.color-option').map(function () {
      return this.classList[1].split('-')[1];
    }).get();

    openProductModal(imageSrc, title, description, price, colors);
  });