import { FaTasks } from 'react-icons/fa';
import { MdOutlinePendingActions } from "react-icons/md";
import { RiTaskFill } from "react-icons/ri";
import { GrInProgress } from "react-icons/gr";

export default function Analytics() {
    interface IAnalyticsStat {
        label: string;
        value: number;
        icon: JSX.Element;
    }
    const analyticsStats: IAnalyticsStat[] = [

        { label: 'Total Tasks', value: 10, icon: <FaTasks /> },
        { label: 'Completed Tasks', value: 5, icon: <RiTaskFill /> },
        { label: 'Pending Tasks', value: 2, icon: <MdOutlinePendingActions /> },
        { label: 'In Progress Tasks', value: 1, icon: <GrInProgress /> },
    ];
    return (
        <section className='my-6'>
            <div className='rounded-lg shadow-lg p-5'>
                <h2 className='font-bold text-blue-500 mb-2'>Analytics :</h2>
                <div className='flex flex-wrap items-center space-y-4'>
                    {analyticsStats.map((stat) =>
                        <div className='w-[14rem] py-5 px-3 shadow-md rounded-lg mx-auto text-center flex items-center justify-between hover:bg-gray-100'>
                            <p className='font-medium'>{stat.label} : <span>{stat.value}</span></p>
                            <span className='text-2xl'>{stat.icon}</span>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
