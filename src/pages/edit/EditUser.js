import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import Input from '@material-tailwind/react/Input';
import React, { useState, useEffect } from "react";
import UserDataService from "services/UserService";
import { useParams } from 'react-router-dom';

export default function SettingsForm() {
    const { id }= useParams();
    const initialUserState = {
        id: null,
        phone: "",
        nik: "",
        role: "",
      };
      const [currentUser, setCurrentUser] = useState(initialUserState);
      const [edit , setEdit] = useState(false);
      const [ setMessage] = useState("");
      const getUser = id => {
            
        UserDataService.get(id)
          .then(response => {
            setCurrentUser(response.data);                
            console.log(response.data);
          })
          .catch(e => {             
            console.log(e);
          });
      };

      const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentUser({ ...currentUser, [name]: value });
      };

      useEffect(() => {
        if (id)
          getUser(id);
      }, [id]);
      
      const updateUser = () => {
        UserDataService.update(currentUser.id, currentUser)
          .then(response => {
            console.log(response.data);
            setMessage("The tutorial was updated successfully!");
          })
          .catch(e => {
            setEdit(true);
            console.log(e);
          });
      };
    return (
        <>
            <div className="bg-light-blue-500 pt-10 pb-25"></div>
            <Card>
                <CardHeader color="purple" contentPosition="none">
                    <div className="w-full flex items-center justify-between">
                        <h2 className="text-white text-2xl">Edit</h2>
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
                    {edit ? (
                    <div>
                      <h4>You edit successfully!</h4>
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
                                    value={currentUser.phone}
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
                                    value={currentUser.nik}
                                    onChange={handleInputChange}
                                    name="nik"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                            <select name="role" id="role" value={currentUser.role} onChange={handleInputChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="USER">USER</option>
                                <option value="INPUTTER">INPUTTER</option>
                                <option value="VIEWER">VIEWER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                            </div>              
                        </div>
                        <Button onClick={updateUser} className="btn btn-success" color="blue">
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
