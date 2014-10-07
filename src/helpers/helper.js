module.exports.register = function(Handlebars, properties) {

    /**
     * Generate content wrapper within the markdown
     */

    // Render a partial and pass in some data
    // Example Usage:
    //      {{#parseJSON '{"category_id": "category-wine-story", "category_icon" : "icon-font-restaurants", "title": "Restaurants", "description": "Restaurants, desc..."}'}}
    //          {{> category_item}}
    //      {{/parseJSON}}
    //  .hbs: <a href="#" class="btn-share icon-font-{{category_icon}}"><span>{{text}}</span></a>
    
    Handlebars.registerHelper('parseJSON', function(data, options) {
        return options.fn(JSON.parse(data));
    });




    /**
     * Testing purpose only
     */
     Handlebars.registerHelper('foo', function(context, options) {
         console.log(context);
         return new Handlebars.SafeString('Testing');
     });



    /*///////////////////////

     Adds support for passing arguments to partials. Arguments are merged with
     the context for rendering only (non destructive). Use `:token` syntax to
     replace parts of the template path. Tokens are replace in order.

     USAGE: {{$ 'path.to.partial' context=newContext foo='bar' }}
     USAGE: {{$ 'path.:1.:2' replaceOne replaceTwo foo='bar' }}

     ///////////////////////////////*/

    Handlebars.registerHelper('$', function(partial) {
        var values, opts, done, value, context;
        if (!partial) {
            console.error('No partial name given.');
        }
        values = Array.prototype.slice.call(arguments,1);
        opts = values.pop();
        while (!done) {
            value = values.pop();
            if (value) {
                partial = partial.replace(/:[^\.]+/, value);
            }
            else {
                done = true;
            }
        }
        partial = Handlebars.partials[partial];
        if (!partial) {
            return '';
        }
        context = _.extend({}, opts.context||this, _.omit(opts, 'context', 'fn', 'inverse'));
        return new Handlebars.SafeString( partial(context) );
    });

};