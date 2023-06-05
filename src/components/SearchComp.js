import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchComp = () => {
    return <>
        <InputGroup className="mb-3">
            <Form.Control
                placeholder="Search menu..."
            />
            <InputGroup.Text className='search__button'>
                <FontAwesomeIcon icon={faSearch} />
            </InputGroup.Text>
        </InputGroup>
    </>
}

export default SearchComp