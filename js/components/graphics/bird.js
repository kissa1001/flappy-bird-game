var BirdGraphicsComponent = function(entity) {
    this.entity = entity;
    this.image = document.getElementById("mario");
};

BirdGraphicsComponent.prototype.draw = function(context) {
    var position = this.entity.components.physics.position;

    context.save();
    
    context.translate(position.x, position.y);
    context.rotate(Math.PI);
    context.scale(-1, 1);

    var image = this.image;

    context.drawImage(this.image, 0.03, 0.03, 0.03*2, 0.03*2);
    context.restore();
};

exports.BirdGraphicsComponent = BirdGraphicsComponent;