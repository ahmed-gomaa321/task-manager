
interface ITeamMember {
    id: number;
    name: string;
    email: string;
    role: string;
}
export default function TeamMember() {
    const teamMember: ITeamMember[] = [
        {
            "id": 1,
            "name": "John Doe",
            "email": "john@example.com",
            "role": "Developer"
        },
        {
            "id": 2,
            "name": "Jane Smith",
            "email": "jane@example.com",
            "role": "Designer"
        }
    ]
    return (
        <section>
            <h1 className="text-2xl text-blue-500 p-5">Team Member</h1>
            <div className="flex flex-wrap items-center p-5 gap-5 font-medium">
                {teamMember.map((member) => <div key={member.id} className="shadow-md p-5 rounded-lg relative">
                    <h2>name: {member.name}</h2>
                    <p>email: {member.email}</p>
                    <p>role: {member.role}</p>
                </div>)}
            </div>
        </section>
    )
}
