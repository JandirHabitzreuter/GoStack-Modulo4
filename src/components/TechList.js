import React, { Component } from 'react';
import TechItem from './TechItem';

class TechList extends Component{
    state = {
        newTech:'',
        techs : []
    }

    componentDidMount(){
        const techs = localStorage.getItem('techs');
        if(techs){
            this.setState({techs: JSON.parse(techs)});
        }
        
    }

    componentDidUpdate(_, prevState){
        if(prevState.techs != this.state.techs){
            localStorage.setItem('techs', JSON.stringify(this.state.techs));
        }
    }

    componentWillUnmount(){

    }

    handleImputChange = e =>{
        this.setState({newTech: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        
        if (this.state.newTech != ''){
            this.setState({
                techs: [...this.state.techs, this.state.newTech],
                newTech:''
            });
        }
        
    }

    handleDelete = (tech) =>{
        this.setState({techs: this.state.techs.filter(t => t != tech)});
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
            <ul>
                {this.state.techs.map(tech => 
                    <TechItem 
                      key={tech}
                      tech={tech}
                      onDelete={() => this.handleDelete(tech)}
                      />
                )}
            </ul>

            <input type="text"
                   onChange={this.handleImputChange}
                   value={this.state.newTech}
            />
            
            <button type="submit"> Enviar</button>
            </form>
            
        );        
    }
}

export default TechList;