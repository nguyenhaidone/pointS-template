(function () {
  let rearTireSizeVisible = false;
  const items = [
    { id: 0, value: 205 },
    { id: 1, value: 215 },
    { id: 2, value: 235 },
    { id: 3, value: 245 },
    { id: 4, value: 255 },
    { id: 5, value: 275 },
    { id: 6, value: 295 },
  ];

  const twoDigitsList = [
    { id: 0, value: 20 },
    { id: 1, value: 52 },
    { id: 2, value: 35 },
    { id: 3, value: 45 },
    { id: 4, value: 15 },
    { id: 5, value: 55 },
    { id: 6, value: 25 },
  ];

  const tireTextHolder = '---/--R--';
  const pageWrap = document.getElementById('tire-finder-size');

  const addRearBtn = document.getElementById('add-rear-btn');
  const removeRearBtn = document.getElementById('remove-rear-btn');
  const seeResultBtn = document.getElementById('see-result-btn');
  const tireTitles = pageWrap.getElementsByClassName('tire-title');

  const rearTireSection = document.getElementById('rear-tire-section');

  const frontTireWidthInput = document.getElementById('front-tire-width');
  const frontTireRatioInput = document.getElementById('front-tire-ratio');
  const frontTireRimInput = document.getElementById('front-tire-rim');

  const rearTireWidthInput = document.getElementById('rear-tire-width');
  const rearTireRatioInput = document.getElementById('rear-tire-ratio');
  const rearTireRimInput = document.getElementById('rear-tire-rim');

  const frontTireWidthClose = document.getElementById('front-tire-width-close');
  const frontTireRatioClose = document.getElementById('front-tire-ratio-close');
  const frontTireRimClose = document.getElementById('front-tire-rim-close');

  const rearTireWidthClose = document.getElementById('rear-tire-width-close');
  const rearTireRatioClose = document.getElementById('rear-tire-ratio-close');
  const rearTireRimClose = document.getElementById('rear-tire-rim-close');

  const frontTireResult = document.getElementById('front-tire-selection');
  const rearTireResult = document.getElementById('rear-tire-selection');

  const frontTireWidthDropdown = document.getElementById(
    'front-tire-width-dropdown'
  );
  const frontTireRatioDropdown = document.getElementById(
    'front-tire-ratio-dropdown'
  );
  const frontTireRimDropdown = document.getElementById(
    'front-tire-rim-dropdown'
  );

  const rearTireWidthDropdown = document.getElementById(
    'rear-tire-width-dropdown'
  );
  const rearTireRatioDropdown = document.getElementById(
    'rear-tire-ratio-dropdown'
  );
  const rearTireRimDropdown = document.getElementById('rear-tire-rim-dropdown');

  addRearBtn.onclick = () => {
    renderRearTireWidthDropdown();
    renderRearTireRatioDropdown();
    renderRearTireRimDropdown();

    setRearTireSizeVisible(true);
  };

  removeRearBtn.onclick = () => {
    rearTireWidthInput.value = '';
    rearTireRatioInput.value = '';
    rearTireRimInput.value = '';
    handleInputKeyup.call(rearTireWidthInput);
    handleInputKeyup.call(rearTireRatioInput);
    handleInputKeyup.call(rearTireRimInput);

    const listCharactersEle = tireTextHolder.split('').map((item) => {
      const span = document.createElement('span');
      span.textContent = item;
      return span;
    });

    rearTireResult.innerHTML = '';
    rearTireResult.append(...listCharactersEle);

    setRearTireSizeVisible(false);
    return;
  };

  // Front binding
  frontTireWidthInput.onfocus = handleFrontTireWidthFocus;
  frontTireWidthInput.onblur = handleFrontTireWidthBlur;

  frontTireRatioInput.onfocus = handleFrontTireRatioFocus;
  frontTireRatioInput.onblur = handleFrontTireRatioBlur;

  frontTireRimInput.onfocus = handleFrontTireRimFocus;
  frontTireRimInput.onblur = handleFrontTireRimBlur;

  // Rear binding
  rearTireWidthInput.onfocus = handleRearTireWidthFocus;
  rearTireWidthInput.onblur = handleRearTireWidthBlur;

  rearTireRatioInput.onfocus = handleRearTireRatioFocus;
  rearTireRatioInput.onblur = handleRearTireRatioBlur;

  rearTireRimInput.onfocus = handleRearTireRimFocus;
  rearTireRimInput.onblur = handleRearTireRimBlur;

  // Front binding
  frontTireWidthInput.onkeyup = function () {
    handleInputKeyup.call(this);
    renderFrontTireWidthDropdown(this.value);
  };

  frontTireRatioInput.onkeyup = function () {
    handleInputKeyup.call(this);
    renderFrontTireRatioDropdown(this.value);
  };

  frontTireRimInput.onkeyup = function () {
    handleInputKeyup.call(this);
    renderFrontTireRimDropdown(this.value);
  };

  frontTireWidthClose.onclick = handleFrontWidthCloseClick;
  frontTireRatioClose.onclick = handleFrontRatioCloseClick;
  frontTireRimClose.onclick = handleFrontRimCloseClick;

  rearTireWidthClose.onclick = handleRearWidthCloseClick;
  rearTireRatioClose.onclick = handleRearRatioCloseClick;
  rearTireRimClose.onclick = handleRearRimCloseClick;

  renderFrontTireWidthDropdown();
  renderFrontTireRatioDropdown();
  renderFrontTireRimDropdown();

  // Rear binding
  rearTireWidthInput.onkeyup = function () {
    handleInputKeyup.call(this);
    renderRearTireWidthDropdown(this.value);
  };

  rearTireRatioInput.onkeyup = function () {
    handleInputKeyup.call(this);
    renderRearTireRatioDropdown(this.value);
  };

  rearTireRimInput.onkeyup = function () {
    handleInputKeyup.call(this);
    renderRearTireRimDropdown(this.value);
  };

  renderFrontTireWidthDropdown();
  renderFrontTireRatioDropdown();
  renderFrontTireRimDropdown();

  renderRearTireWidthDropdown();
  renderRearTireRatioDropdown();
  renderRearTireRimDropdown();

  function handleInputKeyup() {
    const iconClose =
      this.nextElementSibling.getElementsByClassName('close-icon')[0];
    const iconSearch =
      this.nextElementSibling.getElementsByClassName('search-icon')[0];

    if (!this.value) {
      iconClose.style.display = 'none';
      iconSearch.style.display = 'block';

      // filterModel(modelList);
      return;
    }

    iconClose.style.display = 'block';
    iconSearch.style.display = 'none';

    // const models = modelList.filter((model) =>
    //   model.name.toLowerCase().includes(this.value.toLowerCase())
    // );
    // filterModel(models);
    return;
  }

  function setRearTireSizeVisible(visible) {
    rearTireSizeVisible = visible;

    if (!visible) {
      rearTireSection.style.display = 'none';
      addRearBtn.style.display = 'block';
      seeResultBtn.textContent = 'See Results';

      for (let tireTitle of tireTitles) {
        tireTitle.style.display = 'none';
      }
      return;
    }

    // Set rear tire size visible
    rearTireSection.style.display = 'block';
    addRearBtn.style.display = 'none';
    seeResultBtn.textContent = 'See Matching Sets';

    for (let tireTitle of tireTitles) {
      tireTitle.style.display = 'flex';
    }

    return;
  }

  // Front close click
  function handleFrontWidthCloseClick() {
    frontTireWidthInput.value = '';
    handleInputKeyup.call(frontTireWidthInput);
    renderFrontTireWidthDropdown(frontTireWidthInput.value);
    syncTireInputValue();

    return;
  }

  function handleFrontRatioCloseClick() {
    frontTireRatioInput.value = '';
    handleInputKeyup.call(frontTireRatioInput);
    renderFrontTireRatioDropdown(frontTireRatioInput.value);
    syncTireInputValue();

    return;
  }

  function handleFrontRimCloseClick() {
    frontTireRimInput.value = '';
    handleInputKeyup.call(frontTireRimInput);
    renderFrontTireRimDropdown(frontTireRimInput.value);
    syncTireInputValue();

    return;
  }

  // Rear close click
  function handleRearWidthCloseClick() {
    rearTireWidthInput.value = '';
    handleInputKeyup.call(rearTireWidthInput);
    renderRearTireWidthDropdown(rearTireWidthInput.value);
    syncTireInputValue();

    return;
  }

  function handleRearRatioCloseClick() {
    rearTireRatioInput.value = '';
    handleInputKeyup.call(rearTireRatioInput);
    renderRearTireRatioDropdown(rearTireRatioInput.value);
    syncTireInputValue();

    return;
  }

  function handleRearRimCloseClick() {
    rearTireRimInput.value = '';
    handleInputKeyup.call(rearTireRimInput);
    renderRearTireRimDropdown(rearTireRimInput.value);
    syncTireInputValue();

    return;
  }

  function handleFrontTireWidthFocus() {
    frontTireWidthDropdown.style.display = 'block';
    return;
  }

  function handleFrontTireWidthBlur() {
    setTimeout(() => {
      frontTireWidthDropdown.style.display = 'none';
      syncTireInputValue();
      return;
    }, 200);
    return;
  }

  function handleFrontTireRatioFocus() {
    frontTireRatioDropdown.style.display = 'block';
    return;
  }

  function handleFrontTireRimBlur() {
    setTimeout(() => {
      frontTireRimDropdown.style.display = 'none';
      syncTireInputValue();

      return;
    }, 200);
    return;
  }

  function handleFrontTireRimFocus() {
    frontTireRimDropdown.style.display = 'block';
    return;
  }

  function handleFrontTireRatioBlur() {
    setTimeout(() => {
      frontTireRatioDropdown.style.display = 'none';
      syncTireInputValue();

      return;
    }, 200);
    return;
  }

  function handleRearTireWidthFocus() {
    rearTireWidthDropdown.style.display = 'block';
    return;
  }

  function handleRearTireWidthBlur() {
    setTimeout(() => {
      rearTireWidthDropdown.style.display = 'none';
      syncTireInputValue();

      return;
    }, 200);
    return;
  }

  function handleRearTireRatioFocus() {
    rearTireRatioDropdown.style.display = 'block';
    return;
  }

  function handleRearTireRatioBlur() {
    setTimeout(() => {
      rearTireRatioDropdown.style.display = 'none';
      syncTireInputValue();

      return;
    }, 200);
    return;
  }

  function handleRearTireRimFocus() {
    rearTireRimDropdown.style.display = 'block';
    return;
  }

  function handleRearTireRimBlur() {
    setTimeout(() => {
      rearTireRimDropdown.style.display = 'none';
      syncTireInputValue();

      return;
    }, 200);
    return;
  }

  function renderFrontTireWidthDropdown(value = null) {
    let filterItems = value
      ? items.filter((item) => item.value.toString().includes(value))
      : items;

    const wrapper = document.createElement('div');
    wrapper.className = 'list-items';

    const itemsELe = filterItems.map((item) => {
      const div = document.createElement('div');
      div.className = 'item';
      div.dataset.value = item.value;
      div.textContent = item.value;

      div.onclick = function () {
        frontTireWidthInput.value = item.value;
        handleInputKeyup.call(frontTireWidthInput);
        renderFrontTireWidthDropdown(frontTireWidthInput.value);
        return;
      };
      return div;
    });

    frontTireWidthDropdown.innerHTML = '';

    if (!itemsELe.length) {
      wrapper.innerHTML = '<div class="item">No Result</div>';
      frontTireWidthDropdown.append(wrapper);
      return;
    }

    wrapper.append(...itemsELe);
    frontTireWidthDropdown.append(wrapper);
    return;
  }

  function renderFrontTireRatioDropdown(value = null) {
    let filterItems = value
      ? twoDigitsList.filter((item) => item.value.toString().includes(value))
      : twoDigitsList;

    const wrapper = document.createElement('div');
    wrapper.className = 'list-items';

    const itemsELe = filterItems.map((item) => {
      const div = document.createElement('div');
      div.className = 'item';
      div.dataset.value = item.value;
      div.textContent = item.value;

      div.onclick = function () {
        frontTireRatioInput.value = item.value;
        handleInputKeyup.call(frontTireRatioInput);
        renderFrontTireRatioDropdown(frontTireRatioInput.value);
        return;
      };
      return div;
    });

    frontTireRatioDropdown.innerHTML = '';

    if (!itemsELe.length) {
      wrapper.innerHTML = '<div class="item">No Result</div>';
      frontTireRatioDropdown.append(wrapper);
      return;
    }

    wrapper.append(...itemsELe);
    frontTireRatioDropdown.append(wrapper);
    return;
  }

  function renderFrontTireRimDropdown(value = null) {
    let filterItems = value
      ? twoDigitsList.filter((item) => item.value.toString().includes(value))
      : twoDigitsList;

    const wrapper = document.createElement('div');
    wrapper.className = 'list-items';

    const itemsELe = filterItems.map((item) => {
      const div = document.createElement('div');
      div.className = 'item';
      div.dataset.value = item.value;
      div.textContent = item.value;

      div.onclick = function () {
        frontTireRimInput.value = item.value;
        handleInputKeyup.call(frontTireRimInput);
        renderFrontTireRimDropdown(frontTireRimInput.value);
        return;
      };
      return div;
    });

    frontTireRimDropdown.innerHTML = '';

    if (!itemsELe.length) {
      wrapper.innerHTML = '<div class="item">No Result</div>';
      frontTireRimDropdown.append(wrapper);
      return;
    }

    wrapper.append(...itemsELe);
    frontTireRimDropdown.append(wrapper);
    return;
  }

  function renderRearTireWidthDropdown(value = null) {
    let filterItems = value
      ? items.filter((item) => item.value.toString().includes(value))
      : items;

    const wrapper = document.createElement('div');
    wrapper.className = 'list-items';

    const itemsELe = filterItems.map((item) => {
      const div = document.createElement('div');
      div.className = 'item';
      div.dataset.value = item.value;
      div.textContent = item.value;

      div.onclick = function () {
        rearTireWidthInput.value = item.value;
        handleInputKeyup.call(rearTireWidthInput);
        renderRearTireWidthDropdown(rearTireWidthInput.value);
        return;
      };
      return div;
    });

    rearTireWidthDropdown.innerHTML = '';

    if (!itemsELe.length) {
      wrapper.innerHTML = '<div class="item">No Result</div>';
      rearTireWidthDropdown.append(wrapper);
      return;
    }

    wrapper.append(...itemsELe);
    rearTireWidthDropdown.append(wrapper);
    return;
  }

  function renderRearTireRatioDropdown(value = null) {
    let filterItems = value
      ? twoDigitsList.filter((item) => item.value.toString().includes(value))
      : twoDigitsList;

    const wrapper = document.createElement('div');
    wrapper.className = 'list-items';

    const itemsELe = filterItems.map((item) => {
      const div = document.createElement('div');
      div.className = 'item';
      div.dataset.value = item.value;
      div.textContent = item.value;

      div.onclick = function () {
        rearTireRatioInput.value = item.value;
        handleInputKeyup.call(rearTireRatioInput);
        renderRearTireRatioDropdown(rearTireRatioInput.value);
        return;
      };
      return div;
    });

    rearTireRatioDropdown.innerHTML = '';

    if (!itemsELe.length) {
      wrapper.innerHTML = '<div class="item">No Result</div>';
      rearTireRatioDropdown.append(wrapper);
      return;
    }

    wrapper.append(...itemsELe);
    rearTireRatioDropdown.append(wrapper);
    return;
  }

  function renderRearTireRimDropdown(value = null) {
    let filterItems = value
      ? twoDigitsList.filter((item) => item.value.toString().includes(value))
      : twoDigitsList;

    const wrapper = document.createElement('div');
    wrapper.className = 'list-items';

    const itemsELe = filterItems.map((item) => {
      const div = document.createElement('div');
      div.className = 'item';
      div.dataset.value = item.value;
      div.textContent = item.value;

      div.onclick = function () {
        rearTireRimInput.value = item.value;
        handleInputKeyup.call(rearTireRimInput);
        renderRearTireRimDropdown(rearTireRimInput.value);
        return;
      };
      return div;
    });

    rearTireRimDropdown.innerHTML = '';

    if (!itemsELe.length) {
      wrapper.innerHTML = '<div class="item">No Result</div>';
      rearTireRimDropdown.append(wrapper);
      return;
    }

    wrapper.append(...itemsELe);
    rearTireRimDropdown.append(wrapper);
    return;
  }

  function syncTireInputValue() {
    const frontTire = `${frontTireWidthInput?.value || '---'}/${
      frontTireRatioInput?.value || '--'
    }R${frontTireRimInput?.value || '--'}`;

    const listCharactersEle = frontTire.split('').map((item) => {
      const span = document.createElement('span');
      span.textContent = item;
      return span;
    });

    frontTireResult.innerHTML = '';
    frontTireResult.append(...listCharactersEle);

    if (rearTireSizeVisible) {
      const rearTire = `${rearTireWidthInput?.value || '---'}/${
        rearTireRatioInput?.value || '--'
      }R${rearTireRimInput?.value || '--'}`;

      const listCharactersEle = rearTire.split('').map((item) => {
        const span = document.createElement('span');
        span.textContent = item;
        return span;
      });

      rearTireResult.innerHTML = '';
      rearTireResult.append(...listCharactersEle);

      return;
    }

    return;
  }
})();
