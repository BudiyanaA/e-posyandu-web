import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import Input from '@material-tailwind/react/Input';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import BirthrecordDataService from "services/BirthrecordService";
import MasterplaceDataService from "services/MasterplaceService";
import MomDataService from "services/MomService";

export default function SettingsForm() {
    const { id }= useParams();
    const initialBirthrecordState = {
        id: null,
        weight: "",
        body_length: "",
        head_circumference: "",
        time: "",
        gender: "",
        place_id: "",
        mom_id: ""
      };
      const [masterplaces, setMasterplaces ] = useState([]);
      const [moms, setMoms ] = useState([]);
      const [currentBirthrecord, setCurrenBirthrecord] = useState(initialBirthrecordState);
      const [edit , setEdit] = useState(false);
      const [ setMessage] = useState("");
      const getBirthrecord = id => {

        BirthrecordDataService.get(id)
        .then(response => {
          setCurrenBirthrecord(response.data);                
          console.log(response.data);
        })
        .catch(e => {             
          console.log(e);
        });
    };

      const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrenBirthrecord({ ...currentBirthrecord, [name]: value });
      };

      useEffect(() => {
        if (id)
          getBirthrecord(id);
      }, [id]);


      useEffect(() => {
        retrieveMasterplaces();
      }, []);
      const retrieveMasterplaces = () => {
        MasterplaceDataService.getAll()
          .then(response => {
            setMasterplaces(response.data);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };

      useEffect(() => {
        retrieveMoms();
      }, []);
      const retrieveMoms = () => {
       MomDataService.getAll()
          .then(response => {
            setMoms(response.data);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };

      const updateBirthrecord = () => {
        BirthrecordDataService.update(currentBirthrecord.id, currentBirthrecord)
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
                            Birth Record
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
                                    type="decimal"
                                    color="purple"
                                    placeholder="Weight"
                                    id="weight"
                                    required
                                    value={currentBirthrecord.weight}
                                    onChange={handleInputChange}
                                    name="weight"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <Input
                                    type="decimal"
                                    color="purple"
                                    placeholder="Body_length "
                                    id="body_length"
                                    required
                                    value={currentBirthrecord.body_length}
                                    onChange={handleInputChange}
                                    name="body_length"
                                />
                            </div>    
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <Input
                                    type="decimal"
                                    color="purple"
                                    placeholder="Head_circumference"
                                    id="head_circumference"
                                    required
                                    value={currentBirthrecord.head_circumference}
                                    onChange={handleInputChange}
                                    name="head_circumference"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <Input
                                    type="time"
                                    color="purple"
                                    placeholder="Time"
                                    id="time"
                                    required
                                    value={currentBirthrecord.time}
                                    onChange={handleInputChange}
                                    name="time"
                                />
                            </div>  
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                            <select name="gender" id="gender" value={currentBirthrecord.gender} onChange={handleInputChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="M">M</option>
                                <option value="F">F</option>
                            </select>
                            </div>  
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                            <select value={currentBirthrecord.place_id} onChange={handleInputChange} name="place_id" id="place_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {masterplaces &&
                            masterplaces.map((masterplace, index) => (
                                <option  value= {masterplace.id}>{masterplace.name}</option>
                                ))} 
                            </select>
                            </div>  
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                            <select value={currentBirthrecord.mom_id} onChange={handleInputChange} name="mom_id" id="mom_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {moms &&
                            moms.map((mom, index) => (
                                <option  value= {mom.id}>{mom.name}</option>
                                ))} 
                            </select>
                            </div>  
                            {/* <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <Input
                                    type="text"
                                    color="purple"
                                    placeholder="Birth_condition_ids  "
                                />
                            </div>          */}
                        </div>
                        <Button onClick={updateBirthrecord} className="btn btn-success" color="blue">
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
