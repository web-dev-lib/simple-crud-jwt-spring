import React from 'react';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';

const UL = styled.ul`
    padding-left: 0;
    padding-top: 5px;
    margin-bottom: 0;
    color: ${({valid}) => valid ? '#28a745' : 'red'};
`
const LI = styled.li`
    list-style: none;
`
const Input = styled.input`
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    border-color: ${({valid}) => (valid === false) && 'red'};
    border-color: ${({valid}) => (valid === true) && '#28a745'};

    &:focus {
        color: #495057;
        background-color: #fff;
        border-color: #80bdff;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
    }
`

const Password = ({ onChange, label="Password", password: { value, isValid }, required }) => {
    return (
        <Form.Group controlId="password">
            <Form.Label>{label}</Form.Label>
            <Input 
                valid={isValid}
                type="password"
                name="password" 
                value={value}
                pattern="(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])[0-9a-zA-Z].{7,34}" 
                placeholder={label} 
                onChange={onChange}  
                required={required}>
            </Input>
            {isValid === false && <div>
                <UL>
                    <LI>Must have at least one upper case letter, one lower case letter and one number</LI>
                    <LI>Must be between 8 and 35 characters</LI>
                    <LI>First name is required</LI>
                </UL>                            
            </div>}
            {isValid === true && <UL valid={isValid}><LI>Looks good!</LI></UL>}
        </Form.Group>
    )
}

export default Password 