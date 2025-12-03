interface NeuCardProps {
    children: React.ReactNode;
    className?: string;
}

export default function Card({children, className=""}: NeuCardProps){
    return (
        <div className={`
        w-[360px] h-[310px] m-4 rounded-[30px] bg-[#e0e0e0]
        shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff]
        cursor-pointer border-transparent border-4 hover:border-[#2c9caf] 
        hover:shadow-[30px_30px_60px_#bebebe,-30px_-30px_60px_#ffffff]
        transition-all duration-300 ease-in-out
        ${className}`}>
            {children}

        </div>
    )
}