import { Droppable } from 'react-beautiful-dnd';
import Card from './Card';
import { Button } from "@/components/ui/button";

const Column = ({ column, addNewCard }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md w-72">
      <h2 className="text-lg font-semibold mb-4">{column.title}</h2>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="min-h-[200px]"
          >
            {column.cards.map((card, index) => (
              <Card key={card.id} card={card} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Button onClick={addNewCard} className="w-full mt-4">Add Card</Button>
    </div>
  );
};

export default Column;
