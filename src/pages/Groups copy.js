import React from 'react';
import Select from 'react-select';

import { useState, useEffect } from 'react';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Figure from 'react-bootstrap/Figure';


import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const groupsData = [
  { label: 'Group1 - 100k', name: 'G00001', users: ['0000001', '0000002', '0000003', '0000004', '0000005', '0000006', '0000007', '0000008', '0000009', '0000010', '0000011', '0000012', '0000013', '0000014', '0000015', '0000016', '0000017', '0000018', '0000019', '0000020'], positions: { 1: '0000010', 2: '0000012', 3: '0000002', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '', 10: '', 11: '', 12: '', 13: '', 14: '', 15: '', 16: '', 17: '', 18: '', 19: '', 20: '' }, startDate: '01/09/2022', amount: '100000' },

  { label: 'Group1 - 10k', name: 'G00002', users: ['0000001', '0000002', '0000003', '0000004', '0000005', '0000006', '0000007', '0000008', '0000009', '0000010', '0000011', '0000012', '0000013', '0000014', '0000015', '0000016', '0000017', '0000018', '0000019', '0000020'], positions: { 1: '0000010', 2: '0000012', 3: '0000002', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '', 10: '', 11: '', 12: '', 13: '', 14: '', 15: '', 16: '', 17: '', 18: '', 19: '', 20: '' }, startDate: '01/09/2022', amount: '10000' }
]

function App() {

  let [selectGroup, setSelectGroup] = useState({
    name: '',
    users: [],
    positions: {},
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


  return (
    <>
      <Container style={{ marginBottom: "16px" }}>
        <Row className="align-items-center justify-content-center">
          <Col lg={2}><h5>Members Search:</h5></Col>
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



      {selectGroup.name != '' ?
      /*   <Container>
          <Row className="align-items-center justify-content-center">
            <h4>Group Info</h4>
          </Row>
          <Row className="align-items-center justify-content-center">
            <p>Amount : {selectGroup.amount}</p>
            <p>startDate: {selectGroup.startDate}</p>
          </Row>
        </Container> */  <Container>
          <Row className="align-items-center justify-content-center">
            <Col lg={6}>
              <DragDropContext>
              {/*   <Droppable droppableId="characters"> */}
                
                  <Droppable className="characters">
                    {
                    //console.log('selectGroup.users', selectGroup.users)
                    selectGroup.users.map((val) => {
                      console.log('selectGroup.users', val)
                      return (
                        
                        <Draggable key={val}>
                          <p>
                            {val}
                          </p>
                        </Draggable>
                      );
                    })}
                  </Droppable>
               {/*  </Droppable> */}
              </DragDropContext>
            </Col>
            <Col lg={6}><h5>Members Search:</h5></Col>
          </Row>
        </Container>
        :
        ''
      }
    </>
  );
}

export default App;