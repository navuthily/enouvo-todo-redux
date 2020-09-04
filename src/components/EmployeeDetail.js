import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Modal, Form, Input } from 'antd';
import ModelEdit from './ModelEdit';
import notification from '../utils/notification';
import { connect } from "react-redux";
import './style.css'
import {
  deleteemploymentAction,
  getEmploymentAction
} from "../redux/actions";
import EditDetail from './EditDetail';
  const EmployeeDetail = ({
    employment,
    getemployment,
    addemployment,
    delemployment,
    editemployment,
  }) => {
  const [visible, setVisible] = useState(false);

  const onUpdate =(key)=>{
  return key;
  }
  const dele=(data,key)=>{
    delemployment(data,key);
    notification.success('Delete success!')
  }
  return (
    <div>
      <div className="column">
      {(employment.id)
        ? 
        (
          <div className="card" >
                    <img src={`${employment.avatar}`}/>
                     <div className="container">
                     <h2><a className="view_detal" href='/user'>{employment.first_name}-{employment.last_name}</a></h2>
                      <p className="title">Email: {employment.email}</p>
                     <span><Button className="btn_del" onClick={(data) => dele(employment, employment.id)}>  Delete  </Button>
                         <EditDetail onUpdate={(data) => onUpdate(employment.id)}/>
                     </span>
                    </div>      
                   </div>
        )
        : <h1>No employment</h1>
      }

      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  employment: state.employment
});

const mapDispatchToProps = (dispatch) => ({
  getemployment: () => dispatch(getEmploymentAction()),
  delemployment: (data, key) => dispatch(deleteemploymentAction(data,key)),

});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDetail);
