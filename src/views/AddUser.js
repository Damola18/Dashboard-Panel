import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, FormGroup } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {ButtonGroup} from 'react-bootstrap';
import { addUser } from "../redux/actions";


const styles = {
    
};

const AddUser = () => {
    const [state, setState] = useState({
        name: "",
        email: "",
    });
    const {name, email} = state;

    const [error, setError] = useState("");

    let navigate = useNavigate();

    let dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !email) {
            setError("Please input empty fields")
        }
        else {
            dispatch(addUser(state));
            navigate("/");
            setError("");
        }
    }

    const handleInputChange = (e) => {
        let {name , value} = e.target;
        setState({...state, [name]: value});
    }

    return (
        <div className="add-user-container">
            {error && <p style={{color: "red", alighText: "center", marginTop: "0px"}}>{error}</p> }
            <h1 className="text-center" style={{margin:"70px"}}>Add A New User</h1>

            <div className="user-form"
                onSubmit={handleSubmit}
                style={{
                    borderRadius: "10px",
                    padding: "0px 50px"
                }}
            > 
                <Form.Label>Name</Form.Label>
                <Form.Control

                    value={name} 
                    type="text"
                    name="name"
                    onChange={handleInputChange}
                    placeholder="Enter name"

                    style={{
                        borderRadius: "10px",
                        padding: "30px",
                        boxShadow: "0px 2px 1px 2px #c4c4c4c4",
                    }}
                />
            
                <br/>

                <Form.Label>Email</Form.Label>
                <Form.Control
                    value={email} 
                    type="email"
                    name="email"
                    onChange={handleInputChange}
                    placeholder="email@gmail.com"

                    style={{
                        borderRadius: "10px",
                        padding: "30px",
                        boxShadow: "3px 2px 1px 2px #c4c4c4c4",
                    }}
                />

                <div style={{paddingTop:"30px", marginTop:"20px"}} className="text-right">
                <ButtonGroup>
                    <Button style={{marginTop:"15px", marginRight:"20px"}}
                    class="btn btn-outline-secondary"
                    variant="outline-danger"
                    onClick={() => navigate("/")}
                    >
                        Cancel
                    </Button>
                </ButtonGroup>

                <ButtonGroup>
                    <Button style={{marginTop:"15px", fontWeight:"Bold", }}
                    variant="success"
                    type="submit"
                    >
                        Submit
                    </Button>
                </ButtonGroup>

                </div>
                
            </div>
        </div>
    )
}
export default AddUser;