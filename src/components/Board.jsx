import Column from './Column';

const Board = ({ columns, addNewCard }) => {
  return (
    <div className="flex space-x-4 overflow-x-auto pb-4">
      {Object.entries(columns).map(([columnId, column]) => (
        <div key={columnId} className="bg-gray-200 p-4 rounded-lg shadow-md w-72">
          <h2 className="text-lg font-semibold mb-4">{column.title}</h2>
          <Column columnId={columnId} column={column} addNewCard={() => addNewCard(columnId)} />
        </div>
      ))}
    </div>
  );
};

export default Board;
