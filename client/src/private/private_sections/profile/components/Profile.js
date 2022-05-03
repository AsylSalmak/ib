import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Input, Button } from "semantic-ui-react";
import "./Profile.css";
import axios from "axios";
import NumberFormat from "react-number-format";
import { Message } from "semantic-ui-react";
import { SET_USER } from "../../../../user/reducers/userReducer";

const fields = [
  { field: "name", label: "Имя" },
  { field: "lastName", label: "Фамилия" },
  { field: "phone", label: "Телефон" },
  { field: "email", label: "Email" },
];

const userData = {
  name: "",
  lastName: "",
  phone: "",
  email: "",
};

const checkData = (data) => {
  const dataValues = Object.values(data);

  return dataValues.every((value) => value);
};

const Profile = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(userData);

  const [editableData, setEditableData] = useState(userData);

  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const renderInputField = (field, value) =>
    field === "phone" ? (
      <NumberFormat
        onValueChange={(val) => {
          setEditableData({ ...editableData, [field]: val.formattedValue });
        }}
        value={value}
        customInput={Input}
        format=" +7(###) ### ## ##"
      />
    ) : (
      <Input
        value={value}
        onChange={(e) => {
          setEditableData({ ...editableData, [field]: e.target.value });
        }}
      />
    );

  const renderFields = (isEditing) => {
    return fields.map((fieldItem) => {
      const { field, label } = fieldItem;
      return (
        <div key={field} className="ProfileBox">
          <label>{label}</label>
          {isEditing ? (
            renderInputField(field, editableData[field])
          ) : (
            <span>{data[field]}</span>
          )}
        </div>
      );
    });
  };

  useEffect(() => {
    axios({
      method: "get",
      url: "profile",
      baseURL: "http://127.0.0.1:3000",
    }).then(({ data }) => {
      setData(data);
      setEditableData(data);
    });
  }, []);

  return (
    <div className="Profile">
      <div className="ProfileTitle">
        {checkData(editableData) ? (
          <h4>Ваш профиль</h4>
        ) : (
          <Message size="mini" style={{ width: "40%" }} warning>
            <Message.Header>Пожалуйста заполните все поля!</Message.Header>
          </Message>
        )}
      </div>
      {renderFields(isEditing)}
      {isEditing ? (
        <div className="ProfileButton">
          <Button
            onClick={() => {
              setEditableData(data);
              setIsEditing(false);
            }}
            color="red"
            content="Отмена"
            style={{ width: "180px", height: "50px", marginTop: "20px" }}
          />
          <Button
            disabled={!checkData(editableData)}
            loading={loading}
            onClick={() => {
              setLoading(true);
              axios({
                method: "post",
                url: "profile",
                baseURL: "http://127.0.0.1:3000",
                data: editableData,
              }).then(({ data }) => {
                setData(data);
                setEditableData(data);
                setLoading(false);
                setIsEditing(false);

                dispatch({
                  type: SET_USER,
                  payload: data,
                });

                localStorage.setItem(
                  "user",
                  JSON.stringify({ ...data, logedIn: true })
                );
              });
            }}
            color="blue"
            content="Сохранить"
            style={{ width: "180px", height: "50px", marginTop: "20px" }}
          />
        </div>
      ) : (
        <Button
          onClick={() => {
            setIsEditing(true);
          }}
          color="blue"
          content="Редактировать"
          style={{ width: "180px", height: "50px", marginTop: "20px" }}
        />
      )}
    </div>
  );
};
export default Profile;
