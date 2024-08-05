import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Board from '../components/Board';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [columns, setColumns] = useState({
    todo: {
      id: 'todo',
      title: 'To Do',
      cards: [
        { id: 'task-1', content: 'Learn React' },
        { id: 'task-2', content: 'Build a Trello clone' },
      ]
    },
    'in-progress': {
      id: 'in-progress',
      title: 'In Progress',
      cards: [
        { id: 'task-3', content: 'Review code' },
      ]
    },
    done: {
      id: 'done',
      title: 'Done',
      cards: [
        { id: 'task-4', content: 'Setup project' },
      ]
    }
  });

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = columns[source.droppableId];
    const finish = columns[destination.droppableId];

    if (start === finish) {
      const newCards = Array.from(start.cards);
      const [reorderedItem] = newCards.splice(source.index, 1);
      newCards.splice(destination.index, 0, reorderedItem);

      const newColumn = {
        ...start,
        cards: newCards,
      };

      setColumns({
        ...columns,
        [newColumn.id]: newColumn,
      });
    } else {
      const startCards = Array.from(start.cards);
      const [movedItem] = startCards.splice(source.index, 1);
      const newStart = {
        ...start,
        cards: startCards,
      };

      const finishCards = Array.from(finish.cards);
      finishCards.splice(destination.index, 0, movedItem);
      const newFinish = {
        ...finish,
        cards: finishCards,
      };

      setColumns({
        ...columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      });
    }
  };

  const addNewCard = (columnId) => {
    const newCardId = `task-${Date.now()}`;
    const newCard = { id: newCardId, content: 'New Task' };
    setColumns(prevColumns => ({
      ...prevColumns,
      [columnId]: {
        ...prevColumns[columnId],
        cards: [...prevColumns[columnId].cards, newCard]
      }
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Trello Clone</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Board columns={columns} addNewCard={addNewCard} />
      </DragDropContext>
    </div>
  );
};

export default Index;
