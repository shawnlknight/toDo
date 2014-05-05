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




	//Clear completed tasks
	$("#clearComplete").on('click', function() {
		var removeIndex = $(".lineThrough").data("index");
		console.log(removeIndex);
		var deleted;

	    tasks.splice(removeIndex, 1);

	    
	    var myTasks = _.template($("#tasksTmpl").html(), tasks);
		$(".taskList").html(myTasks);

	    });




 





	//
	$("#active").click(function() {
      event.preventDefault();

		$(".lineThrough").closest("li").toggle();
		$(".lineThrough").addClass("hide");
		});

	$("#all").click(function() {
      event.preventDefault();

		$(".lineThrough").closest("li").toggle();
		$(".lineThrough").removeClass("hide");
		});


	









});









