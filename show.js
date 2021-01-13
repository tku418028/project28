const show = (btnId, menuId) => {
    const btn = document.getElementById(btnId);
    const menu = document.getElementById(menuId);
    console.log(btn);
    console.log(menu);
    if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('show');
      btn.classList.toggle('fa-times');
    });
  }
}

show('btn', 'menu-show');