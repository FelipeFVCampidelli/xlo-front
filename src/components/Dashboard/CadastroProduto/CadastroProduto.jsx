import axios from 'axios';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import './CadastroProduto.css'

export default function CadastroProduto() {
  const [formValues, setFormValues] = useState({
    name: '',
    description: '',
    image: '',
    price: '',
    condition: ''
  })
  const inputChange = (event) => {
    if(event.target.name === "name")
      setFormValues({...formValues, name: event.target.value})

    if(event.target.name === "description")
      setFormValues({...formValues, description: event.target.value})
    
    if(event.target.name === "image")
      setFormValues({...formValues, image: event.target.value})
    
    if(event.target.name === "price")
      setFormValues({...formValues, price: event.target.value})
    
    if(event.target.name === "condition")
      setFormValues({...formValues, condition: event.target.value})
    console.log(formValues)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/products', formValues)
      .then( (res) => console.log(res) )
      .catch( (err) => console.log(err.response) )
  }
  return (
    <div className="CadastroProduto">
      <Form onSubmit={handleSubmit} className="formProduto">
        <Form.Group controlId="formbasicName">
          <Form.Control name="name" onChange={inputChange} type="text" placeholder="Nome" />
        </Form.Group>
        <Form.Group controlId="formbasicDescription">
          <Form.Control name="description" onChange={inputChange} type="text" placeholder="Description" />
        </Form.Group>
        <Form.Group controlId="formbasicImage">
          <Form.Control name="image" onChange={inputChange} type="text" placeholder="Image" />
        </Form.Group>
        <Form.Group controlId="formbasicPrice">
          <Form.Control name="price" onChange={inputChange} type="text" placeholder="0.00" />
        </Form.Group>
        <Form.Group controlId="formbasicCondition">
          <Form.Control name="condition" onChange={inputChange} type="text" placeholder="new/used" />
        </Form.Group>
        <Button variant="success" type="submit">Concluir Cadastro</Button>
      </Form>
    </div>
  )
}
