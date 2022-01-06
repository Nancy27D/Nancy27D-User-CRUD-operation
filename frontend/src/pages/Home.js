import React, { useContext, useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { addData } from "../component/context/ContextProvider";
import { updatedData } from "../component/context/ContextProvider";

const Home = () => {
  const [user, setUser] = useState([]);
  console.log(user);

  const { udata, setUdata } = useContext(addData);
  const { updata, setUpdata } = useContext(updatedData);

  const getUsersData = async (e) => {
    await axios
      .get(`http://localhost:2000/api/getdata`)
      .then((res) => setUser(res.data));
  };
  useEffect(() => {
    // whenever our page refresh this useE func will be called to load alluserdata
    getUsersData();
  }, []);

  // heroku url =` https://usermemo.herokuapp.com/api/deleteuser/${id}`
  const deleteuser = async (id) => {
    await axios.delete(`http://localhost:2000/api/deleteuser/${id}`);
    getUsersData();
  };

  return (
    <>
      {udata ? (
        <>
          <div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            <strong>{udata.name}Success!</strong> User Added successfully !
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </>
      ) : (
        ""
      )}
      {updata ? (
        <>
          <div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            <strong>{updata.name}Success!</strong> User Updated successfully !
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </>
      ) : (
        ""
      )}

      <div className="mt-5 ">
        <div className="container">
          <div className="add_btn mt-2 mb-2">
            <NavLink to="/adduser" className="btn btn-primary">
              {" "}
              Add Data
            </NavLink>
          </div>
        </div>
      </div>

      <div className="container">
        <table className="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">Id</th>
              <th scope="col"> Name</th>
              <th scope="col"> Email</th>
              <th scope="col">age</th>
              <th scope="col">Mobile</th>
              <th scope="col">Job</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {user.map((ele, id) => {
              return (
                <>
                  <tr>
                    <th scope="row">{id + 1}</th>
                    <td>{ele.name}</td>
                    <td>{ele.email}</td>
                    <td>{ele.age}</td>
                    <td>{ele.mobile}</td>
                    <td>{ele.work}</td>
                    <td className="d-flex justify-content-between">
                      <NavLink to={`View/${ele._id}`}>
                        {" "}
                        <button className="btn btn-success">
                          <VisibilityIcon />
                        </button>
                      </NavLink>
                      <NavLink to={`/edit/${ele._id}`}>
                        {" "}
                        <button className="btn btn-success">
                          <EditIcon />
                        </button>
                      </NavLink>

                      <button
                        className="btn btn-danger"
                        onClick={() => deleteuser(ele._id)}
                      >
                        <DeleteIcon />
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
