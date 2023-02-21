import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

import NavbarDarkExample from './dropDownComponents'

import DropdownItemTagsExample from './newDrop'
import React, { useEffect, useState } from "react";

function SmallExample() {
    let info = {
        name: '',
        group: '',
        month: '',
        amount: '',
        previousMonth: '',
        previousDiscount: '',
        discount: '',
        payAmount: ''
    }

    let [personalInfo, setPersonalInfo] = useState(info)

    useEffect(() => {
        setTimeout(() => {
            setPersonalInfo({
                name: 'deepak',
                group: '',
                month: '',
                amount: '',
                previousMonth: '',
                previousDiscount: '',
                discount: '',
                payAmount: ''
            })
        }, 2000);
    }, []);

    return (

        <>
        <DropdownItemTagsExample />
            <Card border="primary" style={{ width: '25rem' }}>
                <Card.Header>திரௌபதியம்மன் துணை</Card.Header>
                <Card.Body>
                    <Card.Title>சீட்டு ஏல அறிவிப்பு</Card.Title>
                    <Table striped borderless hover size="lg">
                        <tbody>
                            <tr>
                                <td>பெயர்</td>
                                <td className="personalInfo">{personalInfo.name}</td>
                            </tr>
                            <tr>
                                <td>குழு</td>
                                <td className="personalInfo">{personalInfo.group}</td>
                            </tr>
                            <tr>
                                <td>மாதம்</td>
                                <td className="personalInfo">{personalInfo.month}</td>
                            </tr>
                            <tr>
                                <td>சீட்டு தொகை</td>
                                <td className="personalInfo">{personalInfo.amount}</td>
                            </tr>
                            <tr>
                                <td>முன் மாத ஏல தொகை</td>
                                <td className="personalInfo">{personalInfo.previousMonth}</td>
                            </tr>
                            <tr>
                                <td>முன் மாத தள்ளு</td>
                                <td className="personalInfo">{personalInfo.previousDiscount}</td>
                            </tr>
                            <tr>
                                <td>தள்ளு</td>
                                <td className="personalInfo">{personalInfo.discount}</td>
                            </tr>
                            <tr>
                                <td>கட்ட வேண்டியது</td>
                                <td className="personalInfo">{personalInfo.payAmount}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
                <Card.Footer className="text-muted">நேரம்: 23/08/1997 11:00AM</Card.Footer>
            </Card>

            {/*  <Card border="primary" style={{ width: '25rem' }}>
                <Card.Header>திரௌபதியம்மன் துணை</Card.Header>
                <Card.Body>
                    <Card.Title>சீட்டு ஏல அறிவிப்பு</Card.Title>
                    <Table striped borderless hover size="lg">
                        <tbody>
                            <tr>
                                <td>பெயர்</td>
                                <td className="personalInfo">எஸ்.சுபலட்சுமி</td>
                            </tr>
                            <tr>
                                <td>குழு</td>
                                <td className="personalInfo">v1</td>
                            </tr>
                            <tr>
                                <td>மாதம்</td>
                                <td className="personalInfo">3</td>
                            </tr>
                            <tr>
                                <td>சீட்டு தொகை</td>
                                <td className="personalInfo">100000</td>
                            </tr>
                            <tr>
                                <td>முன் மாத ஏல தொகை</td>
                                <td className="personalInfo">73000</td>
                            </tr>
                            <tr>
                                <td>முன் மாத தள்ளு</td>
                                <td className="personalInfo">27000</td>
                            </tr>
                            <tr>
                                <td>தள்ளு</td>
                                <td className="personalInfo">23000</td>
                            </tr>
                            <tr>
                                <td>கட்ட வேண்டியது</td>
                                <td className="personalInfo">3890</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
                <Card.Footer className="text-muted">நேரம்: 23/08/1997 11:00AM</Card.Footer>
            </Card>
 */}
        </>

    );
}

export default SmallExample;