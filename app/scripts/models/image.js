var image = Backbone.Model.extend({
      defaults: {
         url: "",
         content:"",
      },


      validate: function(attributes){
        if(_.isEmpty(attributes)){
          alert("You haven't written anything yet!");
        } else {
          return undefined;
        }
      }
});

export default image;
