import { ROUTES } from "@/app/constants/routes";
import userImg from "@/assets/images/user-profile.png"
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoMdArrowDropdown } from "react-icons/io";
import Notifications from "./_component/Notifications";

export default function DashboardNavbar() {
    const navigate = useNavigate();
    return (
        <nav className="bg-gray-200 h-[4rem] p-4 pl-16 flex justify-between items-center">
            <div className="flex items-center gap-2 font-medium">
                <div className="flex items-center">
                    <label htmlFor="global-search">Search By</label>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className="bg-transparent text-black shadow-none hover:bg-transparent"><IoMdArrowDropdown />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuSeparator />
                            <RadioGroup>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="projects" id="projects" />
                                    <Label htmlFor="projects">projects</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="tasks" id="tasks" />
                                    <Label htmlFor="tasks">tasks</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="employee" id="employee" />
                                    <Label htmlFor="employee">employee</Label>
                                </div>
                            </RadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <Input className="w-[18rem] border border-blue-500" id="global-search" type="search" />
            </div>
            <div className="flex items-center space-x-2 text-2xl">
                <Notifications />
                <div onClick={() => navigate(ROUTES.PROFILE)} className="rounded-full bg-white cursor-pointer">
                    <img className="w-[40px]" src={userImg} alt="user-Profile" />
                </div>
            </div>
        </nav>
    )
}
