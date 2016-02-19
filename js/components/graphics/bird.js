var BirdGraphicsComponent = function(entity) {
    this.entity = entity;
    this.image = document.getElementById("mario");
};

BirdGraphicsComponent.prototype.draw = function(context) {
    context.drawImage(this.image, 0, 0);
};

exports.BirdGraphicsComponent = BirdGraphicsComponent;