import image from 'models/image';

var imageCollection = Backbone.Collection.extend({
      model: image,
      url: 'http://tiny-lasagna-server.herokuapp.com/collections/GRimages'
});

export default imageCollection;
