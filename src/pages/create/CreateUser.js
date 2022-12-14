import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import Input from '@material-tailwind/react/Input';
import React, { useState, useEffect } from "react";
import UserDataService from "services/UserService";

export default function SettingsForm() {
    const initialUserState = {
        id: null,
        phone: "",
        nik: "",
        role: "",
      };
      const [user, setUser] = useState(initialUserState);
      const [submitted, setSubmitted] = useState(false);

      const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
      };

      const saveUser = () => {
        var data = {
          phone: user.phone,
          nik: user.nik,
          role: user.role,
        };

        UserDataService.create(data)
          .then(response => {
            setUser({
              id: response.data.id,
              phone: response.data.phone,
              nik: response.data.nik,
              role: response.data.role,
            });
            setSubmitted(true);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };
    return (
        <>
            <div className="bg-light-blue-500 pt-10 pb-25"></div>
            <Card>
                <CardHeader color="purple" contentPosition="none">
                    <div className="w-full flex items-center justify-between">
                        <h2 className="text-white text-2xl">Create</h2>
                        <Button
                            color="transparent"
                            buttonType="link"
                            size="lg"
                            style={{ padding: 0 }}
                        >
                            User
                        </Button>
                    </div>
                </CardHeader>
                <CardBody>
                <div className="submit-form">
                    {submitted ? (
                    <div>
                      <h4>You submitted successfully!</h4>
                    </div>
                    ) : (
                    <div>
                        <div className="flex flex-wrap mt-10">
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <Input
                                    type="text"
                                    color="purple"
                                    placeholder="Phone"
                                    id="phone"
                                    required
                                    value={user.phone}
                                    onChange={handleInputChange}
                                    name="phone"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <Input
                                    type="text"
                                    color="purple"
                                    placeholder="Nik"
                                    id="nik"
                                    required
                                    value={user.nik}
                                    onChange={handleInputChange}
                                    name="nik"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                            <select name="role" id="role" value={user.role} onChange={handleInputChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="USER">USER</option>
                                <option value="INPUTTER">INPUTTER</option>
                                <option value="VIEWER">VIEWER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                            </div>              
                        </div>
                        <Button onClick={saveUser} className="btn btn-success" color="blue">
                             Submit
                        </Button>
                        </div>                               
                                )}                              
                    </div>
                </CardBody>
            </Card>
        </>
    );
}
