HomeScreen = Backbone.View.extend({
	initialize: function() {
		var template = _.template($("#t_takePhoto").html(), {});
		this.$el.html(template);

		pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
	},

	events: {
		"click #btn_takePhoto": "takePhoto"
	},

	takePhoto: function(event) {
                    navigator.camera.getPicture(photo_onSuccess, photo_onFail, { quality: 50, destinationType: Camera.DestinationType.DATA_URL});
                    var image_preview = new t_photo();
    }
});