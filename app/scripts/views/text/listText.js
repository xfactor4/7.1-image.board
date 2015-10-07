import CollectionText from 'text/views/collectionText-view';
import TextItemView from 'text/views/itemText';

export default CollectionView.extend({
  tagName: "ul",

  render: function(){
    this.renderChildren();
    return this;
  },

  renderChildren: function(){
    var self = this;
    this.$el.html('');
    this.collection.each(function(image){
      var itemTextView = new TextItemView({model: text});
      self.$el.append(itemTextView.render().el);
    })
  }
})
