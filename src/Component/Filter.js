import Form from 'react-bootstrap/Form';

import CategoryJSON from '../mock/Category.json'

import { Link } from "react-router-dom";


function CheckApiExample({ filterBol }) {
    console.log('CheckApiExample', filterBol)

    return (
        <Form>
            <div className="mb-3">

                {
                    CategoryJSON.category.map((category, i) => {
                        return <Form.Check name="group1" type="radio" id={category.cid}>
                            <Link to={"/products?category=" + category.cid}> <Form.Check.Input type="radio" isValid /></Link>
                            <Form.Check.Label onClick={() => filterBol(category.cid)} >{category.name}</Form.Check.Label>
                        </Form.Check>
                    })
                }

            </div>
        </Form>
    );
}

export default CheckApiExample;