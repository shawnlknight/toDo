// my data
var todos = [];
var completeTodos = [];
$(function() {
 
    myTodoApp.init();
 
});
 
var myTodoApp = {
        init: function() {
            this.initStyling();
            this.initEVents();
        },
        initStyling: function() {
            // my initial template of todos
            // var myTmpl = _.template(template, data);
            // $(someElement).html(myTmpl);
 
        },
        initEvents: function() {
            // complete a todo
            $("ul.todos").on("click", "li", this.completeTodo;
            // add a todo
            $("form").on("submit", this.addTodoItem);
            $(".actionContainer").on("click", ".clearCompleted", this.clearCompleted)
 
        },
        addTodoItem: function() {
            var newItem = $(".todoInput").val();
            var newTodoItem = {
                todo: newItem
            };
            todos.push(newTodoItem);
            this.render($(".todos"), $("#itemTmpl").html(), todos);
 
        },
        completeTodo: function() {
 
            $(this).toggleClass("strike");
            var completedTodoText = $(this).closest("li").text();
 
            var completedItem = {
                todo: completedTodoText
            };
 
            completeTodos.push(completedItem);
 
        },
        clearCompleted: function() {},
        render: function($el, template, data) {
 
            var tmpl = _.template(template, data);
            $el.html(tmpl);
        }
        
 
};