$(document).ready(function() {
	// DOM Items Here

	// var myTasks = _.template($("#tasksTmpl").html(), tasks);

	// $(".taskList").append(myTasks);


	$(".taskList").on("click", ".removeTask", function() {
		$(this).closest("ul").remove();
	});


	$(".jumbotron").on("click", "button", function() {

		$('#myModal').modal();

	});

	$("#newTaskForm").on("submit", function(e) {
		e.preventDefault();
		var taskItem = $(".newTaskItem").val();
		console.log(taskItem);

		var newTaskObj = {
			title: taskItem
		};

		tasks.unshift(newTaskObj);
		var myTasks = _.template($("#tasksTmpl").html(), tasks);
			$(".taskList").html(myTasks);


		$(".newTaskItem").val("");
	});








  });