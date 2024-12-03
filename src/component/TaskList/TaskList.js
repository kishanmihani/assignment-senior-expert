import React, {  PureComponent } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaFilter } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
// import './TaskList.css'
import axios from "axios";
import { TbEdit } from "react-icons/tb";
import { AiFillYahoo } from 'react-icons/ai';

export default class TaskList extends PureComponent {
  constructor(){
    super();
    this.state={
      datalist:[],
      popup:false,
      editpopup:false,
      datepinaker:new Date(),
      statusfilter:'',
      Allcheck:false,
      selecttaskrecod:[],
      tdcheckbox:[]
    }
    this.tasklistdata=this.tasklistdata.bind(this)
    this.tasklistdata();
    this.deletetask = this.deletetask.bind(this)
    this.addTask=this.addTask.bind(this);
    this.dateevent=this.dateevent.bind(this);
    this.statusfilter=this.statusfilter.bind(this);
    this.tablestatusupdate = this.tablestatusupdate.bind(this);
    this.allcheck=this.allcheck.bind(this);
    this.tdcheck=this.tdcheck.bind(this);
    this.editTask=this.editTask.bind(this)
  }
  tasklistdata= async ()=>{
   const data =await axios.get('http://localhost:3000/employees/')
    .then(function (response) {
     return response.data;
      })
      .catch(function (error) {
        console.log('not working');
      })
     this.setState({
        datalist:data
          })
  }
  deletetask=async (event, id)=>{
    
    await axios.delete('http://localhost:3000/employees/'+id)
    .then(function (response) {
     return response;
      })
      .catch(function (error) {
        console.log('not working');
      })
      this.setState((prevState)=>({ datalist: prevState.datalist.filter((ii) =>ii.id != id)}))
  }
  allcheck(e){
  const  {checked}=e.target;
  const   {datalist}=this.state;
  const collections=[];
  if(checked){

    this.setState({
      tdcheckbox:[]
    },()=>{
      for(let check of datalist){
          collections.push(check.id)
      }
      this.setState({
        tdcheckbox:collections
      })
    })
  }
  else{
    this.setState({
      tdcheckbox:[]
    })
  }
  this.setState({
    Allcheck: !this.state.Allcheck
});

  }
  tdcheck(e) {

    const { value, checked } = e.target;
        let { tdcheckbox,datalist } = this.state;
       let numvalues=parseInt(value)
        if (checked) {
            tdcheckbox = [...tdcheckbox, numvalues];
        } else {
            tdcheckbox = tdcheckbox.filter(el => el !== numvalues);
            if (this.state.Allcheck) {
                this.setState({
                    Allcheck: false
                });
            }
        }
        this.setState({ tdcheckbox });
        if(tdcheckbox.length === datalist.length){
          this.setState({
                    Allcheck: true
                });
        }
}

  addTask(){
    this.setState((prevState) => ({popup:true}))
        this.setState((prevState) => ({Name:true}))

  }
  editTask = async (id) =>{
    const {selecttaskrecod} = this.state;
    
        
            const fetchonerec=await  axios.get('http://localhost:3000/employees/'+id)
            .then(function (response) {
             return response.data[0];
              })
              .catch(function (error) {
                console.log('not working');
              })
              this.setState((prevState) => ({selecttaskrecod:fetchonerec}))
              this.setState((prevState) => ({editpopup:true}))
  }
  dateevent(e){
  this.setState((prevSate) =>({
    datepinaker:e.target.value
  }))
  }
  statusfilter(e){
    this.setState((prevSate)=>({
      statusfilter:e.target.value
    }))
  }
tablestatusupdate(event, id) {
    const newStatus = event.target.value; // get selected value
    // Update the status of the task with the given ID
    this.setState((prevState) => ({
      datalist: prevState.datalist.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      ),
    }));
  }
  render() {
    const {selecttaskrecod} = this.state;
    return (
      <div className='card w-100 h-100 '>
          <div className='card-header '>
            <p className='text-danger fs-5 fw-bolder test-start bg-white'>Task List </p>
          </div>
          <div className='card-body overflow-auto'>
            <div className='row col-12'>
                <div className='w-auto'><button type='button' onClick={this.addTask} className=' btn btn-primary'>Add Task</button></div>
                <div className="input-group w-auto d-none">
                    <input placeholder='Id Filter' className="custom-select border border-primary rounded-start border-right-0 w-75" value={this.state.statusfilter} onChange={this.statusfilter}>
                       
                    </input>
                    <div className="input-group-append w-25">
                        <button  className="btn btn-primary rounded-0 rounded-end " type="button">
                        <FaFilter />
                        </button>
                    </div>
                    </div>
            </div>
            <div className='custom-scrollbar-css tasklisttable overflow-auto'>
           <table className='table text-start tasklist'>
            <thead>
             <tr className='sticky-top z-2'>
                <th><small>Id</small></th>
                <th><small>Name</small></th>
                <th><small>Email</small></th>
                <th><small>Salary</small></th>
                <th><small>Position</small></th>
                <th><small>HireDate</small></th>
                <th><small>Edit</small></th>
                <th><small>Delete</small></th>
             </tr>
            </thead>
            <tbody>
              {this.state.datalist.map((data)=>{
               
                return ( <tr key={data.id}  className={`${data.id === this.state.statusfilter  ? '':this.state.statusfilter ===''?'': 'collapse' }`}>
                {/* <td><input type='checkbox' value={data.id} onClick={this.tdcheck} checked={this.state.tdcheckbox.includes(data.id)} className='form-check-input' ></input></td> */}
                <td className='fw-bolder'>{ data.id}</td>
                  <td><small>{data.Name}</small></td>
                  <td><small>{data.Email}</small></td>
                    <td><small>{data.Salary === null?0: data.Salary}</small></td>
                    <td><small>{data.Position}</small></td>
                    <td><small>{new Date(data.HireDate).toLocaleDateString()}</small></td>
                    <td className='text-success cursor-pointer fs-5'  onClick={()=>this.editTask(data.id)}><TbEdit className='fs-5'/></td>
                  <td className='text-danger cursor-pointer fs-5'  onClick={(e)=>this.deletetask(e, data.id)}><MdDeleteForever className='fs-5' /></td>
                  </tr>
                  )
               })}
            </tbody>
           </table>
          </div>

          <div className={`${this.state.popup ?"card w-50 z-3  position-fixed top-50 start-50 translate-middle":"d-none"}`} >  
            <div className='card-header'>
              <p className='bg-white text-danger fs-6 fw-bolder'>Create Task Form</p>
            </div>
            <div className='card-body'>
            <Formik
      initialValues={{ Name: "",Email: "", Position:'',HireDate: "" ,Salary:0}} 
      validate={(values) => {
        const errors = {};
        if (!values.Name) {
          errors.fullname = "Enter your name";
        }
        else if(!values.HireDate){
          errors.HireDate = "Enter Due date";
        }
        else if(!values.Position){
          errors.Position = "Enter Position";
        }
        return errors;
      }}
      onSubmit={(values,{resetForm}) => {
        // const datalist=this.state.datalist;
        
        axios.post('http://localhost:3000/employees/',values)
        .then(function (response) {
         return response;
          })
          .catch(function (error) {
            console.log('not working');
          })
          try{
        
            values.id=this.state.datalist[this.state.datalist.length - 1].id + 1;
            }
            catch(e){
                values.id = 1;
            }
          this.setState((prevState) => ({
            datalist: prevState.datalist.concat(values),
            popup: false
           }),()=>{
              values={Name: "",Email: "", Position:'',HireDate: "" ,Salary:0,id:''}
           })
           
        // setSubmitting(false);
        resetForm();
    }}
  resetForm>
    {() => (
      <Form className='text-start justify-content-center col-sm-12 col-md-12 col-xl-12 col-xxl-12  text-left d-flex flex-column'>
        <div className='form-group text-left w-100'>
              <label className='form-label label-left w-100'>employees Name</label>
              <Field className="form-control" autoFocus={true} type="text"  name="Name" placeholder="Enter your username" />
              <ErrorMessage name="Name"  className="text-danger text-start" component="div" />
            </div>

            <div className='form-group '>
              <label className='form-label label-left w-100'>Emails</label>
              <Field  className="form-control" type="text" name="Email" placeholder="Enter user name" />
              <ErrorMessage name="Email"  className="text-danger text-start" component="div" />
            </div>
            <div className='form-group '>
              <label className='form-label label-left w-100'>Position</label>
              <Field  className="form-control" type="text" name="Position" placeholder="Enter user Position" >
              </Field>
              <ErrorMessage name="Position"  className="text-danger text-start" component="div" />
            </div>
            <div className='form-group '>
              <label className='form-label label-left w-100'>Salary</label>
              <Field  className="form-control"  type="number" name="Salary"  placeholder="Enter user name">
              </Field>
              <ErrorMessage name="Salary"  className="text-danger text-start" component="div" />
              
            </div>
            <div className='form-group '>
              <label className='form-label label-left w-100'>Hire Date</label>
              <Field  className="form-control" type="date"  name="HireDate"  placeholder="Enter user name" />
              <ErrorMessage name="HireDate"  className="text-danger text-start" component="div" />
              
            </div>
            
            <div className='mt-3 text-end'>
                  <button className='btn btn-success me-2' type="submit"  >Save</button>
                  <button className='btn  btn-danger' onClick={()=>this.setState((prevState) => ({popup: false}))}>Cancel</button>
                </div>
      </Form>
    )}</Formik>
      
            </div>
          </div>

          <div className={`${this.state.editpopup ?"card w-50 z-3  position-fixed top-50 start-50 translate-middle":"d-none"}`} >  
            <div className='card-header'>
              <p className='bg-white text-success fs-6 fw-bolder'>Update Task Form</p>
            </div>
            <div className='card-body'>
            <Formik
       initialValues={{Name:selecttaskrecod.Name,Email:selecttaskrecod.Email,Salary:selecttaskrecod.Salary,Position:selecttaskrecod.Position,
        HireDate: selecttaskrecod.HireDate 
          ? new Date(selecttaskrecod.HireDate).toISOString().split('T')[0]
          : ''}}
      enableReinitialize      
      validate={(values) => {
        const errors = {};
        if (!values.Name) {
          errors.fullname = "Enter your name";
        }
        else if(!values.HireDate){
          errors.HireDate = "Enter Hire date";
        }
        else if(!values.Position){
          errors.Position = "Enter Position";
        }
        return errors;
      }}
      onSubmit={(values,{resetForm}) => {
        // const datalist=this.state.datalist;
        const {updatetaskid}=this.state;
        axios.put('http://localhost:3000/employees/'+selecttaskrecod.id,values)
        .then(function (response) {
         return response;
          })
          .catch(function (error) {
            console.log('not working');
          })
          
          this.setState((prevState) => ({
            datalist: prevState.datalist.map(data => 
                data.id === selecttaskrecod.id ? { ...data, ...values } : data
            ),
            editpopup: false
        }), () => {
            this.values = { Name: "", Email: "", Position: "", HireDate: "", Salary: 0 };
        });
           
        // setSubmitting(false);
        resetForm();
    }}
  resetForm>
    {() => (
      <Form className='text-start justify-content-center col-sm-12 col-md-12 col-xl-12 col-xxl-12  text-left d-flex flex-column'>
        <div className='form-group text-left w-100'>
              <label className='form-label label-left w-100'>employees Name</label>
              <Field className="form-control" autoFocus={true} type="text"  name="Name" placeholder="Enter your username" />
              <ErrorMessage name="Name"  className="text-danger text-start" component="div" />
            </div>

            <div className='form-group '>
              <label className='form-label label-left w-100'>Emails</label>
              <Field  className="form-control" type="text" name="Email" placeholder="Enter user name" />
              <ErrorMessage name="Email"  className="text-danger text-start" component="div" />
            </div>
            <div className='form-group '>
              <label className='form-label label-left w-100'>Position</label>
              <Field  className="form-control" type="text" name="Position" placeholder="Enter user Position" >
              </Field>
              <ErrorMessage name="Position"  className="text-danger text-start" component="div" />
            </div>
            <div className='form-group '>
              <label className='form-label label-left w-100'>Salary</label>
              <Field  className="form-control" type="number"  name="Salary"  placeholder="Enter user name">
              </Field>
              <ErrorMessage name="Salary"  className="text-danger text-start" component="div" />
              
            </div>
            <div className='form-group '>
              <label className='form-label label-left w-100'>Hire Date</label>
              <Field  className="form-control" type="date"  name="HireDate"  placeholder="Enter user name" />
              <ErrorMessage name="HireDate"  className="text-danger text-start" component="div" />
              
            </div>
            
            <div className='mt-3 text-end'>
                  <button className='btn btn-success me-2' type="submit"  >Save</button>
                  {/* <button className='btn  btn-danger' onClick={()=>this.setState((prevState) => ({editpopup: false}))}>Cancel</button> */}
                </div>
      </Form>
    )}</Formik>
      
            </div>
          </div>
          </div>
      </div>
    )
  }
}
