import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Modal, Form, Input, Card, Avatar } from 'antd';
import { DeleteOutlined,SettingOutlined ,EllipsisOutlined,EditOutlined} from '@ant-design/icons';
import notification from '../utils/notification';
import { connect } from "react-redux";
import './style.css'
import {
  deleteemploymentAction,
  getEmploymentAction
} from "../redux/actions";
import EditDetail from './EditDetail';
import ModelEdit from './ModelEdit';
const { Meta } = Card;
const EmployeeDetail = ({
    employment,
    delemployment
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
        
      {(employment.email)
        ? 
        (
          <div>
            <h1>Employee detail</h1>
          <Card
          className="card-1"
            style={{ width: "300px",margin:"10px" }}
          cover={
            <img
            style={{ width: "140px" ,height:"140px",borderRadius :"50%", border:"solid 2px #637ddb",margin:"auto",marginTop:"20px"} }
              className="image-detail"
              alt="example"
              src={`${employment.avatar}`}
              hoverable
           /> 
          }
          actions={[
            <SettingOutlined key="setting" />,
            <ModelEdit/>,
            <DeleteOutlined  onClick={(data) => dele(employment, employment.id)}/>,
            <EllipsisOutlined key="ellipsis"  />,
          ]}
        >
          <Meta
           title={` ${employment.first_name} ${employment.last_name}`}
           description={`${employment.email}`}
          />
        </Card>
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
