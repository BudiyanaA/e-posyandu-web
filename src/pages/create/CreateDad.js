import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import Input from '@material-tailwind/react/Input';
import React, { useState, useEffect } from "react";
import DadDataService from "services/DadService";
import MasterreligionDataService from "services/MasterreligionService";
import MastereducationDataService from "services/MastereducationService";
import MomDataService from "services/MomService";

export default function DadsForm() {
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
      const [dad, setDad] = useState(initialDadState);
      const [submitted, setSubmitted] = useState(false);

      const handleInputChange = event => {
        const { name, value } = event.target;
        setDad({ ...dad, [name]: value });
      };

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

      const saveDad = () => {
        var data = {
          name: dad.name,
          nik: dad.nik,
          birth_date: dad.birth_date,
          birth_place: dad.birth_place,
          religion_id: dad.religion_id,
          education_id: dad.education_id,
          blood_type: dad.blood_type,
          profession: dad.profession,
          mom_id: dad.mom_id,
        };

        DadDataService.create(data)
          .then(response => {
            setDad({
              id: response.data.id,
              name: response.data.name,
              nik: response.data.nik,
              birth_date: response.data.birth_date,
              birth_place: response.data.birth_place,
              religion_id: response.data.religion_id,
              education_id: response.data.education_id,
              blood_type: response.data.blood_type,
              profession: response.data.profession,
              mom_id: response.data.mom_id
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
                            Dad
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
                                    placeholder="Name"
                                    id="name"
                                    required
                                    value={dad.name}
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
                                    value={dad.nik}
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
                                    value={dad.birth_date}
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
                                    value={dad.birth_place}
                                    onChange={handleInputChange}
                                    name="birth_place"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                            <select onChange={handleInputChange} name="religion_id" id="religion_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {masterreligions &&
                            masterreligions.map((masterreligion, index) => (
                                <option  value= {masterreligion.id}>{masterreligion.name}</option>
                                ))} 
                            </select>
                            </div>
                            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                            <select onChange={handleInputChange} name="education_id" id="education_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {mastereducations &&
                            mastereducations.map((mastereducation, index) => (
                                <option  value= {mastereducation.id}>{mastereducation.name}</option>
                                ))} 
                            </select>
                            </div>
                            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                            <select name="blood_type" id="blood_type" value={dad.blood_type} onChange={handleInputChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="AB">O</option>
                                <option value="O">AB</option>
                            </select>
                            </div>
                            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                                <Input
                                    type="text"
                                    color="purple"
                                    placeholder="profession"
                                    id="profession"
                                    required
                                    value={dad.profession}
                                    onChange={handleInputChange}
                                    name="profession"
                                />
                            </div>
                            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                            <select onChange={handleInputChange} name="education_id" id="education_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {moms &&
                            moms.map((mom, index) => (
                                <option  value= {mom.id}>{mom.name}</option>
                                ))} 
                            </select>
                            </div>
                        </div>
                        <Button onClick={saveDad} className="btn btn-success" color="blue">
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
