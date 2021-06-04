var isEditMode = false;
let currId = "";

$("#form").submit(function (e) {
  let values = getInputaValue();
  e.preventDefault();
  validation(values.name, values.username, values.mobile, values.email);
});

const validation = (fName, username, telephone, email) => {
  if (formLength(fName, username, telephone, email)) {
    if (telValidation(telephone)) {
      if (emailValidation(email)) {
        if (isEditMode == true) {
          editData({ name: fName, username, mobile: telephone, email });
        } else {
          addData(fName, username, telephone, email);
        }
      }
    }
  }
};
const formLength = (fName, username, telephone, email) => {
  if (fName === "" || username === "" || telephone === "" || email === "") {
    setErrorMessage(TEXTS.please_enter_values);
    return false;
  } else {
    clearErrorMessage();
    return true;
  }
};
const telValidation = (telephone) => {
  if (!tel_Regex.test(telephone)) {
    setErrorMessage(TEXTS.errorMessages.mobile);
    return false;
  } else {
    clearErrorMessage();
    return true;
  }
};
const emailValidation = (email) => {
  if (!email_Regex.test(email)) {
    setErrorMessage(TEXTS.errorMessages.email);
    return false;
  } else {
    clearErrorMessage();
    return true;
  }
};

const addData = (fName, username, telephone, email) => {
  _AddData({
    id: Date.now(),
    name: fName,
    username,
    mobile: telephone,
    email,
  });
  clearInputs();
  readDataAndReloadTable();
};

const deleteData = (id) => {
  _DeleteData(id);
  readDataAndReloadTable();
};

function editData({ name, username, mobile, email }) {
  _EditData(currId, {
    name,
    username,
    mobile,
    email,
  });
  currId = "";
  isEditMode = false;
  readDataAndReloadTable();
  clearInputs();
  toggleSubmitButtonToEdit(false);
}

const handleEditData = (id) => {
  toggleSubmitButtonToEdit(true);
  isEditMode = true;
  LaatestData.map((item) => {
    if (item.id == id) {
      setInputaValue({
        name: item.name,
        username: item.username,
        mobile: item.mobile,
        email: item.email,
      });
      currId = id;
    }
  });
};

const readDataAndReloadTable = () => {
  clearTable();
  _ReadData().then(result=>{
    console.log('result',result )
    result.map((item) => {
      addDataToTable({
        name: item.name,
        email: item.email,
        mobile: item.mobile,
        username: item.username,
        id: item.id,
      });
  })
 
});}
readDataAndReloadTable();
