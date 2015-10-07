import MainView from 'views/main-view';

var CreateView = MainView.extend({

      tagName: 'form',
      className: 'create-view',

      template: JST['application'],

      events: {
        'submit' : 'createPost',
        'cancel-button' : 'cancel'

      },


      createPost: function(e){
        e.preventDefault();
        this.collection.create(this.getInfo());
        this.$('input[type=text], textarea').val('');

      },

      getInfo: function(){
        var info = {};
        var results = this.$el.serializeArray();
        results.forEach(function(obj){
          info[obj.name] = obj.value;
        });
        return info;
      },

      cancel: function(){
        this.model.cancel();
      }


});

export default CreateView;
