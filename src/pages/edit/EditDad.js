import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import Input from '@material-tailwind/react/Input';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import DadDataService from "services/DadService";
import MasterreligionDataService from "services/MasterreligionService";
import MastereducationDataService from "services/MastereducationService";
import MomDataService from "services/MomService";

export default function DadsForm() {
    const { id }= useParams();
    const initialDadState = {
        id: null,
        name: "",
        nik: "",
        birth_date: "",
        birth_place: "",
        religion_id: "",
        education_id: "",
        blood_type: "",
        profession: "",
        mom_id: ""
      };
      const [masterreligions, setMasterreligions ] = useState([]);
      const [mastereducations, setMastereducations] = useState([]);
      const [moms, setMoms ] = useState([]);
      const [currentDad, setCurrenDad] = useState(initialDadState);
      const [edit , setEdit] = useState(false);
      const [ setMessage] = useState("");
      const getDad = id => {

        DadDataService.get(id)
        .then(response => {
          setCurrenDad(response.data);                
          console.log(response.data);
        })
        .catch(e => {             
          console.log(e);
        });
    };
    
    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrenDad({ ...currentDad, [name]: value });
      };

      useEffect(() => {
        if (id)
          getDad(id);
      }, [id]);

      useEffect(() => {
        retrieveMasterreligions();
      }, []);
      const retrieveMasterreligions = () => {
        MasterreligionDataService.getAll()
          .then(response => {
            setMasterreligions(response.data);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };

      useEffect(() => {
        retrieveMastereducations();
      }, []);
      const retrieveMastereducations = () => {
        MastereducationDataService.getAll()
          .then(response => {
            setMastereducations(response.data);
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

      const updateDad = () => {
        DadDataService.update(currentDad.id, currentDad)
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
                            Dad
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
                                    value={currentDad.name}
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
                                    value={currentDad.nik}
                                    onChange={handleInputChange}
                                    name="nik"
                                />
                            </div>                          
                            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                                <Input
                                    type="date"
                                    color="purple"
                                    placeholder="birth_date"
                                    id="birth_date"
                                    required
                                    value={currentDad.birth_date}
                                    onChange={handleInputChange}
                                    name="birth_date"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                                <Input
                                    type="text"
                                    color="purple"
                                    placeholder="birth_place"
                                    id="birth_place"
                                    required
                                    value={currentDad.birth_place}
                                    onChange={handleInputChange}
                                    name="birth_place"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                            <select value={currentDad.religion_id} onChange={handleInputChange} name="religion_id" id="religion_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {masterreligions &&
                            masterreligions.map((masterreligion, index) => (
                                <option  value= {masterreligion.id}>{masterreligion.name}</option>
                                ))} 
                            </select>
                            </div>
                            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                            <select value={currentDad.education_id} onChange={handleInputChange} name="education_id" id="education_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {mastereducations &&
                            mastereducations.map((mastereducation, index) => (
                                <option  value= {mastereducation.id}>{mastereducation.name}</option>
                                ))} 
                            </select>
                            </div>
                            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                                <Input
                                    type="text"
                                    color="purple"
                                    placeholder="blood_type"
                                    id="blood_type"
                                    required
                                    value={currentDad.blood_type}
                                    onChange={handleInputChange}
                                    name="blood_type"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                                <Input
                                    type="text"
                                    color="purple"
                                    placeholder="profession"
                                    id="profession"
                                    required
                                    value={currentDad.profession}
                                    onChange={handleInputChange}
                                    name="profession"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                            <select value={currentDad.mom_id} onChange={handleInputChange} name="education_id" id="education_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {moms &&
                            moms.map((mom, index) => (
                                <option  value= {mom.id}>{mom.name}</option>
                                ))} 
                            </select>
                            </div>
                        </div>
                        <Button onClick={updateDad} className="btn btn-success" color="blue">
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
