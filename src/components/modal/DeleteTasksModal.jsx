export default function DeleteTasksModal({ onToggle, deleteAll }) {
  function deleteAllTasks() {
    onToggle(false);
    deleteAll([]);
  }

  return (
    <>
      <p>Are you sure ?</p>
      <div>
        <button onClick={deleteAllTasks} className="yes">
          Yes
        </button>
        <button
          onClick={() => {
            onToggle(false);
          }}
          className="no">
          No
        </button>
      </div>
    </>
  );
}
