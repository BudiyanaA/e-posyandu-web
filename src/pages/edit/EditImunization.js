import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import Input from '@material-tailwind/react/Input';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ImunizationDataService from "services/ImunizationService";
import MastervaksinDataService from "services/MastervaksinService";
import ChildDataService from "services/ChildService";

export default function ImunizationsForm() {
    const { id }= useParams();
    const initialImunizationState = {
        id: null,
        vaksin_id: "",
        child_id: "",
        date: ""
      };
      const [mastervaksins, setMastervaksins ] = useState([]);
      const [childs, setChilds] = useState([]);
      const [currentImunization, setCurrenImunization] = useState(initialImunizationState);
      const [edit , setEdit] = useState(false);
      const [ setMessage] = useState("");
      const getImunization = id => {

        ImunizationDataService.get(id)
        .then(response => {
          setCurrenImunization(response.data);                
          console.log(response.data);
        })
        .catch(e => {             
          console.log(e);
        });
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrenImunization({ ...currentImunization, [name]: value });
      };

      useEffect(() => {
        if (id)
        getImunization(id);
      }, [id]);

       useEffect(() => {
        retrieveMastervaksins();
      }, []);
      const retrieveMastervaksins = () => {
        MastervaksinDataService.getAll()
          .then(response => {
            setMastervaksins(response.data);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };

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
      
      const updateImunization = () => {
        ImunizationDataService.update(currentImunization.id, currentImunization)
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
                            Imunization
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
                            <select value={currentImunization.vaksin_id} onChange={handleInputChange} name="vaksin_id" id="vaksin_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {mastervaksins &&
                            mastervaksins.map((mastervaksin, index) => (
                                <option  value= {mastervaksin.id}>{mastervaksin.name}</option>
                                ))} 
                            </select>
                            </div>
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                            <select value={currentImunization.child_id} onChange={handleInputChange} name="child_id" id="child_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {childs &&
                            childs.map((child, index) => (
                                <option  value= {child.id}>{child.name}</option>
                                ))} 
                            </select>
                            </div>    
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <Input
                                    type="date"
                                    color="purple"
                                    placeholder="date"
                                    id="date"
                                    required
                                    value={currentImunization.date}
                                    onChange={handleInputChange}
                                    name="date"
                                />
                            </div>              
                        </div>
                        <Button onClick={updateImunization} className="btn btn-success" color="blue">
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
