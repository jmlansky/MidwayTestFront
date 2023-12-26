import React, { useState, useEffect } from 'react';

interface BirthdayMessageResponse {
  message: string;
}

interface BirthdayMemberTeamDTO {
  upn: string;
  name: string;
  lastName: string;
  BirthDate: string;
}

interface TeamBirthdayResponse {
  employees: BirthdayMemberTeamDTO[];
}

interface MemberTeamDTO {
  upn: string;
  name: string;
  lastName: string;
  BirthDate: string;
  isBirthdayThisWeek: boolean;
}

const Dashboard: React.FC = () => {
  const [message, setMessage] = useState('');
  const [teamMembers, setTeamMembers] = useState<BirthdayMemberTeamDTO[]>([]);
  const [team, setTeam] = useState<MemberTeamDTO[]>([]);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        // Make API call to get birthday message
        const response = await fetch(`https://midway-test-api.azurewebsites.net/api/employees/birthday/e1@midway.tech`);
        const data: BirthdayMessageResponse = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error('An error occurred', error);
      }
    };

    const fetchTeamMembers = async () => {
      try {
        // Make API call to get team members
        const response = await fetch('https://midway-test-api.azurewebsites.net/api/employees/birthday/team?upn=e1@midway.tech');
        const data: TeamBirthdayResponse = await response.json();
        setTeamMembers(data.employees);
      } catch (error) {
        console.error('An error occurred', error);
      }
    };

    const fetchTeam = async () => {
      try {
        // Make API call to get team
        const response = await fetch('https://midway-test-api.azurewebsites.net/api/employees/team');
        const data: TeamBirthdayResponse = await response.json();
        setTeamMembers(data.employees);
      } catch (error) {
        console.error('An error occurred', error);
      }
    };

    fetchMessage();
    fetchTeamMembers();
    //fetchTeam();
  }, []);

  return (
    <div>
      <h1>Main Screen</h1>
      <div>
        <h2>Birthday Message</h2>
        <p>{message}</p>
      </div>
      <div>
        <h2>Team Members</h2>
        <ul>
          {teamMembers.map((member) => (
            <li key={member.upn}>{`${member.name} ${member.lastName}`}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Team</h2>
        <ul>
          {team.map((member) => (
            <li
              key={member.upn}
              style={{ backgroundColor: member.isBirthdayThisWeek ? 'orange' : 'lightblue' }}
            >
              {`${member.name} ${member.lastName}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;