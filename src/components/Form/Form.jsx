import { Component } from 'react';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    }

    render() {
        const { name, number } = this.state;
      return (
        <div>
      <form>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
                  <label htmlFor="number">
                      Number
          <input
            type="tel"
                          name="number"
                          value={number}
                           onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
       <button type="submit"> Add contact</button>
              </form>
              </div>
    );
  }
}
