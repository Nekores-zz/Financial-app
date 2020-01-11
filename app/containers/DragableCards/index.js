import React, { Component } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag, generateItems } from './utils';

const lorem = `Lorem ipsum dolor sit amet, `;

const columnNames = ['Lorem', 'Ipsum'];

const newArray = [
  { type: 'draggable', id: '00', data: 'hello world, ' },
  { type: 'draggable', id: '01', data: 'boodbuy asdsd, ' },
  { type: 'draggable', id: '02', data: 'Lorem ipsum dolor sit amet, ' },
  { type: 'draggable', id: '03', data: 'Ladsdsadam dolor sit amet, ' },
];
const colNewArray = [
  {
    id: 'column0',
    type: 'container',
    name: 'column0',
    props: { orientation: 'vertical', className: 'card-container' },
    children: newArray,
  },
  {
    id: 'column2',
    type: 'container',
    name: 'column1',
    props: { orientation: 'vertical', className: 'card-container' },
    children: newArray,
  },
];

class DragableCards extends Component {
  constructor() {
    super();

    this.onColumnDrop = this.onColumnDrop.bind(this);
    this.onCardDrop = this.onCardDrop.bind(this);
    this.getCardPayload = this.getCardPayload.bind(this);
    this.state = {
      scene: {
        type: 'container',
        props: {
          orientation: 'horizontal',
        },
        children: generateItems(4, i => ({
          id: `column${i}`,
          type: 'container',
          name: columnNames[i],
          props: {
            orientation: 'vertical',
            className: 'card-container',
          },
          children: generateItems(+(Math.random() * 10).toFixed() + 5, j => ({
            type: 'draggable',
            id: `${i}${j}`,
            data: lorem.slice(0, Math.floor(Math.random() * 150) + 30),
          })),
        })),
      },
    };
  }

  render() {
    return (
      <div className="card-scene">
        <Container
          orientation="horizontal"
          onDrop={this.onColumnDrop}
          dragHandleSelector=".column-drag-handle"
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: 'cards-drop-preview',
          }}
        >
          {colNewArray.map(column => {
            console.log(this.state.scene.children, 'hell');
            return (
              <Draggable key={column.id}>
                <div className={column.props.className}>
                  <div className="card-column-header">
                    <span className="column-drag-handle">&#x2630;</span>
                    {column.name}
                  </div>
                  <Container
                    {...column.props}
                    groupName="col"
                    onDrop={e => {
                      // e.preventDefault();
                      this.onCardDrop(column.id, e);
                    }}
                    getChildPayload={index =>
                      this.getCardPayload(column.id, index)
                    }
                    dragClass="card-ghost"
                    dropClass="card-ghost-drop"
                    dropPlaceholder={{
                      animationDuration: 150,
                      showOnTop: true,
                      className: 'drop-preview',
                    }}
                    dropPlaceholderAnimationDuration={200}
                  >
                    {column.children.map(card => {
                      console.log(column.children, 'noway');
                      return (
                        <Draggable key={card.id}>
                          <div {...card.props}>
                            <p>{card.data}</p>
                          </div>
                        </Draggable>
                      );
                    })}
                  </Container>
                </div>
              </Draggable>
            );
          })}
        </Container>
      </div>
    );
  }

  getCardPayload(columnId, index) {
    return this.state.scene.children.filter(p => p.id === columnId)[0].children[
      index
    ];
  }

  onColumnDrop(dropResult) {
    const scene = Object.assign({}, this.state.scene);
    scene.children = applyDrag(scene.children, dropResult);
    this.setState({
      scene,
    });
  }

  onCardDrop(columnId, dropResult) {
    if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
      const scene = Object.assign({}, this.state.scene);
      const column = scene.children.filter(p => p.id === columnId)[0];
      const columnIndex = scene.children.indexOf(column);

      const newColumn = Object.assign({}, column);
      newColumn.children = applyDrag(newColumn.children, dropResult);
      scene.children.splice(columnIndex, 1, newColumn);

      this.setState({
        scene,
      });
    }
  }
}

export default DragableCards;
