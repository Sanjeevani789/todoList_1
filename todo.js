const taskInput = document.getElementById('task');
  const addTaskButton = document.getElementById('add-task');
  const taskList = document.getElementById('tasks');

  addTaskButton.addEventListener('click', function () {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      const taskItem = document.createElement('li');
      taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-task">Delete</button>
      `;
      taskList.appendChild(taskItem);
      taskInput.value = '';

      const deleteButton = taskItem.querySelector('.delete-task');
      deleteButton.addEventListener('click', function () {
        taskList.removeChild(taskItem);
      });
    }
  });