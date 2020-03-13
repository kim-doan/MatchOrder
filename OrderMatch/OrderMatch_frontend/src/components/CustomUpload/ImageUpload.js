import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// core components
import Button from "components/CustomButtons/Button.js";

import defaultImage from "assets/img/image_placeholder.jpg";
import defaultAvatar from "assets/img/placeholder.jpg";
import axios from 'axios';

export default function ImageUpload(props) {
  const [file, setFile] = React.useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = React.useState(
    props.avatar ? defaultAvatar : defaultImage
  );
  const [nowImageYN, setNowImageYN] = React.useState(
    false
  )
  let fileInput = React.createRef();
  const handleImageChange = e => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setFile(file);
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };
  // eslint-disable-next-line
  const handleSubmit = e => {
    var formData = new FormData();
    formData.append('file', file);
    formData.append('username', localStorage.username)
    axios.post("http://localhost:8080/api/photo/logo/add", formData)
    .then(response =>{
      var result = response && response.data;

      if(result.success == true) {
        alert("업로드에 " + result.msg);
      } else {
        alert("업로드에 " + result.msg);
      }
    })
  };
  const handleClick = () => {
    fileInput.current.click();
    setNowImageYN(true)
  };
  const handleRemove = () => {
    setFile(null);
    setImagePreviewUrl(props.avatar ? defaultAvatar : defaultImage);
    setNowImageYN(false)
    fileInput.current.value = null;
  };
  let { avatar, addButtonProps, changeButtonProps, removeButtonProps, nowImage } = props;
  return (
    <div className="fileinput text-center">
      <input type="file" onChange={handleImageChange} ref={fileInput} />
      <div className={"thumbnail" + (avatar ? " img-circle" : "")}>
        <img src={nowImage === undefined || nowImageYN === true ? imagePreviewUrl : nowImage} alt="..." />
      </div>
      <div>
        {file === null ? (
          <Button {...addButtonProps} onClick={() => handleClick()}>
            {avatar ? "이미지 업로드" : "이미지 선택"}
          </Button>
        ) : (
          <span>
            <Button {...changeButtonProps} onClick={() => handleSubmit()}>
              업로드
            </Button>
            <Button {...changeButtonProps} onClick={() => handleClick()}>
              수정
            </Button>
            {avatar ? <br /> : null}
            <Button {...removeButtonProps} onClick={() => handleRemove()}>
              <i className="fas fa-times" /> 취소
            </Button>
          </span>
        )}
      </div>
    </div>
  );
}

ImageUpload.propTypes = {
  avatar: PropTypes.bool,
  addButtonProps: PropTypes.object,
  changeButtonProps: PropTypes.object,
  removeButtonProps: PropTypes.object
};
