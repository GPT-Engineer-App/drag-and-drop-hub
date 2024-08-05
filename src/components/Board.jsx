import Column from './Column';

const Board = ({ columns, addNewCard }) => {
  return (
    <div className="flex space-x-4 overflow-x-auto pb-4">
      {Object.entries(columns).map(([columnId, column]) => (
        <Column key={columnId} column={column} addNewCard={() => addNewCard(columnId)} />
      ))}
    </div>
  );
};

export default Board;
