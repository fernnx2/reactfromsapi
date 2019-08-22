import React, {Component} from 'react'
import {Table,Button,Icon} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {getUsers} from '../../actions/Users/'
class TableWC extends Component {

    componentDidMount(){
        this.props.getUsers();
       
    }

    listUsers(){
       
        return this.props.users.map((user)=>{
            return(
                <Table.Row key={user.id}>
                    <Table.Cell>{user.firstName}</Table.Cell>
                    <Table.Cell>{user.lastName}</Table.Cell>
                    <Table.Cell>{user.rol.name}</Table.Cell>
                </Table.Row>
            )
        })
    }


    render() {
        return (
            <Table >
                <Table.Header>
                    <Table.Row>
                       
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Rol</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.listUsers()}
                </Table.Body>
                <Table.Footer fullWidth>
                    <Table.Row>
                        <Table.HeaderCell/>
                        <Table.HeaderCell colSpan='4'>
                            <Button floated='right' icon labelPosition='left' primary size='small'>
                                <Icon name='user'/>
                                Add User
                            </Button>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        )
    }

}

function mapStateToProps(state){
    return {
        users:state.users.list
    }
}

export default  connect(mapStateToProps,{getUsers})(TableWC);