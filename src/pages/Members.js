import React from 'react';
import Select from 'react-select';

import { useState, useEffect } from 'react';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Figure from 'react-bootstrap/Figure';


const aquaticCreatures = [
  { label: 'Shark', value: 'Shark' },
  { label: 'Dolphin', value: 'Dolphin' },
  { label: 'Whale', value: 'Whale' },
  { label: 'Octopus', value: 'Octopus' },
  { label: 'Crab', value: 'Crab' },
  { label: 'Lobster', value: 'Lobster' },
];

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

function App() {

  let [selectUser, setSelectUser] = useState({
    name: '',
    email: '',
    phone: '',
    groups: [],
    address: ''
  })
  let [user, setUser] = useState([])
  let [selectUserGroup, setSelectUserGroup] = useState([])
  let [Allgroups, setAllgroups] = useState([{ label: 'grp001', value: 'grp001' }, { label: 'grp002', value: 'grp002' }, { label: 'grp003', value: 'grp003' }, { label: 'grp004', value: 'grp004' }])

  useEffect(() => {
    setUser(userData)
    //   onChangeGroup(selectUser)
    /*   setSelectUser({
        groups: Curr.groups
      }); */

  }, []);

  const handleChange = (event) => {
    console.log('handleChange', event.target.name)
    /*  setSelectUser({ [event.target.name]: event.target.value }) */

    setSelectUser((prevForm) => ({
      ...prevForm,
      [event.target.name]: event.target.value
    }));
  }

  const onChangeGroup = (value) => {
    console.log('onchange', value)
    setSelectUser((prevForm) => ({
      ...prevForm,
      groups: value.groups
    }));
  };

  const handleSubmit = () => {
    console.log('user', selectUser)
  }

  const handleSelect = (opt) => {
    console.log('hello', opt)
    let groups = Array.isArray(opt.groups) ? opt.groups.map((val) => {
      return { label: val, value: val }
    }) : []

    opt.groups = groups
    console.log('hi', opt)
    setSelectUser({...opt})


   /*  setSelectUser((prevForm) => ({
      ...prevForm,
      opt
    })); */

    console.log('hi11', selectUser)


    /* setSelectUser({ groups: groups }) */
    /* setSelectUserGroup(groups) */

    /*  setSelectUserGroup(['grp1','grp3','grp6', 'grp003', 'grp002']) */
  }

  const customStyles = {
    control: base => ({
      ...base,
      height: 350,
      minHeight: 350
    })
  };

  return (
    <>
      <Container style={{ marginBottom: "16px" }}>
        <Row className="align-items-center justify-content-center">
          <Col lg={2}><h5>Members Search:</h5></Col>
          <Col lg={6}>
            <Select
              options={user}
              onChange={opt => handleSelect(opt)}
              /*  styles={customStyles} */
              maxMenuHeight={150}
              name="1"
            />
          </Col>
        </Row>
      </Container >

      {selectUser.name != '' ?
        <Container>
          <Row className="align-items-center justify-content-center">
            <h2>Member Info</h2>
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
                  onChange={opt => onChangeGroup(opt)}
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
                <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)} >
                  Submit
                </Button>
              </Form.Group>
            </Col>
          </Row>
        </Container>
        :
        ''
      }
    </>
  );
}

export default App;