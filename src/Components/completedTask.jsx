import React, { Component } from 'react';
import './completedTask.css'

class CompletedTask extends Component {
    state = {  } 
    render() { 
        return (
            <div className='mainC my-2 p-2 d-flex justify-content-between border border-success rounded-3'>
                    <div style={{width: '73%'}} className='bg-light text-dark p-2 border border-success rounded-3 taskC'>
                        <div className='taskTextC'>{this.props.taskObj.value}</div>
                    </div>             
                    <div className='d-flex justify-content-between align-items-center'>
                        <a href="#" className='m-1 p-2 border border-2 border-danger rounded-circle' >
                            <img onClick={() => this.props.removeCompletedTasksEvent(this.props.taskObj.id)} width={35} src='https://th.bing.com/th/id/R.9b3e92c27273cac5d2345f163fdfa9e3?rik=n%2bSADSuv%2foQi9g&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2fD%2f0%2fR%2fb%2fX%2fW%2fred-cross-hi.png&ehk=GevFcAPAePI1%2bGJEzzT8vjRGWciXgDABbqJh%2b4aSfvQ%3d&risl=&pid=ImgRaw&r=0' />
                        </a>
                    </div>
                </div>
        );
    }
}
 
export default CompletedTask;