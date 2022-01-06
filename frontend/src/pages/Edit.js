import axios from "axios";
import React, { useState,useEffect, useContext } from "react";
import { NavLink, useParams,useNavigate } from "react-router-dom";
import { updatedData } from "../component/context/ContextProvider";


const Edit = () => {
  
  const navigate= useNavigate()
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
    address: "",
    desc: "",
  });
  const {updata,setUpdata}=useContext(updatedData)
const {name,email,age,mobile,work,address,desc}=user
  const setData = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value }); 
  };
  useEffect(() => {
    getuserdetails()
  }, [])

  const {id}= useParams("");
console.log(id)

  const getuserdetails = async ()=>{
    const userdetails = await axios.get(`http://localhost:2000/api/getuser/${id}`);
    setUser(userdetails.data)
    console.log(userdetails.data)

  }
  const updateuser= async(e)=>{
    e.preventDefault();
    //url= `http://localhost:2000/api/updateuser/${id}
    const userdata= await axios.patch(`http://localhost:2000/api/updateuser/${id}`,user);
    setUser(userdata);
   navigate("/",{replace:true})
   setUpdata(userdata)
   
  }

  return (
    <div>
      <div className="container">
        <NavLink to="/"> Home2 </NavLink>

        <h3 className="mt-3">Add New Employee</h3>

        <form className="mt-3">
          <div className="row">
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input
              type="text"  name='name'
              class="form-control" onChange={setData} value={name}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3  col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" class="form-label">
              Email
            </label>
            <input
              type="email" name='email' onChange={setData} value={email}
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
              type="number" name="mobile"  onChange={setData} value={mobile}
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3  col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Work 
            </label>
            <input
              type="text" name='work' onChange={setData} value={work}
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3  col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Age
            </label>
            <input
              type="number" name='age' onChange={setData} value={age}
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3  col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Address
            </label>
            <input
              type="text" name='address' onChange={setData} value={address}
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 ">
            <label for="exampleInputPassword1" class="form-label">
             Description
            </label>
           <textarea name="description" className="form-control" cols='30' rows='3' onChange={setData} value={desc} ></textarea>
          </div>
          <button type="submit" onClick={updateuser} class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
