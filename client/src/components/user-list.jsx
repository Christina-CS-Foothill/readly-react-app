import React, { useState } from 'react';


var UserList = () => {

  var users = [
    { 'name': 'Christina Hunter', 'dateCreated': new Date() },
    { 'name': 'Yvonne Thompson', 'dateCreated': new Date() },
    { 'name': 'Carter Ashford', 'dateCreated': new Date() },
    { 'name': 'Michael Johnson', 'dateCreated': new Date() },
    { 'name': 'Reese Nospoon', 'dateCreated': new Date() },
    { 'name': 'Nicole Cunningham', 'dateCreated': new Date() },
  ];
  const [showUserList, setShowUserList] = useState('true');


  return (
    <div>
      <h2>User List 👤</h2>
      <ul>
        {users.map((user, index) => {
          return (
            <li key={index}>
              <h5>{user['name']}</h5>
              <small>
                {(user['dateCreated']).toString()}
              </small>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UserList;