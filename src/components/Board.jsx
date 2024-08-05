import Column from './Column';

const Board = ({ columns }) => {
  return (
    <div className="flex space-x-4 overflow-x-auto pb-4">
      {Object.values(columns).map((column) => (
        <Column key={column.id} column={column} />
      ))}
    </div>
  );
};

export default Board;
