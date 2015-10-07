import imageCollection from 'models/image-collection';
import textCollection from 'models/text-collection';
import CreateView from 'views/create-view';
import ImagesListView from 'views/list';
import ButtonView from 'views/button';
import CreateTextView from 'views/createText-view';




$(document).ready(function(){

  var texts = new textCollection();
  var images = new imageCollection();

  var buttonView = new ButtonView({collection: images});
  $('.header').append(buttonView.render().el);

  var createView = new CreateView({collection: images});
  $('.drop').append(createView.render().el);

  var imagesListView = new ImagesListView({collection: images});
  $('#container').append(imagesListView.render().el);



  images.add([

  ]);

});
