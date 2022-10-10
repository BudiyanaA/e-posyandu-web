import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import Input from '@material-tailwind/react/Input';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ChildDataService from "services/ChildService";
import PosyanduDataService from "services/PosyanduService";
import MomDataService from "services/MomService";
import BirthrecordDataService from "services/BirthrecordService";

export default function SettingsForm() {
    const { id }= useParams();
    const initialChildState = {
        id: null,
        name: "",
        nik: "",
        pregnancy_to: "",
        birth_place: "",
        birth_date: "",
        birth_certificate_number: "",
        insurance_number: "",
        gender: "",
        mom_id: "",
        birth_record_id: "",
        posyandu_id: ""
      };
      const [posyandus, setPosyandus ] = useState([]);
      const [moms, setMoms ] = useState([]);
      const [birthrecords, setBirthrecords ] = useState([]);
      const [currentChild, setCurrenChild] = useState(initialChildState);
      const [edit , setEdit] = useState(false);
      const [ setMessage] = useState("");
      const getChild = id => {

        ChildDataService.get(id)
        .then(response => {
          setCurrenChild(response.data);                
          console.log(response.data);
        })
        .catch(e => {             
          console.log(e);
        });
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrenChild({ ...currentChild, [name]: value });
      };

      useEffect(() => {
        if (id)
          getChild(id);
      }, [id]);

      useEffect(() => {
        retrievePosyandus();
      }, []);
      const retrievePosyandus = () => {
        PosyanduDataService.getAll()
          .then(response => {
            setPosyandus(response.data);
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

      useEffect(() => {
        retrieveBirthrecords();
      }, []);
      const retrieveBirthrecords = () => {
        BirthrecordDataService.getAll()
          .then(response => {
            setBirthrecords(response.data);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };


       const updateChild = () => {
        ChildDataService.update(currentChild.id, currentChild)
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
                            Child
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
                                    placeholder="Name"
                                    id="name"
                                    required
                                    value={currentChild.name}
                                    onChange={handleInputChange}
                                    name="name"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                                <Input
                                    type="number"
                                    color="purple"
                                    placeholder="NIk"
                                    id="nik"
                                    required
                                    value={currentChild.nik}
                                    onChange={handleInputChange}
                                    name="nik"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                                <Input
                                    type="number"
                                    color="purple"
                                    placeholder="Pregnancy_to"
                                    id="pregnancy_to"
                                    required
                                    value={currentChild.pregnancy_to}
                                    onChange={handleInputChange}
                                    name="pregnancy_to"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                                <Input
                                    type="text"
                                    color="purple"
                                    placeholder="Birth_place"
                                    id="birth_place"
                                    required
                                    value={currentChild.birth_place}
                                    onChange={handleInputChange}
                                    name="birth_place"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                                <Input
                                    type="date"
                                    color="purple"
                                    placeholder="Birth_date"
                                    id="birth_date"
                                    required
                                    value={currentChild.birth_date}
                                    onChange={handleInputChange}
                                    name="birth_date"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                                <Input
                                    type="text"
                                    color="purple"
                                    placeholder="Birth_certificate_number"
                                    id="birth_certificate_number"
                                    required
                                    value={currentChild.birth_certificate_number}
                                    onChange={handleInputChange}
                                    name="birth_certificate_number"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                                <Input
                                    type="text"
                                    color="purple"
                                    placeholder="Insurance_number"
                                    id="insurance_number"
                                    required
                                    value={currentChild.insurance_number}
                                    onChange={handleInputChange}
                                    name="insurance_number"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                                <Input
                                    type="text"
                                    color="purple"
                                    placeholder="Gender"
                                    id="gender"
                                    required
                                    value={currentChild.gender}
                                    onChange={handleInputChange}
                                    name="gender"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                            <select value={currentChild.religion_id} onChange={handleInputChange} name="mom_id" id="mom_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {moms &&
                            moms.map((mom, index) => (
                                <option  value= {mom.id}>{mom.name}</option>
                                ))} 
                            </select>
                            </div>

                            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                            <select value={currentChild.religion_id} onChange={handleInputChange} name="birth_record_id" id="birth_record_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {birthrecords &&
                            birthrecords.map((birthrecord, index) => (
                                <option  value= {birthrecord.id}>{birthrecord.weight}</option>
                                ))} 
                            </select>
                            </div>

                            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                            <select value={currentChild.religion_id} onChange={handleInputChange} name="posyandu_id" id="education_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {posyandus &&
                            posyandus.map((posyandu, index) => (
                                <option  value= {posyandu.id}>{posyandu.name}</option>
                                ))} 
                            </select>
                            </div>
                        </div>
                        <Button onClick={updateChild} className="btn btn-success" color="blue">
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
