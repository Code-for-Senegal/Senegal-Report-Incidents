import axios from 'axios';
import React, { Component } from 'react'
import { Redirect } from 'react-router';
import { Button, Form, Grid} from 'semantic-ui-react'


export default class RegisterPage extends Component<any, any> {
    constructor(props:any){
        super(props);
        this.state = {
            prenom:'',
            nom:'',
            email:'',
            password:'',
            telephone:'',
            redirect:false,
            isLoading:false,
        };
    }

   handleChange = (e:any, data: any) => {
       this.setState({[data.name]:data.value})
   }

    saveData = ()=>{
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.post('http://localhost:8000/users',this.state).then(response => {
             if(response.status=== 200){
                 this.setState({redirect:true});
            }
        }).catch(error => {
             console.log(error);
        });
         
        this.setState({isLoading:false});
    }

    render() {
        const {email,password,prenom,nom,telephone,redirect} = this.state

         if (redirect) {
            return <Redirect to='/login'/>;
        }

        return (
            <Grid centered>
                <Grid.Column width={8}>
                    <Form onSubmit={this.saveData}>
                        <h2>Creation Compte Utilisateur</h2>
                        <Form.Group widths='equal'>
                            <Form.Input
                                fluid
                                id='form-subcomponent-shorthand-input-prenom'
                                label='Prénom'
                                name="prenom"
                                placeholder='Prenom'
                                value={prenom}
                                onChange={this.handleChange}
                                />
                            <Form.Input
                                fluid
                                id='form-subcomponent-shorthand-input-nom'
                                label='Nom'
                                name="nom"
                                placeholder='Nom'
                                value={nom}
                                onChange={this.handleChange}
                                />
                            </Form.Group>
                              <Form.Group widths='equal'>
                                  <Form.Input
                                      fluid
                                      id='form-subcomponent-shorthand-input-email'
                                      label='Email'
                                      name="email"
                                      placeholder='Email'
                                      type="email"
                                      value={email}
                                      onChange={this.handleChange}
                                    />
                            <Form.Input
                                fluid
                                id='form-subcomponent-shorthand-input-password'
                                label='Mot de Passe'
                                name="password"
                                placeholder='Mot de Passe'
                                type="password"
                                value={password}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Input
                                fluid
                                id='form-subcomponent-shorthand-input-phone'
                                label='Téléphone'
                                name="telephone"
                                placeholder='Numéro Téléphone'
                                type="phone"
                                value={telephone}
                                onChange={this.handleChange}
                            />
                        <Button type='submit' loading={this.state.isLoading} onClick={()=> this.setState({isLoading:!this.state.isLoading})} color="blue">Créer</Button>
                    </Form>
                </Grid.Column>
            </Grid>
        )
    }
}
