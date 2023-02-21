import React, { Component } from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const groupsData = [
  { label: 'Group1 - 100k', name: 'G00001', users: {
    '0000001': { isTaken: true, id: '', name: '', Position: '' },
    '0000002': { isTaken: true, id: '', name: '', Position: '' },
    '0000003': { isTaken: true, id: '', name: '', Position: '' },
    '0000004': { isTaken: true, id: '', name: '', Position: '' },
    '0000005': { isTaken: true, id: '', name: '', Position: '' },
    '0000006': { isTaken: true, id: '', name: '', Position: '' },
    '0000007': { isTaken: true, id: '', name: '', Position: '' },
    '0000008': { isTaken: true, id: '', name: '', Position: '' },
    '0000009': { isTaken: true, id: '', name: '', Position: '' },
    '0000010': { isTaken: true, id: '', name: '', Position: '' },
    '0000011': { isTaken: true, id: '', name: '', Position: '' },
    '0000012': { isTaken: true, id: '', name: '', Position: '' },
    '0000013': { isTaken: true, id: '', name: '', Position: '' },
    '0000014': { isTaken: true, id: '', name: '', Position: '' },
    '0000015': { isTaken: true, id: '', name: '', Position: '' },
    '0000016': { isTaken: true, id: '', name: '', Position: '' },
    '0000017': { isTaken: true, id: '', name: '', Position: '' },
    '0000018': { isTaken: true, id: '', name: '', Position: '' },
    '0000019': { isTaken: true, id: '', name: '', Position: '' },
    '0000020': { isTaken: true, id: '', name: '', Position: '' },
  }},
  { label: 'Group1 - 10k', name: 'G00001', users: {
    '0000001': { isTaken: true, id: '', name: '', Position: '' },
    '0000002': { isTaken: true, id: '', name: '', Position: '' },
    '0000003': { isTaken: true, id: '', name: '', Position: '' },
    '0000004': { isTaken: true, id: '', name: '', Position: '' },
    '0000005': { isTaken: true, id: '', name: '', Position: '' },
    '0000006': { isTaken: true, id: '', name: '', Position: '' },
    '0000007': { isTaken: true, id: '', name: '', Position: '' },
    '0000008': { isTaken: true, id: '', name: '', Position: '' },
    '0000009': { isTaken: true, id: '', name: '', Position: '' },
    '0000010': { isTaken: true, id: '', name: '', Position: '' },
    '0000011': { isTaken: true, id: '', name: '', Position: '' },
    '0000012': { isTaken: true, id: '', name: '', Position: '' },
    '0000013': { isTaken: true, id: '', name: '', Position: '' },
    '0000014': { isTaken: true, id: '', name: '', Position: '' },
    '0000015': { isTaken: true, id: '', name: '', Position: '' },
    '0000016': { isTaken: true, id: '', name: '', Position: '' },
    '0000017': { isTaken: true, id: '', name: '', Position: '' },
    '0000018': { isTaken: true, id: '', name: '', Position: '' },
    '0000019': { isTaken: true, id: '', name: '', Position: '' },
    '0000020': { isTaken: true, id: '', name: '', Position: '' },
  }} 
]

let users = {
  '0000001': { isTaken: true, id: '', name: '', Position: '' },
  '0000002': { isTaken: true, id: '', name: '', Position: '' },
  '0000003': { isTaken: true, id: '', name: '', Position: '' },
  '0000004': { isTaken: true, id: '', name: '', Position: '' },
  '0000005': { isTaken: true, id: '', name: '', Position: '' },
  '0000006': { isTaken: true, id: '', name: '', Position: '' },
  '0000007': { isTaken: true, id: '', name: '', Position: '' },
  '0000008': { isTaken: true, id: '', name: '', Position: '' },
  '0000009': { isTaken: true, id: '', name: '', Position: '' },
  '0000010': { isTaken: true, id: '', name: '', Position: '' },
  '0000011': { isTaken: true, id: '', name: '', Position: '' },
  '0000012': { isTaken: true, id: '', name: '', Position: '' },
  '0000013': { isTaken: true, id: '', name: '', Position: '' },
  '0000014': { isTaken: true, id: '', name: '', Position: '' },
  '0000015': { isTaken: true, id: '', name: '', Position: '' },
  '0000016': { isTaken: true, id: '', name: '', Position: '' },
  '0000017': { isTaken: true, id: '', name: '', Position: '' },
  '0000018': { isTaken: true, id: '', name: '', Position: '' },
  '0000019': { isTaken: true, id: '', name: '', Position: '' },
  '0000020': { isTaken: true, id: '', name: '', Position: '' },
}

// fake data generator
const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`
  }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 2;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "#e5e2eb",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "#e5e2eb",
  padding: grid,
  /*   width: 500 */
});


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: getItems(10),
      selectedItem: ''
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items
    });
  }


  handleChange(selectedData) {
    console.log('handleChange', selectedData)


    this.setState({
      selectedItem: selectedData
    });
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <>
        <Container className="align-items-center justify-content-center">
          <Row className="align-items-center">
            <Col lg={6}>
              <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                  {(provided, snapshot) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={getListStyle(snapshot.isDraggingOver)}
                    >
                      {this.state.items.map((item, index) => (
                        <>
                          <Row onClickCapture={() => this.handleChange(item.id)} className="align-items-center border" name={item.id} key={item.id}>
                            <Col lg={2}><h6>{index + 1}</h6></Col>
                            <Col lg={8}  /* style={{backgroundColor : "red"}} */>
                              <Draggable isDragDisabled={index === 0} key={item.id} draggableId={item.id} index={index}>
                                {(provided, snapshot) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={getItemStyle(
                                      snapshot.isDragging,
                                      provided.draggableProps.style
                                    )}
                                  >
                                    {item.content}
                                  </div>
                                )}
                              </Draggable>
                            </Col>
                            <Col lg={2}>
                              <h6>{100000}</h6>
                            </Col>
                          </Row>

                        </>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </Col>
            {
              this.state.selectedItem ? this.state.selectedItem : ''
            }
          </Row>
        </Container>
      </>
    );
  }
}

// Put the thing into the DOM!
export default App;