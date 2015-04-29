;(function() {


  if (typeof Hanoi === "undefined") {
    window.Hanoi = {};
  }

  var View = Hanoi.View = function(game, $el) {
    this.game = game;
    this.$board = $el;
    this.names = ["empty", "one", "two", "three"];
  };

  View.prototype.clickTower = function(tower) {
    if (typeof this.firstTowerIdx !== "undefined") {
      this.firstTower.removeClass("clicked-tower");
      this.firstTower = undefined;
      var secondTowerIdx = this.$board.children().index(tower);

      if (this.game.move(this.firstTowerIdx, secondTowerIdx)) {
        this.firstTowerIdx = undefined;
        this.render();
      } else {
        this.firstTowerIdx = undefined;
        alert("Invalid move");
      }
    } else {
      this.firstTower = $(tower);
      this.firstTowerIdx = this.$board.children().index(tower);
      this.firstTower.addClass("clicked-tower");
    }
  };

  View.prototype.bindCallers = function() {
    this.$board.children().each(function(index, tower) {
      var $tower = $(tower);
      $tower.on("click", function(event) {
        this.clickTower($tower);
      }.bind(this));
    }.bind(this));
  };

  View.prototype.render = function() {
    var renderTower = function(index, tower) {
      var $tower = $(tower);
      $tower.children().each(function(disc, li) {
        var $li = $(li);
        $li.removeClass();
        var discClass = this.game.towers[index][disc] || 0;
        $li.addClass(this.names[discClass]);
      }.bind(this));
    }.bind(this);



    this.$board.children().each(renderTower);
  };

  View.prototype.setupTowers = function() {
    this.bindCallers();
    this.render();
  };


})();
