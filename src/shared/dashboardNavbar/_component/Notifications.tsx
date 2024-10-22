import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react";
import { IoMdNotifications } from "react-icons/io";

interface INotifications {
    id: number,
    message: string,
    time: string,
    isRead: boolean
}
export default function Notifications() {
    const mockNotifications: INotifications[] = [
        { id: 1, message: 'You have a new task assigned: "Design Homepage"', isRead: false, time: '2 minutes ago' },
        { id: 2, message: 'Project "Website Redesign" deadline is tomorrow', isRead: false, time: '1 hour ago' },
        { id: 3, message: 'New comment on your task: "Update the logo"', isRead: false, time: '5 hours ago' },
        { id: 4, message: 'Your profile was updated successfully', isRead: false, time: '1 day ago' },
        { id: 5, message: 'You were added to the project: "Mobile App Development"', isRead: false, time: '3 days ago' },
        { id: 6, message: 'Reminder: Team meeting scheduled for today at 3 PM', isRead: false, time: '4 days ago' },
        { id: 7, message: 'New task created: "Fix bugs in user dashboard"', isRead: false, time: '5 days ago' },
        { id: 8, message: 'Task "Optimize Images" was marked as complete', isRead: false, time: '1 week ago' },
        { id: 9, message: 'You have been assigned as the project manager for "Marketing Campaign"', isRead: false, time: '10 days ago' },
        { id: 10, message: 'Your team submitted the report for "E-commerce Analysis"', isRead: false, time: '2 weeks ago' }
    ];
    const [isOpen, setIsOpen] = useState(false);
    const [Notifications, setNotifications] = useState<INotifications[]>(mockNotifications);

    const handleMarkOne = (id: number) => {
        let targetedNotification = Notifications.find((not) => not.id === id)
        if (targetedNotification && !targetedNotification.isRead) {
            const updatedAllNotifications = Notifications.filter((not) => not.id !== id)
            setNotifications([...updatedAllNotifications, {
                ...targetedNotification,
                isRead: true
            }])
        }
    }

    const handleMarkAll = () => {
        if (Notifications.find((not)=> !not.isRead)) {
            const allNotififcations = Notifications.map((not) =>
                ({ ...not, isRead: true })
            )
            setNotifications(allNotififcations)
        }
    }


    return (
        <>
            <div className={`notifications-menu fixed right-0 top-16 w-[20rem] bg-gray-100 transition-all duration-300 overflow-y-scroll hide-scroll z-10 ${isOpen ? 'bottom-0' : 'bottom-full'}`}>
                <div className="flex items-center justify-between text-sm px-5 pt-3 text-blue-500 border-b pb-5">
                    <h3>Notifications</h3>
                    <p onClick={handleMarkAll} className="cursor-pointer hover:underline">Mark All</p>
                </div>
                <ul className="mt-5">
                    {Notifications.map((notification) =>
                        <>
                            < li key={notification.id} className={`px-3 text-sm font-normal pb-5 border-b-2 relative ${notification.isRead ? "bg-transparent" : "bg-gray-400"} `
                            }>
                                <div onClick={() => handleMarkOne(notification.id)} className="flex flex-row-reverse items-center px-5 pt-3 absolute right-2 bottom-1 cursor-pointer hover:underline text-blue-500">
                                    Mark as read
                                </div>
                                <p>{notification.message}</p>
                                <p className="text-gray-600 text-xs">{notification.time}</p>
                            </li>
                        </>
                    )}
                </ul>
            </div >
            <IoMdNotifications className="cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
        </>
    )
}
