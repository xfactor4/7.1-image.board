var text = Backbone.Model.extend({
      defaults: {
         title: "",
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

export default text;
