(function() {
  let candysFun = {
    all: window.candyData,

    getByType: function() {
      var getBytype = candysFun.all.map(function(candy) {
        var format = {};
        format.image = candy.img;
        format.description = candy.description;
        format.cost = candy.cost;
        format.type = candy.type;
        return format;
      });
      return getBytype;
    },
    getByTypeForReal: function(inType) {
      function life(candy) {
        var output = candy.type === inType;
        return output;
      }
      return candysFun.getByType().filter(life);
    }
  };

  let tableHelper = {
    clearTable: function() {
      var make = document.querySelector('#Death');
      make.innerHTML = '';
    },

    CandytoCandyImg: function(img) {
      var image = document.createElement('img');
      image.src = img;
      image.height = '250';
      image.width = '250';
      return image;
    },

    CandytoCandyDes: function(Testing, candy) {
      var disDiv = document.createElement('div');
      var CostDiv = document.createElement('div');
      disDiv.setAttribute('class', 'nested');
      CostDiv.setAttribute('class', 'nested');

      var disTitle = document.createElement('p');
      disTitle.setAttribute('class', 'subHeader');
      var disword = document.createTextNode('Description:');
      disTitle.appendChild(disword);
      disDiv.appendChild(disTitle);

      var disBody = document.createElement('p');
      disword = document.createTextNode(candy.description);
      disBody.setAttribute('class', 'bodyP');
      disBody.appendChild(disword);
      disDiv.appendChild(disBody);

      disTitle = document.createElement('p');
      disTitle.setAttribute('class', 'subHeader');
      disword = document.createTextNode('Cost: $' + candy.cost);
      disTitle.appendChild(disword);
      CostDiv.appendChild(disTitle);

      var button = document.createElement('button');
      button.id = 'cart';
      var ButName = document.createTextNode('Add To Cart');
      button.appendChild(ButName);
      CostDiv.appendChild(button);

      Testing.appendChild(disDiv);
      Testing.appendChild(CostDiv);
      return Testing;
    },

    CandyToDiv: function(ONEcandy) {
      var mak = document.querySelector('#Death');

      var hacks = document.createElement('div');
      hacks.setAttribute('class', 'box box1');
      tableHelper.CandytoCandyDes(hacks, ONEcandy);
      var imageDiv = document.createElement('div');
      imageDiv.appendChild(tableHelper.CandytoCandyImg(ONEcandy.image));
      imageDiv.setAttribute('class', 'nestedimg');
      hacks.appendChild(imageDiv);
      mak.appendChild(hacks);
    }
  };

  function setupMenuHandlers() {
    document.querySelector('#AllCandy').onclick = function() {
      var candyTitleCh = document.querySelector('#CandyTitle');
      candyTitleCh.innerHTML = 'All Candy';

      tableHelper.clearTable();
      var candyOb = candysFun.getByType();
      for (var i = 0; i <= candyOb.length; i++) {
        tableHelper.CandyToDiv(candyOb[i]);
      }
    };
    document.querySelector('#SoftCandy').onclick = function() {
      var candyTitleCh = document.querySelector('#CandyTitle');
      candyTitleCh.innerHTML = 'Soft Candy';
      tableHelper.clearTable();
      var candyOb = candysFun.getByTypeForReal(1);
      for (var i = 0; i <= candyOb.length; i++) {
        tableHelper.CandyToDiv(candyOb[i]);
      }
    };
    document.querySelector('#HardCandy').onclick = function() {
      var candyTitleCh = document.querySelector('#CandyTitle');
      candyTitleCh.innerHTML = 'Hard Candy';

      tableHelper.clearTable();
      var candyOb = candysFun.getByTypeForReal(2);
      for (var i = 0; i <= candyOb.length; i++) {
        tableHelper.CandyToDiv(candyOb[i]);
      }
    };

    tableHelper.clearTable();
    var candyOb = candysFun.getByType();
    for (var i = 0; i <= candyOb.length; i++) {
      tableHelper.CandyToDiv(candyOb[i]);
    }
  }

  // When the page loads, setup all event handlers by calling setup function.
  window.onload = setupMenuHandlers;
})();
