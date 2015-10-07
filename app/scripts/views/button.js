import MainView from 'views/main-view';

var ButtonView = MainView.extend({
  template: _.template('<button class="js-toggle-hidden"><i class="fa fa-camera"></i></button><form class="drop hidden"></form>'),
  events: {
    'click .js-toggle-hidden' : 'toggleHidden'
  },

  render: function(){
    this.$el.html(this.template());
    return this;
  },

  toggleHidden: function(){
    this.$('.drop').toggleClass('hidden');
  }
});


export default ButtonView;
