import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface TeamBirthdayResponse {
  Employees: MemberTeamDTO[];
}

interface MemberTeamDTO {
  UPN: string;
  Name: string;
  LastName: string;
  BirthDate: string;
  isBirthdayThisWeek: boolean;
}

const TeamMembers: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<MemberTeamDTO[]>([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get<TeamBirthdayResponse>('http://localhost:7012/employees/team');
        setTeamMembers(response.data.Employees);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <div>
      <h1>Team Members</h1>
      <ul>
        {teamMembers.map((member) => (
          <li key={member.UPN} style={{ backgroundColor: member.isBirthdayThisWeek ? 'orange' : 'lightblue' }}>
            {`${member.Name} ${member.LastName}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamMembers;