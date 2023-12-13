import { Component } from "react";
import { Contacts } from "./Contacts/Contacts";
// import { Phonebook } from "./Phonebook/Phonebook";
import { Section } from "./Section/Section";
export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }
  onInputChange = e => {
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  onSubmit = e => {
    e.preventDefault()
    const newContact = this.state.name;
    console.log(newContact)
    this.setState((prevState) => ({ contacts: [...prevState.contacts, this.state.name] }))
  }

  render() {
    return (
      <div>
        <Section title="Phonebook">
          <form onSubmit={this.onSubmit}>
            <label htmlFor="nameInput">Name</label>
            <input type="text" id="nameInput" name="name" onChange={this.onInputChange} required />               
            <button type="submit">Add Contact</button>
          </form>
        </Section>
        
        <Section title="Contacts">
          <Contacts contactsList={this.state.contacts}></Contacts>
        </Section>

    </div>
      
    )
  }
};