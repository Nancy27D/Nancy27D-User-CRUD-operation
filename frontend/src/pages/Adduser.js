import axios from 'axios'
import React, { useContext, useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import { addData } from '../component/context/ContextProvider';

const Adduser = () => {
  const {udata,setUdata}=useContext(addData)
  const navigate = useNavigate();
  const [newUsers, setNewUsers] = useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
    address: "",
    desc: "",
  });

  const setData = (e) => {
    console.log(e.target.value);
    setNewUsers({ ...newUsers, [e.target.name]: e.target.value });
    
  };

  const addUserData = async (e)=>{
    e.preventDefault();
    const userdata= await axios.post("http://localhost:2000/api/insertUser",newUsers);
    setNewUsers(userdata)
    navigate("/", { replace: true });
    setUdata(userdata)
  }
  return (<>

    {
      udata ? 
      <>
      <div class="alert alert-success alert-dismissible fade show" role="alert">
      <strong>Success!</strong> User added successfully !
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
      </>:""
    }
    <div>
      <div className="container">
        <NavLink to="/"> Home </NavLink>

        <h3 className="mt-3">Add New Employee</h3>

        <form className="mt-3">
          <div className="row">
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input
              type="text"  name='name'
              class="form-control" onChange={setData}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3  col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" class="form-label">
              Email
            </label>
            <input
              type="email" name='email' onChange={setData}
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3  col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Mobile 
            </label>
            <input
              type="number" name="mobile"  onChange={setData}
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3  col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Work 
            </label>
            <input
              type="text" name='work' onChange={setData}
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3  col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Age
            </label>
            <input
              type="number" name='age' onChange={setData}
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3  col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Address
            </label>
            <input
              type="text" name='address' onChange={setData}
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 ">
            <label for="exampleInputPassword1" class="form-label">
             Description
            </label>
           <textarea name="desc" className="form-control" cols='30' rows='3' onChange={setData}></textarea>
          </div>
          <button type="submit"   onClick={addUserData} class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Adduser;
