Templates = {};

Templates.todo = [
  "<% _.each(tasks, function(tasks, index , list) { %>",
    "<li data-tasksId=\"<%= tasks._id %>\" class=\"tasksTitle <%= tasks.completed = false ? 'lineThrough' : 'something' %>\" data-index=\"<%= index %>\">",
    "<span class=\"glyphicon glyphicon-ok toggleTask\"></span><%= tasks.title %>",
    "<br>", 
    "<span class=\"glyphicon glyphicon-pencil updateTodo\"></span>", 
    "<span class=\"glyphicon glyphicon-trash deleteTodo\"></span></li>",
    "<% }); %>"

].join("\n");

Templates.update = [
  "<div class=\"modal-body\">",
      "<div class=\"form-group\">",
         "<input type=\"text\" class=\"form-control editTodoTitle\" id=\"editTodoTitle\" value=\"<%= tasks.title %>\">",
      "</div>",
  "</div>",
  "<div class=\"modal-footer\" data-tasksId=\"<%= tasks._id %>\">",
    "<input id=\"editTasksId\" type=\"hidden\" value=\"<%= tasks._id %>\">",
    "<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>",
    "<button type=\"button\" class=\"btn btn-success submitUpdateTodo\">Save changes</button>",
  "</div>"

].join("\n");