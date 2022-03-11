import './App.css';
import Navbar from './Components/navbar';
import Task from './Components/task';
import CompletedTask from './Components/completedTask';
import React, { Component } from 'react';

class App extends Component {
  state = {
    updateTextArea: "col input-group rounded-3 my-5 d-none",
    updatedTextValue: "",
    textValue: "", 
    newTasks: [{id: 1, value: "HEY THERE", editBtnFlag: false}],
    completedTasks: [{id: 1, value: "HEY THERE2"}]
  } 

  // ADDING NEW TASK

  addTask = () => {
    let i = this.state.newTasks[this.state.newTasks.length-1].id;

    // if(this.state.newTasks[0].editBtnFlag===true)
    //   flag = true;
    // else
    //   flag = false;  
    let flag = this.state.newTasks[0].editBtnFlag === true ? true : false;

    let newT = this.state.newTasks.concat({id:i+1, value:this.state.textValue, editBtnFlag:flag});
    this.setState({newTasks: newT});
  }

  setTextValue = (event) => {
    this.setState({textValue: event.target.value})
  }

  // FINISHED TASKS SECTION

  taskCompletion = (id) => {

    console.log(this.state.newTasks);


    let newTs = this.state.newTasks.filter((i)=>{
      if(i.id !== id)
        return true;
      else{
        i.id = this.state.completedTasks[this.state.completedTasks.length-1].id+1; 
        let completedTs = this.state.completedTasks.concat(i);
        this.setState({completedTasks: completedTs});
      }
    });

    this.setState({newTasks: newTs});
  }

  // REMOVE (NEW AND FINISHED/COMPLETED) TASKS 

  removeNewTasks = (id)=>{
    let newTs = this.state.newTasks.filter((i)=>{
      if(i.id !== id)
        return true;
    });

    this.setState({newTasks: newTs});
  }

  removeCompletedTasks = (id)=>{
    let completedTs = this.state.completedTasks.filter((i)=>{
      if(i.id !== id)
        return true;
    });

    this.setState({completedTasks: completedTs});
  }

  // UPDATE EXISTING TASK VALUE  

  setUpdatedValue = (event) => {
    this.setState({updatedTextValue: event.target.value});
  }

  updateTask = (id) => {

    let currClass ="col input-group rounded-3 my-5";
    this.setState({updateTextArea: currClass+" d-flex"});

    let currTaskVal;
    let newTs = this.state.newTasks;
    for(let i=0; i<this.state.newTasks.length; i++){
      newTs[i].editBtnFlag = true;
      if(newTs[i].id === id)
        currTaskVal = newTs[i];
    }
    this.setState({newTasks: newTs});

    this.setState({updatedTextValue: currTaskVal.value});
    

    /* ------CHECKING------- */
    newTs = this.state.newTasks.filter((i)=>{
      if(i.id !== currTaskVal.id)
        return true;
    });

    for(let i=0; i<newTs.length; i++){
      newTs[i].id = i+1;
    }

    this.setState({newTasks: newTs});
  }

  updateEditedTask = () => {

    let i = this.state.newTasks[this.state.newTasks.length-1].id;
    let newTs = this.state.newTasks.concat({id:i+1, value:this.state.updatedTextValue, editBtnFlag:false});
    for(let i=0; i<newTs.length; i++){
      newTs[i].editBtnFlag= false;
    }
    this.setState({newTasks: newTs});

    this.setState({updateTextArea: "col input-group rounded-3 my-5 d-none"});

    // for(let i=0; i<this.state.length; i++){

    // }
  }

  // RENDER FUNCTION

  render() { 

    
    let src="https://www.pinclipart.com/picdir/big/8-84831_add-clipart.png";

    return (
      <div>
        
        <Navbar />
      
        <main className='container my-3 p-4 border border-success border-2 rounded-3 bg-success bg-gradient bg-opacity-25'>
          <h1 className='text-center'>TO-DO APP</h1>
          <div className='row'>
            <div className='col-md-2'></div>
            <div className="col input-group rounded-3 my-5">
  
              <textarea onChange={this.setTextValue} className="form-control border border-2 border-success" aria-label="With textarea" cols={20} rows={4}></textarea>
            
                <button onClick={this.addTask} className="btn btn-outline-success border border-2 border-success" type="button" id="button-addon1">
                  <img src={src} width={40} />
                </button>         
            </div>
            <div className='col-md-2'></div>


          </div>

  
          <div className='row'>
            
            <div className='col border border-danger border-2 rounded-3 mx-1 my-1'>
              <h2 className='text-center my-3'>YOUR TASKS</h2>
              <div>
                {this.state.newTasks.map((i) => {
                  return <Task key={i.id} updateTask={this.updateTask} taskObj={i} taskCompletionEvent={this.taskCompletion} removeNewTasksEvent={this.removeNewTasks} />;
                })}
              </div>
            </div>

            <div className='col border border-success border-2 rounded-3 mx-1 my-1'>
              <h2 className='text-center my-3'>COMPLETED TASKS</h2>
              <div>
                {this.state.completedTasks.map((i) => {
                  return <CompletedTask key={i.id} taskObj={i} removeCompletedTasksEvent={this.removeCompletedTasks} />;
                })}
              </div>
            </div>

          </div>

          <div>
            
            <div className='col-md-3'></div>
            <div className={this.state.updateTextArea}>
                <textarea onChange={this.setUpdatedValue} className="form-control border border-2 border-success" aria-label="With textarea" rows={2} value={this.state.updatedTextValue}></textarea>
                <button onClick={this.updateEditedTask} className="btn btn-outline-success border border-2 border-success" type="button" id="button-addon1">UPDATE</button>
            </div>
            <div className='col-md-3'></div>
          </div>
  
        </main>
  
      </div>
    );
  }
}
 
export default App;