function TodoList() {
  const [task, setTask] = React.useState('');
  const [tasks, setTasks] = React.useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>

      {/* Input et bouton Ajouter */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input 
          type="text" 
          value={task} 
          onChange={handleInputChange} 
          placeholder="Ajouter une tâche"
          style={{ padding: '10px', width: '300px', marginBottom: '10px' }}
        />
        <button 
          onClick={addTask} 
          style={{ padding: '10px', width: '300px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}>
          Ajouter
        </button>
      </div>

      {/* Affichage des tâches */}
      <ul style={{ marginTop: '20px' }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            {task}
            <div>
              <button 
                onClick={() => deleteTask(index)} 
                style={{ padding: '5px', backgroundColor: '#ff4b4b', color: 'white', border: 'none', borderRadius: '5px' }}>
                Supprimer
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<TodoList />, document.getElementById('root'));
