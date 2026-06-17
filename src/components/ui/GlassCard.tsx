// frosted glass effect 

export default function GlassCard({
    children,
    className = "",
}:{
    children: React.ReactNode;
    className?: string;
}){
    return(
        <div

        className ={`
        bg-white/5
        backdrop-blue-xl
        border
        border-white/10
        rounded-[40px]
        shadow-[0_8px_50px_rgba(0,0,0.25)]
        ${className}
        `}
        >
            {children}
        </div>
    );
}