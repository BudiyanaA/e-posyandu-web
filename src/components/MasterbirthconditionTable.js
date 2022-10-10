import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import { Button } from "@material-tailwind/react";
import Icon from '@material-tailwind/react/Icon';
import React, { useState, useEffect } from "react";
import MasterbirthconditionDataService from "services/MasterbirthconditionService";
export default function MastervaksinTable() {
    const [masterbirthconditions, setMasterbirthconditions] = useState([]);
    const [currentMasterbirthcondition, setCurrentMasterbirthcondition] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    // const [searchName, setSearchName] = useState("");
    useEffect(() => {
        retrieveMasterbirthconditions();
      }, []);
    //   const onChangeSearchName = e => {
    //     const searchName = e.target.value;
    //     setSearchName(searchName);
    //   };
      const retrieveMasterbirthconditions = () => {
        MasterbirthconditionDataService.getAll()
          .then(response => {
            setMasterbirthconditions(response.data);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };
      const refreshList = () => {
        retrieveMasterbirthconditions();
        setCurrentMasterbirthcondition(null);
        setCurrentIndex(-1);
      };
    //   const setActiveMastervilage = (mastervilage, index) => {
    //     setCurrentMastervilage(mastervilage);
    //     setCurrentIndex(index);
    //   };
      const removeMasterbirthconditions = (id) => {
        MasterbirthconditionDataService.remove(id)
          .then(response => {
            console.log(response.data);
            refreshList();
          })
          .catch(e => {
            console.log(e);
          });
      };
    return (
        
        <Card>
            <CardHeader color="purple" contentPosition="#">
                <div className="flex w-max justify-between gap-4">
                    <h2 className="text-white text-2xl">Table Birthcondition</h2>
                    <a href="/masterbirthcondition/create">                      
                        <Button color="blue" size="sm"><Icon name="add" size="xl" /></Button> 
                    </a> 
                </div>
            </CardHeader>
            <CardBody>
            <ul className="list-group">
                <div className="overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    No
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Name
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        
                        {masterbirthconditions &&
                            masterbirthconditions.map((masterbirthcondition, index) => (
                            <tr>
                                
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {index+1}
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {masterbirthcondition.name}
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <div className="flex w-max items-end gap-4"> 
                                    <a href={"/masterbirthcondition/edit/" + masterbirthcondition.id}>                                 
                                        <Button color="green" size="sm"><Icon name="edit" size="xl" /></Button>
                                    </a>
                                        <Button onClick={()=>removeMasterbirthconditions(masterbirthcondition.id)} color="red" size="sm"><Icon name="delete" size="xl" /></Button>
                                    </div>                                
                                </th>
                            </tr>
                             ))}
                        
                        </tbody>
                    </table>
                </div>
                </ul>
            </CardBody>
        </Card>
    );
}
