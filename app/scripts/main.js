$(document).ready(function() {
	// DOM Items Here




// Keeps track of current tasks
$(".itemsLeft").html(tasks.length+" items left");



	//Create new tasks
	$("#newTaskForm").on("submit", function(e) {
		e.preventDefault();
		var taskItem = $(".newTaskItem").val();
		console.log(taskItem);

		var newTaskObj = {
			title: taskItem
		};

		tasks.push(newTaskObj);
		var myTasks = _.template($("#tasksTmpl").html(), tasks);
			$(".taskList").html(myTasks);

		$(".newTaskItem").val("");

		// Keeps track of current tasks
		$(".itemsLeft").html(tasks.length+" items left");
	});





	//Tooggle class lineThrough with this function. Event delegation.
	$(".taskList").on("click", ".toggleTask", function() {
		var toggleIndex = $(tasks).closest("li").data("index");
		console.log(toggleIndex);

	    $(this).closest("li").toggleClass("lineThrough");

		// Keeps track of current tasks w/ lineThrough class applied
		var currentTasks = $(".taskList li").not(".lineThrough");
		console.log(currentTasks);
		$(".itemsLeft").html(currentTasks.length+" items left");
	});

	




	//Double-click to edit task
	var originalTask;
	$(".taskList").on('dblclick', 'li', function() {
		var thisIndex = $(this).closest("li").data("index");
		console.log(thisIndex);

	    originalTask = $(this).text();

	    tasks.splice(thisIndex, 1);
	    $(this).text("");
	    $("<input type='text'>").appendTo(this).focus();


	    // Keeps track of current tasks
	    $(".itemsLeft").html(tasks.length+" items left");
	});

	$(".taskList").on('focusout', 'li > input', function() {

	    var $this = $(this);

	    var newTaskObj = {
			title: $this.val() || originalTask
		};

		tasks.unshift(newTaskObj);
		var myTasks = _.template($("#tasksTmpl").html(), tasks);
			$(".taskList").html(myTasks);

			
        // Keeps track of current tasks
		$(".itemsLeft").html(tasks.length+" items left");
		
	});




	//Clear all todos
	$("#clearAll").on('click', function() {
		var removeIndex = $(this).data("index");
		console.log(removeIndex);
		var deleted;

		// if(removeIndex) {

	    tasks.splice(removeIndex);
	            // Keeps track of current tasks
		$(".itemsLeft").html(tasks.length+" items left");

	// };

	    
	    var myTasks = _.template($("#tasksTmpl").html(), tasks);
		$(".taskList").html(myTasks);

	    });


	//Clear completed todos
	$(".taskList").on("click", ".deleteTodo", function() {
		var removeIndex = $(this).closest("li").data("index");
		console.log(removeIndex);
		var deleted;

	    tasks.splice(removeIndex, 1);

	    var myTasks = _.template($("#tasksTmpl").html(), tasks);
		$(".taskList").html(myTasks);

		 // Keeps track of current tasks
		$(".itemsLeft").html(tasks.length+" items left");

	    });
	


	// Switch views of tasks
	$("#active").click(function() {
      event.preventDefault();

		$(".lineThrough").addClass("hide");
		});

	$("#all").click(function() {
      event.preventDefault();

		$(".lineThrough").removeClass("hide");
		});





});









