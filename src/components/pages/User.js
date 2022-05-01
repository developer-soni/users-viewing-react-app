import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import  TogglePosts from "./TogglePosts";
// import Posts from "./Posts";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    address: "",
    phone: "",
    website: "",
    company: "",
  });

  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const resp = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const data = await resp.json();
    console.log(data);
    setUser(data);
  };

  return (
    <>
      <div className="user-info">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <h5 className="my-3">{user.name}</h5>
                  <p className="text-muted mb-1">
                    <strong>Works @ </strong>
                    {user.company.name}
                  </p>
                  <p className="text-muted mb-4">
                    <strong>From: </strong>
                    {user.address.street}, {user.address.city}
                  </p>
                  <h6 className="badge bg-danger rounded-pill">
                    ID: {user.id}
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">User Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.username}</p>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.email}</p>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <TogglePosts idno = {user.id}/>
      {/* <Posts/> */}
    </>
  );
};

export default User;
