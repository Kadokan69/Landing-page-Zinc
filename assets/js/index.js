document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger-menu');
  const closeBtn = document.querySelector('.burger-close');
  const menu = document.querySelector('.header__menu-list');
  const overlay = document.querySelector('.overlay');
  const popupLink = document.querySelector('#open__popup');
  const popup = document.querySelector('.popup__sostav');
  const closePopup = popup.querySelector('.popup__close');
  burger.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closedMenu);
  closePopup.addEventListener('click', closedPopup);
  overlay.addEventListener('click', () => {
    closedMenu();
    closedPopup();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closedMenu();
      closedPopup();
    }
  });

  if (popupLink) {
    popupLink.addEventListener('click', openPopup);
  }

  function closedMenu() {
    overlay.classList.remove('active');
    menu.classList.remove('active');
  }

  function openMenu() {
    overlay.classList.add('active');
    menu.classList.add('active');
  }

  function openPopup() {
    document.querySelector('body').style.overflow = 'hidden';
    overlay.classList.add('active');
    popup.classList.add('active');
  }

  function closedPopup() {
    document.querySelector('body').style.overflow = '';
    overlay.classList.remove('active');
    popup.classList.remove('active');
  }
  function moveList() {
    if (window.innerWidth <= 1000) return;

    const container = document.querySelector('.hero');
    const listItemsContainer = container?.querySelector('.list-items');
    const heroImage = document.querySelector('.hero__image');

    if (!container || !listItemsContainer || !heroImage) return;

    const listItems = listItemsContainer.children;

    let containerWidth = container.clientWidth;
    let animationFrameId = null;
    let lastMouseX = 0;
    let lastMouseY = 0;

    function updateTransform() {
      if (!container || !heroImage) return;

      heroImage.style.transform = `translateX(${(-(containerWidth / 2) + lastMouseX) / 200}px)`;

      Array.from(listItems).forEach((item, index) => {
        const offset = index % 2 === 0 ? 1 : -1;
        item.style.transform = `translate(${(offset * lastMouseX) / 50}px, ${(offset * lastMouseY) / 50}px)`;
      });

      animationFrameId = null;
    }

    container.addEventListener('mousemove', (event) => {
      lastMouseX = event.clientX;
      lastMouseY = event.clientY;

      containerWidth = container.clientWidth;

      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(updateTransform);
      }
    });

    window.addEventListener('resize', () => {
      containerWidth = container.clientWidth;
    });
  }
  moveList();
});
