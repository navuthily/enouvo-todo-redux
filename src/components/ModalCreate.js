import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import notification from '../utils/notification';
import { Button, Modal, Form, Input, Card, Avatar } from 'antd';
import { DeleteOutlined,SettingOutlined ,EllipsisOutlined} from '@ant-design/icons';
import ModelEdit from './ModelEdit';
import { connect } from "react-redux";
import './style.css'
import {
  Redirect
} from "react-router-dom";
import {
  getEmploymentsAction,
  getEmploymentAction,
  addemploymentAction,
  deleteemploymentAction,
} from "../redux/actions";

const { Meta } = Card;
const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Create a new collection"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            onCreate(values);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: 'Please input the email of collection!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="last_name"
          label="Lastname"
          rules={[
            {
              required: true,
              message: 'Please input the lastname of collection!',
            },
          ]}
        >
        <Input />
       </Form.Item>
       <Form.Item
          name="first_name"
          label="Fistname"
          rules={[
            {
              required: true,
              message: 'Please input the firstname of collection!',
            },
          ]}
        >
        <Input />
       </Form.Item>
       <Form.Item
          name="avatar"
          label="Avatar"
          rules={[
            {
              required: true,
              message: 'Please input the avatar of collection!',
            },
          ]}
        >
        <Input    type ='file'/>
       </Form.Item>
      </Form>
    </Modal>
  );
};
  const ModalCreate = ({
    getemployments,
    getemployment,
    employments,
    addemployment,
    delemployment,
  }) => {
    useEffect(() => {
      getemployments();
      // eslint-disable-next-line
    }, []);
  const [visible, setVisible] = useState(false);
  const [redirec, setRedirec]=useState(false);
  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    addemployment(values);
    setVisible(false);
    //ở đây có thể gọi 1 hàm khác nữa
  };
  const onUpdate =(key)=>{
  return key;
  }
  const dele=(data,key)=>{
    delemployment(data,key);
    notification.success('Delete success!')
  }
  const onViewDetail=(id)=>{
    getemployment(id);
    setRedirec(true);
  }
  return (

<div>
{(redirec)
  ? <Redirect to="employ"/>
  : 
  (
    <div>
    <Button
    className='btn_create'
      type="primary"
      onClick={() => {
        setVisible(true);
      }}
    >
      Create new
    </Button>
    <CollectionCreateForm
      visible={visible}
      onCreate={onCreate}
      onCancel={() => {
        setVisible(false);
      }}
    />
    <div className="column"  style={{ position:"absolute" }}>
        {employments.map((employment, key) => (
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
             <EllipsisOutlined key="ellipsis"  onClick={(data) => onViewDetail(employment.id)}/>,
           ]}
         >
           <Meta
            title={` ${employment.first_name} ${employment.last_name}`}
            description={`${employment.email}`}
           />
         </Card>
       ))}
    </div>
  </div>
  )
}
</div>
  );
};
const mapStateToProps = (state) => ({
  employments: state.employments
});
const mapDispatchToProps = (dispatch) => ({
  getemployments: () => dispatch(getEmploymentsAction()),
  addemployment: (data) => dispatch(addemploymentAction(data)),
  delemployment: (data, key) => dispatch(deleteemploymentAction(data, key)),
  getemployment: (id) => dispatch(getEmploymentAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalCreate);
