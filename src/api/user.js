import data from './data.json';
console.log(data);

const dummyapi = (username, password) => {
  const user = data.user.find((u) => u.name === username);
  if (user) {
    if (user.password === password) {
      return Promise.resolve(user);
    } else {
      return Promise.reject("Invalid password");
    }
  }
  return Promise.reject("Invalid user");
};

const login = (username, password) => {
  return dummyapi(username, password)
    .then((user) => {
      saveuser({
        username: user.name,
        password,
      });
      return {
        status: "success",
        data: user,
      };
    })
    .catch((error) => {
      return {
        status: "error",
        message: error,
      };
    });
};

const saveuser = (data) => {
  localStorage.setItem("cred", JSON.stringify(data));
};

const isLoggedin = () => {
  try {
    const val = JSON.parse(localStorage.getItem("cred"));
    return !!val;
  } catch {
    return false;
  }
};

const clearuserinfo = () => {
  localStorage.removeItem("cred");
};

export { login, saveuser, clearuserinfo, isLoggedin };
