import MainView from 'views/main-view';

export default MainView.extend({
    tagName: 'li',
    template: JST['text'],

    events: {
      'click [data-behavior=destroy-image]' : 'destroy'
    },


    destroy: function(){
      this.model.destroy();
    },

    render: function(){
      this.$el.html(this.template({
        model: this.model.toJSON()
      }));
      return this;
    }
});
