var settings = require('../../../settings');

var PipeGraphicsComponent = function(entity) {
    this.entity = entity;
    this.image = document.getElementById("pipe");
};

PipeGraphicsComponent.prototype.draw = function(context) {
	var position = this.entity.components.physics.position;	
    var flip = this.entity.flip;

    context.save();

    var image = this.image;

    if(flip) {
        context.translate(position.x-settings.pipeWidth/2, position.y-settings.pipeHeight/2);
        context.scale(1,-1);
        //drawImage(x coord of top-left corner of img, y coord [top-left], width, height)
        context.drawImage(image, 0, 0, settings.pipeWidth, -settings.pipeHeight);
        context.restore();
    } else {
        context.translate(position.x-settings.pipeWidth/2, position.y-settings.pipeHeight/2);
        //drawImage(x coord of top-left corner of img, y coord [top-left], width, height)
        context.drawImage(image, 0, 0, settings.pipeWidth, settings.pipeHeight);
        context.restore();

    }


};

exports.PipeGraphicsComponent = PipeGraphicsComponent;