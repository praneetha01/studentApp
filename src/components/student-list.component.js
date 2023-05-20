import React from 'react'
import axios from 'axios'
export default class StudentList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            students:[]
        }
    }
        componentDidMount()
        {
            axios.get("https://localhost:3001/students")
            .then(res=>
             {
               this.setState({students:res.data})
             }   
                )
        
    }
    render()
    {
        return (
            
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>EMAIL</th>
                            </tr>
                    </thead>
                    <tbody>
                        {this.state.students.map((student)=>
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                        </tr>
                        )
                       } 
                    </tbody>

                </table>
            )
        
    }
}
