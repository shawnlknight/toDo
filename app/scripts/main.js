$(document).ready(function() {
	// DOM Items Here

	// var myTasks = _.template($("#tasksTmpl").html(), tasks);

	// $(".taskList").append(myTasks);



// This keeps track of current tasks
$(".itemsLeft").html(tasks.length+" items left");


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

		// This keeps track of current tasks
		$(".itemsLeft").html(tasks.length+" items left");
	});


	// This removes task from list
	// $(".taskList").on("click", ".toggleTask", function() {
	// 	$(this).closest("li").remove();
	// });


	//Tooggle class lineThrough with this function. Event delegation.
	$(".taskList").on("click", ".toggleTask", function() {
		console.log("working");
		$(this).closest("li").toggleClass("lineThrough");

		// This keeps track of current tasks w/ lineThrough class applied
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

	    // This keeps track of current tasks
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
			
        // This keeps track of current tasks
		$(".itemsLeft").html(tasks.length+" items left");
		
	});


	// Remove completed item
	$("#clearComplete").on("click", function() {
		console.log("hey I'm working");
		$(".lineThrough").closest("li").remove();
	});









});









