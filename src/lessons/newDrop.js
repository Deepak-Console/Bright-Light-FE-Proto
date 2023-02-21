import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import Groups from './groups'

function DropdownItemTagsExample() {

    const retrieveGroupDetails = (e) => {
        alert('HI', e.target.value)
    }
    
    return (
        <DropdownButton id="dropdown-item-button" title="Dropdown button">
            {Object.keys(Groups()).map((group) => {
                 <Dropdown.Item as="button" value={group} key={group} onClick={retrieveGroupDetails}>{group}</Dropdown.Item>
            })}
        </DropdownButton>
    );
}

export default DropdownItemTagsExample;