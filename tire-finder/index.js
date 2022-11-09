(function () {
  let resultStep1, resultStep2, resultStep3, resultStep4;
  const step1 = document.getElementById('step-1');
  const step2 = document.getElementById('step-2');
  const step3 = document.getElementById('step-3');
  const step4 = document.getElementById('step-4');

  setUpStep1();

  function setUpStep1() {
    const numberOfItemsLoadFirst = 10;

    step1.style.display = 'block';
    // Mock makes
    const makes = [
      {
        id: 0,
        name: 'Toyota',
        img: './../assets/icons/toyota.svg',
      },
      {
        id: 1,
        name: 'Ford',
        img: './../assets/icons/ford.svg',
      },
      {
        id: 2,
        name: 'Honda',
        img: './../assets/icons/honda.svg',
      },
      {
        id: 3,
        name: 'Kia',
        img: './../assets/icons/kia.svg',
      },
      {
        id: 4,
        name: 'Nissan',
        img: './../assets/icons/nissan.svg',
      },
      {
        id: 5,
        name: 'Jeep',
        img: './../assets/icons/jeep.svg',
      },
      {
        id: 6,
        name: 'Hyundai',
        img: './../assets/icons/hyundai.svg',
      },
      {
        id: 7,
        name: 'Chevrolet',
        img: './../assets/icons/chevrolet.svg',
      },
      {
        id: 8,
        name: 'Subaru',
        img: './../assets/icons/subaru.svg',
      },
      {
        id: 9,
        name: 'Dodge',
        img: './../assets/icons/dodge.svg',
      },
      {
        id: 10,
        name: 'Toyota',
        img: './../assets/icons/toyota.svg',
      },
      {
        id: 11,
        name: 'Ford',
        img: './../assets/icons/ford.svg',
      },
      {
        id: 12,
        name: 'Honda',
        img: './../assets/icons/honda.svg',
      },
      {
        id: 13,
        name: 'Kia',
        img: './../assets/icons/kia.svg',
      },
      {
        id: 14,
        name: 'Nissan',
        img: './../assets/icons/nissan.svg',
      },
      {
        id: 15,
        name: 'Jeep',
        img: './../assets/icons/jeep.svg',
      },
      {
        id: 16,
        name: 'Hyundai',
        img: './../assets/icons/hyundai.svg',
      },
      {
        id: 17,
        name: 'Chevrolet',
        img: './../assets/icons/chevrolet.svg',
      },
      {
        id: 18,
        name: 'Subaru',
        img: './../assets/icons/subaru.svg',
      },
      {
        id: 19,
        name: 'Dodge',
        img: './../assets/icons/dodge.svg',
      },
    ];

    const listMakesEle = document.getElementById('list-makes');
    const seeMoreMakesButton = document.getElementById('see-more-makes-btn');

    // Convert make to element
    const makesEle = makes.map((make) => {
      const makeWrapper = document.createElement('div');
      const imgWrapper = document.createElement('div');
      const imgDiv = document.createElement('div');

      const img = document.createElement('img');
      const title = document.createElement('span');

      makeWrapper.className = 'make-wrapper';
      imgDiv.className = 'make-img';
      imgWrapper.className = 'make-img-wrapper';
      makeWrapper.dataset.id = make.id;

      img.src = make.img;
      title.textContent = make.name;

      imgDiv.append(img);
      imgWrapper.append(imgDiv);
      makeWrapper.append(imgWrapper, title);

      imgWrapper.onclick = function () {
        const makesWrapperEle = document.getElementsByClassName('make-wrapper');

        for (let ele of makesWrapperEle) {
          ele.classList.remove('selected');
        }

        makeWrapper.classList.add('selected');

        return;
      };

      imgWrapper.ondblclick = function () {
        resultStep1 = make;
        step1.style.display = 'none';
        step2.style.display = 'block';
        setUpStep2();

        return;
      };
      return makeWrapper;
    });

    // Just append 10 items first to list
    const firstItems = makesEle.slice(0, numberOfItemsLoadFirst);
    const restItems = makesEle.slice(numberOfItemsLoadFirst, makesEle.length);
    listMakesEle.innerHTML = '';
    listMakesEle.append(...firstItems);

    if (numberOfItemsLoadFirst < makes.length) {
      seeMoreMakesButton.style.display = 'block';
    } else {
      seeMoreMakesButton.style.display = 'none';
    }

    // Add event section
    seeMoreMakesButton.onclick = function () {
      this.style.display = 'none';
      listMakesEle.append(...restItems);

      return;
    };
  }

  function setUpStep2() {
    const yearList = [
      {
        id: 0,
        year: '2008',
      },
      {
        id: 1,
        year: '2009',
      },
      {
        id: 2,
        year: '2010',
      },
      {
        id: 3,
        year: '2011',
      },
      {
        id: 4,
        year: '2012',
      },
      {
        id: 5,
        year: '2013',
      },
      {
        id: 6,
        year: '2014',
      },
      {
        id: 7,
        year: '2015',
      },
      {
        id: 8,
        year: '2016',
      },
      {
        id: 9,
        year: '2017',
      },
      {
        id: 10,
        year: '2018',
      },
      {
        id: 11,
        year: '2019',
      },
      {
        id: 12,
        year: '2020',
      },
      {
        id: 13,
        year: '2021',
      },
      {
        id: 14,
        year: '2022',
      },
    ];

    const yearInput = document.getElementById('year');
    const iconSearch = document.getElementById('year-search-icon');
    const iconClose = document.getElementById('year-close-icon');

    render();
    init();

    function render() {
      // Selected make open
      const selectedMakeEle = document.getElementById('selected-make-2');
      const step2Heading = document.getElementById('step-2-heading');

      const makeWrapper = document.createElement('div');
      const imgWrapper = document.createElement('div');
      const imgDiv = document.createElement('div');
      const paraWrapper = document.createElement('div');

      const img = document.createElement('img');
      const title = document.createElement('span');
      const restartBtn = document.createElement('p');
      const yearInput = document.getElementById('year');

      const iconSearch = document.getElementById('year-search-icon');
      const iconClose = document.getElementById('year-close-icon');
      makeWrapper.className = 'make-wrapper';
      imgDiv.className = 'make-img';
      imgWrapper.className = 'make-img-wrapper';
      paraWrapper.className = 'make-para-wrapper';
      makeWrapper.dataset.id = resultStep1.id;

      img.src = resultStep1.img;
      title.textContent = resultStep1.name;
      restartBtn.textContent = 'Restart';

      imgDiv.append(img);
      imgWrapper.append(imgDiv);
      paraWrapper.append(title, restartBtn);
      makeWrapper.append(imgWrapper, paraWrapper);

      selectedMakeEle.innerHTML = '';
      selectedMakeEle.append(makeWrapper);
      step2Heading.textContent = `Next, what’s the year of your ${resultStep1?.name}?`;

      // Year list append
      filterYear(yearList);

      restartBtn.onclick = function () {
        resultStep1 = undefined;

        yearInput.value = '';
        iconClose.style.display = 'none';
        iconSearch.style.display = 'block';

        step2.style.display = 'none';
        setUpStep1();

        return;
      };
      return;
    }

    function init() {
      yearInput.onkeyup = handleYearInputKeyUp;
      iconClose.onclick = handleCloseIconClick;

      function handleYearInputKeyUp() {
        // Empty value case
        if (!this.value) {
          iconClose.style.display = 'none';
          iconSearch.style.display = 'block';

          filterYear(yearList);
          return;
        }
        iconClose.style.display = 'block';
        iconSearch.style.display = 'none';

        const years = yearList.filter((year) => year.year.includes(this.value));
        filterYear(years);

        return;
      }

      function handleCloseIconClick() {
        yearInput.value = '';
        handleYearInputKeyUp();
      }
    }

    function filterYear(yearList) {
      const yearListWrapper = document.getElementById('year-list');
      const yearListBtn = yearList.map((year) => {
        const btn = document.createElement('button');
        btn.className = 'year-item';
        btn.textContent = year.year;
        btn.setAttribute('data-id', year.id);

        btn.onclick = function () {
          const yearItemBtns = document.getElementsByClassName('year-item');

          for (let item of yearItemBtns) {
            item.classList.remove('selected');
          }

          btn.classList.add('selected');

          return;
        };

        btn.ondblclick = function () {
          resultStep2 = year;
          step2.style.display = 'none';
          step3.style.display = 'block';

          yearInput.value = '';
          iconClose.style.display = 'none';
          iconSearch.style.display = 'block';
          setUpStep3();

          return;
        };

        return btn;
      });

      yearListWrapper.innerHTML = '';
      yearListWrapper.append(...yearListBtn);

      return;
    }
  }

  function setUpStep3() {
    const modelList = [
      {
        id: 0,
        name: '4Runner',
      },
      {
        id: 1,
        name: 'Avalon',
      },
      {
        id: 2,
        name: 'Camry',
      },
      {
        id: 3,
        name: 'C-HR',
      },
      {
        id: 4,
        name: 'Carolla',
      },
      {
        id: 5,
        name: 'GR Supra',
      },
      {
        id: 6,
        name: 'Highlander',
      },
      {
        id: 7,
        name: 'Land Cruiser',
      },
      {
        id: 8,
        name: 'Mirai',
      },
      {
        id: 9,
        name: 'Prius',
      },
      {
        id: 10,
        name: 'Prius AWD-e',
      },
      {
        id: 11,
        name: 'Prius AWD-e',
      },
      {
        id: 12,
        name: 'RAV4',
      },
      {
        id: 13,
        name: 'RAV4 Prime',
      },
      {
        id: 14,
        name: 'Sequoia',
      },
      {
        id: 15,
        name: 'Sienna',
      },
      {
        id: 16,
        name: 'Tacoma',
      },
      {
        id: 13,
        name: 'Tundra',
      },
      {
        id: 14,
        name: 'Venza',
      },
    ];

    const modelInput = document.getElementById('model');
    const iconSearch = document.getElementById('model-search-icon');
    const iconClose = document.getElementById('model-close-icon');

    render();
    init();

    function render() {
      // Selected make open
      const selectedMakeEle = document.getElementById('selected-make-3');
      const step3Heading = document.getElementById('step-3-heading');

      const makeWrapper = document.createElement('div');
      const imgWrapper = document.createElement('div');
      const imgDiv = document.createElement('div');
      const paraWrapper = document.createElement('div');

      const img = document.createElement('img');
      const title = document.createElement('span');
      const restartBtn = document.createElement('p');

      makeWrapper.className = 'make-wrapper';
      imgDiv.className = 'make-img';
      imgWrapper.className = 'make-img-wrapper';
      paraWrapper.className = 'make-para-wrapper';
      makeWrapper.dataset.id = resultStep1.id;

      img.src = resultStep1.img;
      title.textContent = `${resultStep1.name}, ${resultStep2.year}`;
      restartBtn.textContent = 'Restart';

      imgDiv.append(img);
      imgWrapper.append(imgDiv);
      paraWrapper.append(title, restartBtn);
      makeWrapper.append(imgWrapper, paraWrapper);

      selectedMakeEle.innerHTML = '';
      selectedMakeEle.append(makeWrapper);
      step3Heading.textContent = `Next, what’s the year of your ${resultStep1?.name}?`;

      restartBtn.onclick = function () {
        resultStep1 = undefined;
        resultStep2 = undefined;

        modelInput.value = '';
        iconClose.style.display = 'none';
        iconSearch.style.display = 'block';

        step3.style.display = 'none';
        setUpStep1();

        return;
      };

      // Year list append
      filterModel(modelList);

      return;
    }

    function init() {
      modelInput.onkeyup = handleModelInputKeyUp;
      iconClose.onclick = handleCloseIconClick;

      function handleModelInputKeyUp() {
        // Empty value case
        if (!this.value) {
          iconClose.style.display = 'none';
          iconSearch.style.display = 'block';

          filterModel(modelList);
          return;
        }
        iconClose.style.display = 'block';
        iconSearch.style.display = 'none';

        const models = modelList.filter((model) =>
          model.name.toLowerCase().includes(this.value.toLowerCase())
        );
        filterModel(models);

        return;
      }

      function handleCloseIconClick() {
        modelInput.value = '';
        handleModelInputKeyUp();
      }
    }

    function filterModel(modelList) {
      const modelListWrapper = document.getElementById('model-list');
      const modelListBtn = modelList.map((model) => {
        const btn = document.createElement('button');
        btn.className = 'model-item item';
        btn.textContent = model.name;
        btn.setAttribute('data-id', model.id);

        btn.onclick = function () {
          const yearItemBtns = document.getElementsByClassName('model-item');

          for (let item of yearItemBtns) {
            item.classList.remove('selected');
          }

          btn.classList.add('selected');

          return;
        };

        btn.ondblclick = function () {
          resultStep3 = model;

          modelInput.value = '';
          iconClose.style.display = 'none';
          iconSearch.style.display = 'block';

          step3.style.display = 'none';
          step4.style.display = 'block';

          setUpStep4();

          return;
        };

        return btn;
      });

      modelListWrapper.innerHTML = '';
      modelListWrapper.append(...modelListBtn);

      return;
    }
  }

  function setUpStep4() {
    const trimInput = document.getElementById('trim');
    const iconSearch = document.getElementById('trim-search-icon');
    const iconClose = document.getElementById('trim-close-icon');

    const trimList = [
      {
        id: 0,
        name: 'Limited',
        wheels: [
          {
            id: 0,
            name: '20” Wheel',
            content: '245/60R20',
          },
        ],
      },
      {
        id: 1,
        name: 'Nightshade',
        wheels: [
          {
            id: 0,
            name: '17” Wheel',
            content: '245/50R19',
          },
          {
            id: 1,
            name: '19” Wheel',
            content: '265/65R43',
          },
        ],
      },
      {
        id: 2,
        name: 'SR5',
        wheels: [
          {
            id: 0,
            name: '17” Wheel',
            content: '245/70R17',
          },
        ],
      },
      {
        id: 3,
        name: 'SR5 Premium',
        wheels: [
          {
            id: 0,
            name: '17” Wheel',
            content: '245/70R17',
          },
        ],
      },
      {
        id: 4,
        name: 'TRD Off-Road',
        wheels: [
          {
            id: 0,
            content: '245/70R17',
            name: '17” Wheel',
          },
        ],
      },
      {
        id: 5,
        name: 'TRD Off-Road Premium',
        wheels: [
          {
            id: 0,
            name: '17” Wheel',
            content: '245/70R17',
          },
        ],
      },
      {
        id: 6,
        name: 'TRD Pro',
        wheels: [
          {
            id: 0,
            name: '17” Wheel',
            content: '245/70R17',
          },
        ],
      },
      {
        id: 7,
        name: 'Venture',
        wheels: [
          {
            id: 0,
            name: '17” Wheel',
            content: '245/50R19',
          },
          {
            id: 1,
            name: '19” Wheel',
            content: '265/65R43',
          },
        ],
      },
    ];

    render();
    init();

    function render() {
      // Selected make open
      const selectedMakeEle = document.getElementById('selected-make-4');

      const makeWrapper = document.createElement('div');
      const imgWrapper = document.createElement('div');
      const imgDiv = document.createElement('div');
      const paraWrapper = document.createElement('div');

      const img = document.createElement('img');
      const title = document.createElement('span');
      const restartBtn = document.createElement('p');

      makeWrapper.className = 'make-wrapper';
      imgDiv.className = 'make-img';
      imgWrapper.className = 'make-img-wrapper';
      paraWrapper.className = 'make-para-wrapper';
      makeWrapper.dataset.id = resultStep1.id;

      img.src = resultStep1.img;
      title.textContent = `${resultStep1.name}, ${resultStep2.year}, ${resultStep3.name}`;
      restartBtn.textContent = 'Restart';

      imgDiv.append(img);
      imgWrapper.append(imgDiv);
      paraWrapper.append(title, restartBtn);
      makeWrapper.append(imgWrapper, paraWrapper);

      selectedMakeEle.innerHTML = '';
      selectedMakeEle.append(makeWrapper);

      restartBtn.onclick = function () {
        resultStep1 = undefined;
        resultStep2 = undefined;
        resultStep3 = undefined;

        trimInput.value = '';
        iconClose.style.display = 'none';
        iconSearch.style.display = 'block';

        step4.style.display = 'none';
        setUpStep1();

        return;
      };

      // Year list append
      filterTrim(trimList);

      return;
    }

    function init() {
      trimInput.onkeyup = handleTrimInputKeyUp;
      iconClose.onclick = handleCloseIconClick;

      function handleTrimInputKeyUp() {
        // Empty value case
        if (!this.value) {
          iconClose.style.display = 'none';
          iconSearch.style.display = 'block';

          filterTrim(trimList);
          return;
        }
        iconClose.style.display = 'block';
        iconSearch.style.display = 'none';

        const trims = trimList.filter((trim) =>
          trim.name.toLowerCase().includes(this.value.toLowerCase())
        );
        filterTrim(trims);

        return;
      }

      function handleCloseIconClick() {
        trimInput.value = '';
        handleTrimInputKeyUp();
      }
    }

    function filterTrim(trimList) {
      const trimListWrapper = document.getElementById('trim-list');

      // Render trim list button
      const trimListBtn = trimList.map((trim) => {
        const wrapper = document.createElement('div');
        const btn = document.createElement('div');
        const h5 = document.createElement('h5');
        const span = document.createElement('span');

        btn.className = 'trim-item item';
        h5.textContent = trim.name;
        span.innerHTML =
          trim.wheels.length > 1
            ? 'Multiple Sizes'
            : `${trim.wheels[0].content} <b>•</b> ${trim.wheels[0].name}`;

        btn.setAttribute('data-id', trim.id);

        btn.append(h5, span);
        wrapper.append(btn);

        // Append wheel childs case
        if (trim.wheels.length > 1) {
          btn.setAttribute('data-bs-toggle', 'collapse');
          btn.setAttribute('data-bs-target', `#collapse${trim.id}`);

          const listSizeWrapper = document.createElement('div');
          const listSizeBtn = trim.wheels.map((wheel) => {
            const wrapper = document.createElement('div');
            const span = document.createElement('span');
            const btn = document.createElement('button');

            span.innerHTML = `<b>Base</b> ${wheel.content} <i>•</i> ${wheel.name}`;
            btn.textContent = 'VIEW TIRES';

            wrapper.className = 'tire-item';
            wrapper.append(span, btn);
            return wrapper;
          });

          listSizeWrapper.className = `collapse`;
          listSizeWrapper.id = `collapse${trim.id}`;
          listSizeWrapper.append(...listSizeBtn);
          wrapper.append(listSizeWrapper);
        }

        btn.onclick = function () {
          const trimItemBtns = document.getElementsByClassName('trim-item');

          for (let item of trimItemBtns) {
            item.classList.remove('selected');
          }

          btn.classList.add('selected');

          return;
        };

        if (trim.wheels.length < 2) {
          btn.ondblclick = function () {
            resultStep4 = trim;
            alert('Done');

            return;
          };
        }

        return wrapper;
      });

      trimListWrapper.innerHTML = '';
      trimListWrapper.append(...trimListBtn);

      return;
    }
  }
})();
