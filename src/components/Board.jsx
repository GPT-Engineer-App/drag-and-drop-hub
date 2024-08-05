import Column from './Column';
import { Droppable } from 'react-beautiful-dnd';

const Board = ({ columns, addNewCard }) => {
  return (
    <div className="flex space-x-4 overflow-x-auto pb-4">
      {Object.entries(columns).map(([columnId, column]) => (
        <Droppable key={columnId} droppableId={columnId}>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className="bg-gray-200 p-4 rounded-lg shadow-md w-72">
              <h2 className="text-lg font-semibold mb-4">{column.title}</h2>
              <Column column={column} addNewCard={() => addNewCard(columnId)} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      ))}
    </div>
  );
};

export default Board;
