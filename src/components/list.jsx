export default function List({ task }) {
  return (
    <div>
      <ul className="list-container">
        {task.map((task) => {
          return (
            <li key={task.id}>
              <div className="list-item">
                <button>Update</button>
                <p>{task.name}</p>
                <button>Delete</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
