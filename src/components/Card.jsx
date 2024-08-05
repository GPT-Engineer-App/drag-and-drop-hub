import { Draggable } from 'react-beautiful-dnd';

const Card = ({ card, index }) => {
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`bg-white p-3 mb-2 rounded shadow-sm ${
            snapshot.isDragging ? 'opacity-50' : ''
          }`}
        >
          {card.content}
        </div>
      )}
    </Draggable>
  );
};

export default Card;
