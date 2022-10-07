// import Card from '@material-tailwind/react/Card';
// import CardHeader from '@material-tailwind/react/CardHeader';
// import CardBody from '@material-tailwind/react/CardBody';
import { Button, Card, CardHeader, CardBody, Icon, IconButton } from "@material-tailwind/react";
// import Icon from '@material-tailwind/react/Icon';
import React, { useState, useEffect } from "react";
import MastervilageDataService from "services/MastervilageService";
export default function MastervilageTable() {
    const [mastervilages, setMastervilages] = useState([]);
    const [currentMastervilage, setCurrentMastervilage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    // const [searchName, setSearchName] = useState("");
    useEffect(() => {
        retrieveMastervilages();
      }, []);
    //   const onChangeSearchName = e => {
    //     const searchName = e.target.value;
    //     setSearchName(searchName);
    //   };
      const retrieveMastervilages = () => {
        MastervilageDataService.getAll()
          .then(response => {
            setMastervilages(response.data);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };
      const refreshList = () => {
        retrieveMastervilages();
        setCurrentMastervilage(null);
        setCurrentIndex(-1);
      };
    //   const setActiveMastervilage = (mastervilage, index) => {
    //     setCurrentMastervilage(mastervilage);
    //     setCurrentIndex(index);
    //   };
      const removeMastervilages = (id) => {
        MastervilageDataService.remove(id)
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
            <CardHeader color="purple" className="#">
                <div className="flex w-max justify-between gap-4">
                    <h2 className="text-white text-2xl">Table Desa</h2>
                    <a href="/mastervilage/create">                      
                        <IconButton color="blue" size="sm">
                        <i className="add" size="xl" />
                        </IconButton> 
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
                        
                        {mastervilages &&
                            mastervilages.map((mastervilage, index) => (
                            <tr key={index}>
                                
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {index+1}
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                {mastervilage.name}
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <div className="flex w-max items-end gap-4"> 
                                    <a href={"/mastervilage/edit/" + mastervilage.id}>                                 
                                    <IconButton color="blue" size="sm">
                                      <i className="edit" size="xl" />
                                    </IconButton> 
                                    </a>
                                        <IconButton onClick={()=>removeMastervilages(mastervilage.id)} color="red" size="sm">
                                          <i className="delete" size="xl" />
                                        </IconButton> 
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
