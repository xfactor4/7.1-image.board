import MainView from 'views/main-view';

var CreateTextView = MainView.extend({

      tagName: 'form',
      className: 'createText-view',

      template: JST['text'],

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

export default CreateTextView;
