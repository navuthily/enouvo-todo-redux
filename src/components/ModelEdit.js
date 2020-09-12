import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Modal, Form, Input, Radio } from 'antd';
import { EditOutlined} from '@ant-design/icons';

import { connect } from "react-redux";
import './style.css';
import {
  updateemploymentAction,
} from "../redux/actions";
const CollectionEditForm = ({ visible, onEdit, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Create a new collection"
      okText="Edit"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            onEdit(values);
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
  const ModalEdit = ({
    editemployment,
    onUpdate
  }) => {
 
  const [visible, setVisible] = useState(false);

  const onEdit = (values,) => {
    setVisible(false);
    //ở đây có thể gọi 1 hàm khác nữa
    console.log(onUpdate(),'onupdate nè');
    editemployment(values,onUpdate());
  };
  return (
    <div>
      <EditOutlined key="edit"  onClick={() => {
        setVisible(true);
        }} />
     
      <CollectionEditForm
        visible={visible}
        onEdit={onEdit}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};
const mapStateToProps = (state) => ({
  employments: state.employments
});

const 
  mapDispatchToProps = (dispatch) => ({
  editemployment: (data, key) => dispatch(updateemploymentAction(data, key)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ModalEdit);
