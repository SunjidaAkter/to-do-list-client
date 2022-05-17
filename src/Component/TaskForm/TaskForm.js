import React from 'react';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import './TaskForm.css'

const TaskForm = () => {
    const submitHandler = (event) => { }
    return (
        <div className='container my-5 w-50'>
            <h1 className='font my-3'>ADD NEW TASK</h1>
            <Form onSubmit={submitHandler} >
                <div className='my-4'>
                    {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <p className='text'>Email address</p>
            <Form.Control type="text" placeholder="Enter email" value={user.email} readOnly name="email" />
          </Form.Group> */}
                </div>
                <div className='two-container'>
                    <div className=''>
                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <p className='text'>Task Name</p>
                            <Form.Control type="text" placeholder="Enter Task Name" name="name" required />
                        </Form.Group>
                    </div>
                    <div className=''>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <p className='text'>Task Description</p>
                            <Form.Control type="text" placeholder="Enter Task Description" name="img" required />
                        </Form.Group>
                    </div>
                </div>


                <Button className='d-block w-100' variant="dark" type="submit">
                    Add New Task
                </Button>
            </Form>
        </div>
    );
};

export default TaskForm;