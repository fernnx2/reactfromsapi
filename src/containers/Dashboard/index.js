import React, {Component} from 'react'
import TableWC from '../../components/TableWC'
import AddUser from '../../components/Forms/AddUser'
export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <TableWC></TableWC>
                <AddUser></AddUser>
            </div>

        )
    }
}