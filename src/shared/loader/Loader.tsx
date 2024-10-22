import { ThreeDots } from 'react-loader-spinner'
export default function Loader() {
    return (
        <div className="min-h-screen flex items-center justify-center z-10 bg-black bg-opacity-60">
            <ThreeDots
                visible={true}
                height="80"
                width="80"
                color="#3B82F6"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}
