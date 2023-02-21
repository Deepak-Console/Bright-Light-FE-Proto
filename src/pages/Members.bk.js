import Table from 'react-bootstrap/Table';
/*import Form from 'react-bootstrap/Form';

  <Form>
              <div key={`inline-checkbox`} className="mb-3">
                <Form.Check
                  inline
                  name="group1"
                  type="checkbox"
                  id={`inline-checkbox-all`}
                />
              </div>
            </Form> */

const Members = () => {
  return (
    <Table striped bordereless>
      <thead>
        <tr>
          <th>#</th>
          <th>Profile</th>
          <th>Username</th>
          <th>Phone</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>

  )
};

export default Members;