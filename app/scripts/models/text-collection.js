import text from 'models/text';

var textCollection = Backbone.Collection.extend({
      model: text,
      url: 'http://tiny-lasagna-server.herokuapp.com/collections/GRtext'
});

export default textCollection;
