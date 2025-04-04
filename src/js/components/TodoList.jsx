import { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Lista de Tareas</h2>
      <div className="flex gap-2 mb-4">
        <Input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nueva tarea"
        />
        <Button onClick={addTask}>Agregar</Button>
      </div>
      <div className="space-y-2">
        {tasks.map((task, index) => (
          <Card key={index} className="flex justify-between p-2">
            <CardContent>{task}</CardContent>
            <Button variant="destructive" onClick={() => removeTask(index)}>
              <Trash2 size={16} />
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
export default TodoList;