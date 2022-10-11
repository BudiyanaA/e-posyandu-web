import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import Input from '@material-tailwind/react/Input';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import KmsDataService from "services/KmsService";
import ChildDataService from "services/ChildService";

export default function SettingsForm() {
    const { id }= useParams();
    const initialKmsState = {
        id: null,
        date: "",
        weight: "",
        height: "",
        child_id: ""
      };
      const [childs, setChilds] = useState([]);
      const [currentKms, setCurrenKms] = useState(initialKmsState);
      const [edit , setEdit] = useState(false);
      const [ setMessage] = useState("");
      const getKms = id => {

        KmsDataService.get(id)
        .then(response => {
          setCurrenKms(response.data);                
          console.log(response.data);
        })
        .catch(e => {             
          console.log(e);
        });
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrenKms({ ...currentKms, [name]: value });
      };
      useEffect(() => {
        if (id)
        getKms(id);
      }, [id]);

      useEffect(() => {
        retrieveChilds();
      }, []);
      const retrieveChilds = () => {
        ChildDataService.getAll()
          .then(response => {
            setChilds(response.data);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };

      const updateKms = () => {
        KmsDataService.update(currentKms.id, currentKms)
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
                        <h2 className="text-white text-2xl">Create</h2>
                        <Button
                            color="transparent"
                            buttonType="link"
                            size="lg"
                            style={{ padding: 0 }}
                        >
                            Kms
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
                                    type="date"
                                    color="purple"
                                    placeholder="Date"
                                    id="date"
                                    required
                                    value={currentKms.date}
                                    onChange={handleInputChange}
                                    name="date"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <Input
                                    type="decimal"
                                    color="purple"
                                    placeholder="Weight"
                                    id="weight"
                                    required
                                    value={currentKms.weight}
                                    onChange={handleInputChange}
                                    name="weight"
                                />
                            </div>    
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <Input
                                    type="decimal"
                                    color="purple"
                                    placeholder="Height"
                                    id="height"
                                    required
                                    value={currentKms.height}
                                    onChange={handleInputChange}
                                    name="height"
                                />
                            </div> 
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                            <select value={currentKms.child_id} onChange={handleInputChange} name="child_id" id="child_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {childs &&
                            childs.map((child, index) => (
                                <option  value= {child.id}>{child.name}</option>
                                ))} 
                            </select>
                            </div>              
                        </div>
                        <Button onClick={updateKms} className="btn btn-success" color="blue">
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
