import { useContext, useState } from "react";
import { MyApp } from "../App";
import styled from "styled-components";
import { Button, Modal, Form, Input } from "antd";

function ModalComponent() {
  const { dispatch, showModal, setShowModal, index } = useContext(MyApp);

  let [changeInputs, setChangeInputs] = useState({
    changeInputName:'',
    changeInputMail:''
  });

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch({
      type: "CHANGE",
      payload: { changeInputName:changeInputs.changeInputName, changeInputMail:changeInputs.changeInputMail, index },
    });
    setChangeInputs({
      changeInputName:'',
      changeInputMail:''
    })
    setShowModal(false);
  };
  return (
    <Modal footer={null} open={showModal} onCancel={() => {
      setChangeInputs({
        changeInputName:'',
        changeInputMail:''
      })
      setShowModal(false)
    }}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600, backgroundColor: "white", padding: "20px" }}
        onFinishFailed={onFinishFailed}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input value={changeInputs.changeInputName} onChange={(ev) => setChangeInputs({...changeInputs, changeInputName:ev.target.value})} />
        </Form.Item>
        <Form.Item
          label="Usermail"
          name="usermail"
          rules={[{ required: true, message: "Please input your mail!" }]}
        >
          <Input value={changeInputs.changeInputMail}  onChange={(ev) => setChangeInputs({...changeInputs, changeInputMail:ev.target.value})} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ModalComponent;

const ModalContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalWindow = styled.form((props) => ({
  padding: "20px",
  border: `2px solid ${props.color}`,
  backgroundColor: "white",
}));
