define(['backbone', 'underscore', 'model/bookshelf', 'view/book-view'], function(Backbone, _, Bookshelf, BookView) {
    return Backbone.View.extend({
        initialize: function() {
            this.collection = new Bookshelf([{
                    title: 'A Tale of Two Cities',
                    author: 'Charles Dickens'
                }, {
                    title: 'The Good Earth',
                    author: 'Pearl S. Buck'
                }]);

            this.render();
        },
        render: function() {
            this.collection.each(function(book) {
                var bookView = new BookView({
                    model: book
                });
                this.$el.append(bookView.$el);
            }, this);
        }
    });
}); 