import { Button, Input, Space } from 'antd'
import React, { useState } from 'react'

import AllListItem from './AllListItem';

const AllBlock = (props) => {
 const inputData=props.inputVar;
 const setInputData=props.inputMethod;
  const checkedList=props.checkVar;
  const setCheckedList=props.checkMethod;
  const [tempData,setTempData]=useState([])
  const active=props.isActive;
  const getInputData=(e)=>{
      console.log(e.target.value);
      setTempData(e.target.value);
  }
  const clickFunc=()=>{
    setInputData([...inputData,tempData])
    setCheckedList([...checkedList,{checked:null,name:tempData}]);
  }
  return (
    <>
    <div className='intro'>
       <Space.Compact
      style={{
        width: '100%',
        gap:"20px"
      }}
    >
      <Input defaultValue="" onChange={getInputData} />
      <Button type="primary" onClick={clickFunc}>Add</Button>
    </Space.Compact>
      
    </div>
    <AllListItem data={inputData} checkVar={checkedList} checkMethod={setCheckedList} isActive={active} />
    </>


  )
}

export default AllBlock