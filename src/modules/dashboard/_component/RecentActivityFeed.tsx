import { IoIosDoneAll } from "react-icons/io";
import { IoCreate } from "react-icons/io5";
import { FaComment } from "react-icons/fa";

export default function RecentActivityFeed() {
    const recentActivities = [
        {
            id: 'activity-uuid-1',
            user_id: 'user-uuid-1',
            activity_type: 'Created Task',
            description: 'Ahmed created a new task for Project A',
            timestamp: '2024-10-13T12:34:56Z',
        },
        {
            id: 'activity-uuid-2',
            user_id: 'user-uuid-2',
            activity_type: 'Completed Task',
            description: 'Sarah completed the task in Project A',
            timestamp: '2024-10-12T11:20:00Z',
        },
        {
            id: 'activity-uuid-3',
            user_id: 'user-uuid-1',
            activity_type: 'Added Comment',
            description: 'Ahmed added a comment to Task 3 in Project B',
            timestamp: '2024-10-11T09:10:00Z',
        }
    ];
    return (
        <section className='my-6'>
            <div className='rounded-lg shadow-lg p-5'>
                <h2 className='font-bold text-blue-500 mb-2'>Recent Activities :</h2>
                <div className='flex flex-wrap items-center font-medium'>
                    {recentActivities.map((activity) =>
                        <div key={activity.id} className='space-y-2 hover:bg-gray-100 '>
                            <div className='flex justify-between gap-2 border-b border-blue-500 pb-2 py-2 px-3'>
                                <div className='py-5 '>
                                    {
                                        activity?.activity_type === 'Created Task' &&
                                        <span className='text-2xl'><IoCreate /></span>
                                    }
                                    {
                                        activity?.activity_type === 'Completed Task' &&
                                        <span className='text-2xl'><IoIosDoneAll /></span>
                                    }
                                    {
                                        activity?.activity_type === 'Added Comment' &&
                                        <span className='text-2xl'><FaComment /></span>
                                    }
                                </div>
                                <div className='mt-2'>
                                    <p>{activity?.description}</p>
                                    <p>{new Date(activity?.timestamp).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
