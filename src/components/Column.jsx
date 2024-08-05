import Card from './Card';
import { Button } from "@/components/ui/button";

const Column = ({ column, addNewCard }) => {
  return (
    <>
      <div className="min-h-[200px]">
        {column.cards.map((card, index) => (
          <Card key={card.id} card={card} index={index} />
        ))}
      </div>
      <Button onClick={addNewCard} className="w-full mt-4">Add Card</Button>
    </>
  );
};

export default Column;
