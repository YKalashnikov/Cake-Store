import React from 'react';
import { Table } from 'antd';


const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Phone Number',
      dataIndex: 'number',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];


const data = [
    {
      key: '1',
      name: 'John Brown',
      number: '(617)-774-8786',
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      number: '(317)-474-8227',
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      number: '(417)-254-1777',
      address: 'Sidney No. 1 Lake Park',
    },
  ];
  

const Contact = () => {
    return (
        <div style={{ width: '75%', margin: '3rem auto' }}>
    <h2>Contact Information</h2>
    <Table columns={columns} dataSource={data} size="middle" />
  </div>
    );
};

export default Contact;


