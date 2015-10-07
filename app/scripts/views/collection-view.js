import MainView from 'views/main-view';

export default MainView.extend({

  initialize: function(){
    this.listenTo(this.collection, 'add remove', this.render);
  },
});
