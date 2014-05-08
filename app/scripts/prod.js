$(document).ready(function() {
	// DOM Items Here
	todoApp.init();

});

var todoApp = {
	init: function() {
		this.initStyling();
		this.initEvents();
	},

	initStyling: function() {

		this.renderTodos();

	},

	initEvents: function() {
		// Keeps track of current tasks
		$(".itemsLeft").html(tasks.length+" items left");
		// add todo
		$("#newTaskForm").on("submit", this.addTodo);

		// line through completed todo
		$(".taskList").on("click", ".toggleTask", this.completeTodo);

		// edit todo
		$(".taskList").on('dblclick', 'li', function(e) {
			var todoId = $(this).closest("li").data("tasksid");
			console.log("you are editing");
			todoApp.renderFormDetail(todoId);
			$("#editTodoModal").modal();
		});

		// append edited todo to DOM
		$("#editTodoModal").on("click", ".submitUpdateTodo", function(e) {
			var todoId = $("#editTasksId").val();
			todoApp.updateTodo(todoId);
		});

		// Delete todo
		$(".taskList").on("click", ".deleteTodo", this.removeTodo)

	},

	render: function($el, template, data) {
		var tmpl = _.template(template, data);

		$el.html(tmpl);
	},

	renderTodos: function() {

		$.ajax({
		  url: 'http://tiy-fee-rest.herokuapp.com/collections/shawnTodo',
		  type: 'GET',
		  data: "json",
		  error: function(jqXHR, status, error) {
		  	alert("you fail hard");
		  },
		  success: function(data, dataType, jqXHR) {
		  	
		  	var tasks = window.tasks = data;
		  	todoApp.render($(".taskList"), Templates.todo, tasks);

		  	// Counts number of todos
		  	$(".itemsLeft").html(tasks.length+" items left");

		  }
		});
	},

	//Create new tasks
	addTodo: function(e) {
		e.preventDefault();

			var newTaskObj = {
				title: $(".newTaskItem").val(),
				completed: false
			};

		$.ajax({
	      url: 'http://tiy-fee-rest.herokuapp.com/collections/shawnTodo',
	      type: "POST",
	      data: newTaskObj, 
	      dataType: "json",
	      error: function(jqXHR, status, error) {
	        alert("couldn't add todo");
	      },
	      success: function(data, dataType, jqXHR) {
	        $(".newTaskItem").val("");
	        todoApp.renderTodos();  

	      }
	    });
	 },

	removeTodo: function() {
	    var $thisTodo = $(this).closest("li")
	    var todoId = $thisTodo.data("tasksid");
	    $.ajax({
	      url: 'http://tiy-fee-rest.herokuapp.com/collections/shawnTodo/' + todoId,
	      type: "DELETE",
	      error: function(jqXHR, status, error) {
	        alert("could not delete");
	      }, 
	      success: function(data) {
	      	console.log("it's gone forever!");
	         todoApp.renderTodos();  

	      }
	    });
	  },

	completeTodo: function() {
		console.log("line through");
			var $thisTodo = $(this).closest("li")
	    	var todoId = $thisTodo.data("tasksid");
	        var completeTodo = {
	              title: $(this).closest("li").text(),
	              completed: true
	        };
	    $.ajax({
	      url: "http://tiy-fee-rest.herokuapp.com/collections/shawnTodo/" + todoId,
	      type: "PUT",
	      data: completeTodo, 
	      error: function(jqXHR, status, error) {
	        alert("couldn't complete todo: " + error);
	      },
	      success: function(data, dataType, jqXHR) {
	        console.log("completed todo!");
	        // $(this).closest("li").toggleClass("lineThrough");
	   
	        todoApp.renderTodos();  

	      }
	    });
	  },

	updateTodo: function(todoId) {
	     console.log("edit");
	        var editTodo = {
	              title: $(".editTodoTitle").val()
	        };
	    $.ajax({
	      url: "http://tiy-fee-rest.herokuapp.com/collections/shawnTodo/" + todoId,
	      type: "PUT",
	      data: editTodo, 
	      error: function(jqXHR, status, error) {
	        alert("couldn't add todo: " + error);
	      },
	      success: function(data, dataType, jqXHR) {
	        console.log("edit todo");
	        $("#editTodoModal").modal("hide");
	        todoApp.renderTodos();  

	      }
	    });
	  },

	  renderFormDetail: function(todoId) {

	  	$.ajax({
	  		url: "http://tiy-fee-rest.herokuapp.com/collections/shawnTodo/" + todoId,
	  		type: "GET",
	  		dataType: "json",
	  		error: function(jqXHR, status, error) {
	  			alert("failure");
	  		},
	  		success: function(data, dataType, jqXHR) {

	  			var todo = window.tasks = data;
	  			todoApp.render($("#editTodoForm"),Templates.update, tasks);
	  		}
	  	});
	  }

};



		































