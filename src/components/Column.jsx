import Card from './Card';
import { Button } from "@/components/ui/button";
import { Droppable } from 'react-beautiful-dnd';

const Column = ({ columnId, column, addNewCard }) => {
  return (
    <Droppable droppableId={columnId}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          <div className="min-h-[200px]">
            {column.cards.map((card, index) => (
              <Card key={card.id} card={card} index={index} />
            ))}
            {provided.placeholder}
          </div>
          <Button onClick={addNewCard} className="w-full mt-4">Add Card</Button>
        </div>
      )}
    </Droppable>
  );
};

export default Column;
