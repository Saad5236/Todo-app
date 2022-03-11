import React, { Component } from 'react';
import './task.css'

class Task extends Component {

    render() { 

        return (
                <div className='main my-2 p-2 d-flex justify-content-between border border-danger rounded-3'>
                    <div style={{width: '73%'}} className='bg-light text-dark p-2 border border-danger rounded-3 task'>
                        <div className='taskText'>{this.props.taskObj.value}</div>
                    </div>
                    <div className='d-flex flex-column align-items-center'>             
                    <div className='d-flex flex-row justify-content-between align-items-center'>
                        <a href="#" className='tickBtn m-1 p-2 border border-2 border-success rounded-circle' >
                            <img onClick={() => this.props.taskCompletionEvent(this.props.taskObj.id)} width={35} src='https://th.bing.com/th/id/R.d92a50bc6013cdb54303f8f071568eed?rik=%2b0Onw6jF56e5Rw&pid=ImgRaw&r=0' />
                        </a>
                        <a href="#" className='crossBtn m-1 p-2 border border-2 border-danger rounded-circle' >
                            <img onClick={() => this.props.removeNewTasksEvent(this.props.taskObj.id)} width={35} src='https://th.bing.com/th/id/R.9b3e92c27273cac5d2345f163fdfa9e3?rik=n%2bSADSuv%2foQi9g&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2fD%2f0%2fR%2fb%2fX%2fW%2fred-cross-hi.png&ehk=GevFcAPAePI1%2bGJEzzT8vjRGWciXgDABbqJh%2b4aSfvQ%3d&risl=&pid=ImgRaw&r=0' />
                        </a>
                    </div>
                    <button type="button" style={{width: '80%'}} className="btn btn-danger" onClick={() => this.props.updateTask(this.props.taskObj.id)} disabled={this.props.taskObj.editBtnFlag}>EDIT</button>
                    </div>
                </div>
        );
    }
}
 
export default Task;