import React,{Component} from 'react';
import DynamicFormComponent from './dform'
import {formFieldData} from '../Data/Mock/formResponse'


class DynamicMain extends Component{
    
    constructor(props){
        
        super(props)
    }
render(){  
    console.log("New form model data : ",formFieldData)  
    
return (
        <DynamicFormComponent {...this.props}
        
        survey_data={formFieldData}

    //    {[
    //     //    {key:"0",label:"Name",props:{required:true}}  ,
    //        {key:"1",label:"Heighest Qualification",type:"radio",ans_opts:["Btech","Mtech"]},
    //        {key:"2",label:"Rating",type:"number",props:{min:0,max:5}},
    //     //    {key:"3",label:"Qualification"},
    //        {key:"4",label:"What is your age",type:"number",props:{min:0,max:100}}
    //        ]}
    //        onSubmit = {(model)=> { this.onSubmit(model) 
    //     }}

        ></DynamicFormComponent>
    )
      }
    }
export default DynamicMain