// import Card from '@material-tailwind/react/Card';
// import CardHeader from '@material-tailwind/react/CardHeader';
// import CardBody from '@material-tailwind/react/CardBody';
import { Button, Card, CardHeader, CardBody, Input }from '@material-tailwind/react';
// import Input from '@material-tailwind/react/Input';
import React, { useState } from "react";
import LoginDataService from "services/LoginService";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const initialLoginlState = {
        phone: "",
        nik: "",
        errormessage: ''
      };
      const [login, setLogin] = useState(initialLoginlState);
      const [submitted, setSubmitted] = useState(false);
      const [errors, setErrors] = useState(false);
      let navigate = useNavigate();

      const handleInputChange = event => {
        const { name, value } = event.target;
        setLogin({ ...login, [name]: value });
      };

      const saveLogin = () => {
        var data = {
          phone: login.phone,
          nik: login.nik
        };
    
        LoginDataService.create(data)
          .then(response => {
            setLogin({
              phone: response.data.phone,
              nik: response.data.nik,
             
            });
            setSubmitted(false);
            navigate('/');
            console.log(response.data);
          })
          .catch(e => {
            setErrors(true);
            console.log(e);
          });
      };
    return (
        <>
            <div className="bg-light-blue-600 pt-10 pb-25 "></div>
                <Card className="w-96">
                    <CardHeader color="blue" className="center">
                        <div className="w-full flex items-center justify-between">
                            <h2 className=" text-white text-3xl">Login</h2>
                            <Button
                                color="white"
                                // buttonType="link"
                                size="lg"
                                // style={{ padding: 0 }}
                            >
                            </Button>
                        </div>
                    </CardHeader>
                    <CardBody>
                                           
                    {errors ? (
                    <div>
                      <h4>User Not Found</h4>
                    </div>
                    
                    
                    ) : (    
                        <div>    
                            <div className="flex flex-wrap ">
                                <div className="w-full lg:w-12/12 mb-10 font-light">
                                    <Input
                                        type="text"
                                        color="purple"
                                        placeholder="Phone"
                                        id="phone"
                                        required
                                        onChange={handleInputChange}
                                        name="phone"
                                    />
                                </div>            
                            </div>
                            <div className="flex flex-wrap mt-1">
                                <div className="w-full lg:w-12/12 mb-10 font-light">
                                    <Input
                                        type="text"
                                        color="purple"
                                        placeholder="NIK"
                                        id="nik"
                                        required
                                        onChange={handleInputChange}
                                        name="nik"
                                    />
                                </div>            
                            </div>
                           
                            <Button onClick={saveLogin} className="btn btn-success" color="blue">
                                 Submit
                            </Button>
                           
                            </div>        
                     )}                             
                    </CardBody>
                </Card>
        </>
    );
}
