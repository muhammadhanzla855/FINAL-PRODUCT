  // ===== Quantity Behavior =====
  const minusBtn = document.querySelector(".qty-btn.minus");
  const plusBtn = document.querySelector(".qty-btn.plus");
  const countEl = document.querySelector(".count");

  minusBtn.addEventListener("click", () => {
    let currentCount = parseInt(countEl.textContent);
    if (currentCount > 1) {
      countEl.textContent = currentCount - 1;
    }
  });

  plusBtn.addEventListener("click", () => {
    let currentCount = parseInt(countEl.textContent);
    countEl.textContent = currentCount + 1;
  });

  // ===== Thumbnail Click Behavior =====
  const thumbnails = document.querySelectorAll(".thumbnail");
  const mainImage = document.getElementById("mainProductImage");

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", () => {
      mainImage.src = thumbnail.src;
    });
  });



   const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tab = button.getAttribute('data-tab');

      tabContents.forEach(content => {
        content.classList.add('hidden');
      });

      tabButtons.forEach(btn => btn.classList.remove('active'));

      document.getElementById(tab).classList.remove('hidden');
      button.classList.add('active');
    });
  });
