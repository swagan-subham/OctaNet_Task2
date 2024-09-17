document.getElementById('add-task').addEventListener('click', function () {
    const taskText = document.getElementById('new-task').value;
    const dueDate = document.getElementById('due-date').value;
    const priority = document.getElementById('priority').value;
    const category = document.getElementById('category').value;

    // Validate task input
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');

    // Corrected string interpolation
    const taskContent = document.createElement('span');
    taskContent.textContent = `${taskText} - ${dueDate} - ${priority} - ${category}`;
    taskItem.appendChild(taskContent);

    const taskActions = document.createElement('div');
    taskActions.className = 'task-actions';

    // Complete button functionality
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', function () {
        taskItem.style.textDecoration = 'line-through';
    });
    taskActions.appendChild(completeButton);

    // Delete button functionality
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        taskList.removeChild(taskItem);
    });
    taskActions.appendChild(deleteButton);

    taskItem.appendChild(taskActions);
    taskList.appendChild(taskItem);

    // Reset form fields
    document.getElementById('new-task').value = '';
    document.getElementById('due-date').value = '';
    document.getElementById('priority').value = 'low';
    document.getElementById('category').value = 'work';
});
