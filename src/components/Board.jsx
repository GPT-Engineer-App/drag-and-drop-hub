import { Droppable } from 'react-beautiful-dnd';
import Column from './Column';

const Board = ({ columns, addNewCard }) => {
  return (
    <div className="flex space-x-4 overflow-x-auto pb-4">
      {Object.values(columns).map((column) => (
        <Droppable key={column.id} droppableId={column.id}>
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="bg-gray-200 p-4 rounded-lg shadow-md w-72"
            >
              <h2 className="text-lg font-semibold mb-4">{column.title}</h2>
              <Column column={column} addNewCard={() => addNewCard(column.id)} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      ))}
    </div>
  );
};

export default Board;
