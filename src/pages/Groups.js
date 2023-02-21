import React, { Component } from "react";
import Select from 'react-select';

import { useState, useEffect } from 'react';

import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Figure from 'react-bootstrap/Figure';

const userData = [
  { label: 'Deepak - 0000001', name: 'Deepak', phone: '0000001', groups: ['grp003', 'grp002'], address: 'No 1, K K nagar, Panapakkam', reference: 'user001' },
  { label: 'Subha - 0000002', name: 'Subha', phone: '0000002', groups: ['grp001', 'grp002'], address: 'No 2, K K nagar, Panapakkam', reference: 'user002' },
  { label: 'Samyuktha - 0000003', name: 'Samyuktha', phone: '0000003', groups: ['grp001', 'grp002'], address: 'No 2, K K nagar, Panapakkam', reference: 'user002' },
  { label: 'Chandran - 0000004', name: 'Chandran', phone: '0000004', groups: ['grp003', 'grp002'], address: 'No 1, K K nagar, Panapakkam', reference: 'user001' },
  { label: 'Amutha - 0000005 ', name: 'Amutha', phone: '0000005', groups: ['grp004', 'grp002'], address: 'No 2, K K nagar, Panapakkam', reference: 'user002' },
  { label: 'Divya - 0000006', name: 'Divya', phone: '0000006', groups: ['grp001', 'grp002'], address: 'No 1, K K nagar, Panapakkam', reference: 'user001' },
  { label: 'Lakshman - 0000007', name: 'Lakshman', phone: '0000007', groups: ['grp003', 'grp002'], address: 'No 2, K K nagar, Panapakkam', reference: 'user002' },
  { label: 'Shivani - 0000008', name: 'Shivani', phone: '0000008', groups: ['grp001', 'grp002'], address: 'No 1, K K nagar, Panapakkam', reference: 'user001' },
  { label: 'Sathya - 0000009', name: 'Sathya', phone: '0000009', groups: ['grp003', 'grp002'], address: 'No 2, K K nagar, Panapakkam', reference: 'user002' },
  { label: 'Sai - 0000010', name: 'Sai', phone: '0000010', groups: ['grp003', 'grp002'], address: 'No 2, K K nagar, Panapakkam', reference: 'user002' },
  { label: 'Tharun - 0000011', name: 'Tharun', phone: '0000011', groups: 'grp003, grp002', address: 'No 2, K K nagar, Panapakkam', reference: 'user002' }
]

const groupsData = [
  {
    label: 'Group1 - 100k', name: 'G00001', users: {
      '0000001': { isTaken: true, id: '', amount: '76000', Position: '', name: 'Deepak' },
      '0000002': { isTaken: true, id: '', amount: '', Position: 4, name: 'Subha' },
      '0000003': { isTaken: true, id: '', amount: '', Position: '', name: 'Samyuktha' },
      '0000004': { isTaken: true, id: '', amount: '', Position: 3, name: 'Chandran' },
      '0000005': { isTaken: true, id: '', amount: '', Position: '', name: 'Amutha' },
      '0000006': { isTaken: true, id: '', amount: '', Position: '', name: 'Divya' },
      '0000007': { isTaken: true, id: '', amount: '', Position: 1, name: 'Laxman' },
      '0000008': { isTaken: true, id: '', amount: '76000', Position: '', name: 'sivani' },
      '0000009': { isTaken: true, id: '', amount: '', Position: 2, name: 'sathya' },
      '0000010': { isTaken: true, id: '', amount: '', Position: '', name: 'Deepak' },
      '0000011': { isTaken: true, id: '', amount: '', Position: '', name: 'Deepak' },
      '0000012': { isTaken: true, id: '', amount: '', Position: '', name: 'Deepak' },
      '0000013': { isTaken: true, id: '', amount: '', Position: '', name: 'Deepak' },
      '0000014': { isTaken: true, id: '', amount: '', Position: '', name: 'Deepak' },
      '0000015': { isTaken: true, id: '', amount: '', Position: '', name: 'Deepak' },
      '0000016': { isTaken: true, id: '', amount: '', Position: '', name: 'Deepak' },
      '0000017': { isTaken: true, id: '', amount: '', Position: '', name: 'Deepak' },
      '0000018': { isTaken: true, id: '', amount: '', Position: '', name: 'Deepak' },
      '0000019': { isTaken: true, id: '', amount: '', Position: '', name: 'Deepak' },
      '0000020': { isTaken: true, id: '', amount: '', Position: '', name: 'Deepak' },
    }, startDate: '01/09/22', amount: '100000'
  },
  {
    label: 'Group1 - 10k', name: 'G00001', users: {
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
    }, startDate: '01/08/22', amount: '10000'
  }
]


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
  background: isDragging ? "lightgreen" : "#f6f6f6",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "#e5e2eb" : "#f7f7f9",
  padding: grid,
  /*   width: 500 */
});


function App() {
  /* constructor(props) {
    super(props);
    this.state = {
      items: getItems(10),
      selectedItem: ''
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  } */


  let [selectUser, setSelectUser] = useState({
    name: '',
    email: '',
    phone: '',
    groups: [],
    address: ''
  })
  let [user, setUser] = useState([])

  useEffect(() => {
    setUser(userData)
  }, []);

  let [Allgroups, setAllgroups] = useState([{ label: 'grp001', value: 'grp001' }, { label: 'grp002', value: 'grp002' }, { label: 'grp003', value: 'grp003' }, { label: 'grp004', value: 'grp004' }])


  let [selectGroup, setSelectGroup] = useState({
    name: '',
    users: {},
    startDate: '',
    amount: ''
  })
  let [groups, setGroups] = useState([])

  useEffect(() => {
    setGroups(groupsData)
  }, []);

  const handleSelect = (opt) => {
    console.log('handleSelect group before', opt, selectGroup)
    setSelectGroup(opt)

    console.log('handleSelect group after', selectGroup)

  }


  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      selectGroup.users,
      result.source.index,
      result.destination.index
    );

    setSelectGroup({
      items
    });
  }


  const handleChange = (selectedData) => {
    console.log('handleChange', selectedData)
    console.log('user', user)
    let selectedUser = user.filter((item) => item.phone == selectedData)
    console.log('selectedUser', selectedUser)
    /*  setSelectUser({...selectedUser[0]}) */
    /* this.setState({
      selectedItem: selectedData
    }); */

    setSelectUser({
      ...selectUser,
      ...selectedUser[0]
    });

    console.log('selectUser', selectUser)
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity

  return (
    <>
      <Container style={{ marginBottom: "16px" }}>
        <Row className="align-items-center justify-content-center">
          <Col lg={2}><h5>Groups Search:</h5></Col>
          <Col lg={6}>
            <Select
              options={groups}
              onChange={opt => handleSelect(opt)}
              /*  styles={customStyles} */
              maxMenuHeight={150}
              name="1"
            />
          </Col>
        </Row>
      </Container >
      <Container className="align-items-center justify-content-center">
        <Row className="">
          <Col lg={5}>
            <DragDropContext onDragEnd={() => onDragEnd()}>
              <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                  >
                    {Object.keys(selectGroup.users).map((item, index) => (
                      <>
                        <Row onClickCapture={() => handleChange(item)} className="align-items-center" name={selectGroup.users[item].name} key={item + index}>
                          <Col lg={2}><h6>{index + 1}</h6></Col>
                          <Col lg={8}>
                            <Draggable isDragDisabled={index === 0} key={item + index} draggableId={item + index} index={index}>
                              {(provided, snapshot) => (
                                <>
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={getItemStyle(
                                      snapshot.isDragging,
                                      provided.draggableProps.style
                                    )}
                                  >
                                    <Col>{selectGroup.users[item].name}</Col>

                                  </div>
                                </>
                              )}
                            </Draggable>


                          </Col>
                          <Col>{selectGroup.users[item].amount ? selectGroup.users[item].amount : ''}</Col>
                        </Row>

                      </>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </Col>
          <Col lg={7}>
            {

              selectUser.name ? <Container>
                {console.log('-----', selectUser)}
                <Row className="align-items-center justify-content-center">
                  <h5>Member Info</h5>
                </Row>
                <Row className="align-items-center">
                  <Col lg={4}>
                    <Form.Group controlId="formBasicName">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="text" name="name" value={selectUser.name} onChange={(e) => handleChange(e)} placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" name="email" value={selectUser.email} onChange={(e) => handleChange(e)} placeholder="Enter Email" />
                    </Form.Group>
                  </Col>

                  <Col lg={4}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="number" name="phone" value={selectUser.phone} onChange={(e) => handleChange(e)} placeholder="Enter Phone" />

                    </Form.Group>
                    <Form.Group controlId="formBasicGroup">
                      <Form.Label>Groups</Form.Label>
                      {console.log('render', selectUser.groups)}
                      <Select
                        isMulti
                        defaultValue={selectUser.groups}
                        options={Allgroups}
                        /*   onChange={opt => onChangeGroup(opt)} */
                        /*  styles={customStyles} */
                        maxMenuHeight={150}
                        name="2"
                      />


                      {/*   <Form.Control type="text" name="groups" value={selectUser.groups} onChange={(e) => handleChange(e)} placeholder="Enter Groups" /> */}
                    </Form.Group>
                  </Col>

                  <Col lg={4} className="align-items-center justify-content-center" style={{ 'text-align-last': 'center' }}>
                    <h5>Profile</h5>
                    <Figure>
                      <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src="sparkle.png"
                      />
                    </Figure>
                  </Col>


                </Row>
                <Row className="align-items-center">
                  <Col lg={8}>
                    <Form.Group controlId="formBasicAddress">
                      <Form.Label>Address</Form.Label>
                      <Form.Control as="textarea" name="address" value={selectUser.address} onChange={(e) => handleChange(e)} placeholder="Address" />
                    </Form.Group>

                    <Form.Group className="d-grid gap-2 mt-3" controlId="submit">
                      <Button variant="primary" type="submit" /* onClick={(e) => handleSubmit(e)}  */>
                        Submit
                      </Button>
                    </Form.Group>
                  </Col>
                  <Col lg={4}>
                    <h3>Status:</h3>
                    <Button variant="success"></Button>
                  </Col>

                </Row>
              </Container> : ''
            }
          </Col>
        </Row>
      </Container>
    </>
  );

}

// Put the thing into the DOM!
export default App;