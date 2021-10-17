import axios from 'axios';
import React, { Component } from 'react'
import { Redirect } from 'react-router';
import { Grid, Form, Button } from 'semantic-ui-react'

export default class LoginPage extends Component<any,any> {
    constructor(props:any){
        super(props);
        this.state = {
            email:'',
            password:'',
            redirect:false,
            isLoading:false,
            data:''
        };
    }

    setResponse = (data:any)=>{
       localStorage.setItem('_token',data);
       this.setState({redirect:true});
    }

    handleChange = (e:any, data: any) => {
       this.setState({[data.name]:data.value})
    }

    sendDate = ()=>{
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        
        axios.post('http://localhost:8000/login',this.state).then(response => {
               this.setResponse(response.data);
        }).catch(error => {
             console.log(error);
        });
        
        this.setState({isLoading:false});
    }

    render() {
        const {email, password, redirect} = this.state;
        if (redirect) {
            return <Redirect to='/home'/>;
        }
        return (
            <Grid centered>
                <Grid.Column width={8}>
                    <Form onSubmit={this.sendDate}>
                        <h2>Se Connecter</h2>
                            <Form.Input
                                fluid
                                id='form-subcomponent-shorthand-input-prenom'
                                label='Email'
                                name="email"
                                type="email"
                                placeholder='Email'
                                value={email}
                                onChange={this.handleChange}
                                />
                            <Form.Input
                                fluid
                                id='form-subcomponent-shorthand-input-nom'
                                label='Mot de Passe'
                                name="password"
                                type="password"
                                placeholder='Mot de Passe'
                                value={password}
                                onChange={this.handleChange}
                                />
                        <Button type='submit' loading={this.state.isLoading} onClick={()=> this.setState({isLoading:!this.state.isLoading})} color="blue">Se Connecter</Button>
                        </Form>
                </Grid.Column>
            </Grid>
        )
    }
}
