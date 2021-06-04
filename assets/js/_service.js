var LaatestData = []

const _ReadData = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "get",
      url: "http://crud.yuro.ir/storage",
      headers: {
        Authorization: "4900950777",
      },
      success: function (response) {
        resolve(response.data);
        LaatestData = response.data
      },
      fail: function (err) {
        reject(err);
      },
    });
  });
};

const _AddData = (data) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "post",
      url: "http://crud.yuro.ir/storage",
      headers: {
        Authorization: "4900950777",
      },
      dataType: "xml/html/script/json", // expected format for response
      contentType: "application/json",
      data: JSON.stringify({
        data: data,
      }),
      success: function (response) {
        resolve(response);
      },
      fail: function (err) {
        reject(err);
      },
    });
  });
};

const _DeleteData = (id) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "delete",
      url: "http://crud.yuro.ir/storage",
      headers: {
        Authorization: "4900950777",
      },
      dataType: "xml/html/script/json", // expected format for response
      contentType: "application/json",
      data: JSON.stringify({
        id: id,
      }),
      success: function (response) {
        resolve(response);
      },
      fail: function (err) {
        reject(err);
      },
    });
  });
};

const _EditData = (id, UpdateData) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "patch",
      url: "http://crud.yuro.ir/storage",
      headers: {
        Authorization: "4900950777",
      },
      dataType: "xml/html/script/json", // expected format for response
      contentType: "application/json",
      data: JSON.stringify({
        id: id,
        UpdateData: UpdateData,
      }),
      success: function (response) {
        resolve(response);
      },
      fail: function (err) {
        reject(err);
      },
    });
  });
};
