import React,{useEffect,useState} from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { CardContent, Card } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroid from "@mui/icons-material/PhoneAndroid";
import { NavLink, useParams,useNavigate } from "react-router-dom";
import axios from "axios";


const Details = () => {
const {id}= useParams("");
console.log(id)
const navigate= useNavigate()
const [getuserdata, setgetuserdata] = useState([])

  const getuserdetails = async (e)=>{
    const res= await axios.get(`http://localhost:2000/api/getuser/${id}`)
      setgetuserdata(res.data)
  }
  useEffect(() => {
    getuserdetails()
  }, [])

  const deleteuser=async(id)=>{
    await axios.delete(`http://localhost:2000/api/deleteuser/${id}`)
    navigate("/",{replace:true})
  }

  return (
    <div className="container mt-3">
    
      <h1 style={{ fontWeight: 300 }}>Welcome </h1>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
            <div className="row">
            <div className="add_btn">
         <NavLink to={`/edit/${getuserdata._id}`}><button className="btn btn-success mx-2"><EditIcon/></button></NavLink> 
          <button className="btn btn-danger" onClick={()=>deleteuser(getuserdata._id)}><DeleteIcon/></button>
          </div>
            <div className="left_view col-lg-6 col-md-6 col-12">
              <img src="/profile.png" style={{width:50}} alt="profile"/>
                 <h3 className="mt-3">Name:<span > {getuserdata.name}</span></h3>
                 <h3 className="mt-3">Age:<span>{getuserdata.age}</span></h3>
                 <p className="mt-3"><EmailIcon/>Email:<span>{getuserdata.email}</span></p>
                 <p className="mt-3"><WorkIcon/>Occuption:<span>{getuserdata.work}</span></p>
           </div>
        <div className="right_view col-lg-6 col-md-6 col-12">
         <p className="mt-5"><PhoneAndroid/> Mobile:<span>{getuserdata.mobile}</span></p>
         <p className="mt-3"><LocationOnIcon/> Address:<span>{getuserdata.address}</span></p>
         <p className="mt-3">Description: <span>{getuserdata.desc}</span></p>
        </div>
         
            </div>
     
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;
