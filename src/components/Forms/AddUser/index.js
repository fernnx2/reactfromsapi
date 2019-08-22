import React, {Component} from 'react'
import {Form,Container,Dropdown,Button} from 'semantic-ui-react'
import {reduxForm,Field} from 'redux-form'

import {connect} from 'react-redux'
import {postUser,getUsers} from '../../../actions/Users'
class AddUser extends Component {
    
    options=[
        { key: 1, text: 'admin', value: 'admin' },
        { key: 2, text: 'user', value: 'user'},
        
    ]

    selected =[]

    onSubmit= (formValues) =>{
       
        const  user={
              firstName:formValues.firstName,
              lastName: formValues.lastName,
              rol:{
                  id:this.selected[0].key,
                  name:this.selected[0].value
                  
              }
          }

         this.props.postUser(user);
        
        this.handleUpdate();
          
    }

    handleUpdate=()=>{
        this.props.getUsers();
    }

    

    handleChange=(e,{value})=>{
        
        this.options.forEach(option=>{
            if(option.value===value){
                this.selected.push(option)
             
            }
        })
        
    }

    
    
    render() {
        const {value}= this.selected;
       
        return (
            
            <Container>
               
            <Form name="userForm" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="firstName"  placeholder="First Name" label="First Name" component={Form.Input}/>
                <Field name="lastName"  placeholder="Last Name" label="Last Name" component={Form.Input}/>
               
                <Dropdown
                name="rol2"
            onChange={this.handleChange}
            options={this.options}
            placeholder='Choose an option'
            selection
            value={value}
          />
                <Form.Button content='Submit' />
              
               
            </Form>
            <Button onClick={this.handleUpdate}>Actualizar </Button>
            </Container>
            
        )
    }

}


const GenericFromRedux = reduxForm({form:'userForm'})(AddUser)

const mapStateToProps = (state) => {
   
    return {
       post:state.users.post
    }
}

export default connect(mapStateToProps,{postUser,getUsers})(GenericFromRedux);
