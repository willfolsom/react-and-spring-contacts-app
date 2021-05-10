import React, { Component } from 'react';
import SingleContact from './SingleContact';
import AddContacts from './AddContacts';
import { Contact } from './types/contact';

interface State {
    contacts: Contact[]
}

export default class Contacts extends Component {
    state: State;

    constructor(props: any) {
        super(props);
        this.state = {
            contacts: [],
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/contacts")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({contacts: data})
        })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <AddContacts/>
                </div>
                <div className="row">
                    { this.state.contacts.map((item: Contact) => (
                        <SingleContact key={item.id} {...item} />
                    ))}
                </div>
            </div>
        )
    }
}
