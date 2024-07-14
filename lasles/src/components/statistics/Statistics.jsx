import React from 'react';
import user from '../../assets/images/user.png';
import location from '../../assets/images/location.png';
import server from '../../assets/images/Server.png';

const Statistics = () => {
  const Card = (props) => {
    return (
      <div className="p-4 w- border mr-9  border-r-gray-500 rounded-lg shadow-md flex items-center">
        <div className="w-12 h-12">
          <img src={props.image} alt={props.Title} className="w-full h-full object-cover" />
        </div>
        <div className="ml-4">
          <p className="text-xl font-bold">{props.Title}</p>
          <p className="text-gray-600">{props.Description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex my-9 gap-14 justify-center flex-row mx-[10vw]">
      <Card image={user} Title="90+" Description="Users" />
      <Card image={location} Title="30+" Description="Locations" />
      <Card image={server} Title="50+" Description="Servers" />
    </div>
  );
};

export default Statistics;
