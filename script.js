// Get the form and list elements from the page
const form = document.querySelector("#todo");
const list = form.querySelector("ul");

// Keep a list of the current tasks
const tasks = [];

// Listen for whenever the form is submitted
form.addEventListener("submit", event => {
	// Prevent default form submission behavior
	event.preventDefault();

	// Grab the form element with the name "input"
	const { input } = event.currentTarget;

	// Grab the value of the input
	const { value } = input;

	// Return early if there is no input value
	if (!value) return;

	// Add the input value to the tasks list
	tasks.push(value);

	// Render the task list
	renderTaskList();

	// Clear the input
	input.value = "";
});

/** Renders the task list */
function renderTaskList() {
	// Clear the existing list
	list.innerHTML = "";

	// Iterate through the tasks
	tasks.forEach(task => {
		// Create a list item element
		const li = document.createElement("li");

		// Give it this task's text
		li.textContent = task;

		// Append it to the list
		list.append(li);
	});
}
