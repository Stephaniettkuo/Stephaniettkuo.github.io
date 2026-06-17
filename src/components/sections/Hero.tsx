import GlassCard from "../ui/GlassCard";

export default function Hero() {
    return (
        <section
            className="
            min-h-screen
            flex
            items-center
            justify-center
            gap-16
            px-10
            "
        >

            {/*LEFT SIDE*/}
            <div>
                <p className="uppercase tracking-[0.3em] text-slate-300">
                    hello, i'm
                </p>

                <h1
                    className="
                 text-7xl
                font-serif
                mt-4
            "
                >
                    Stephanie Kuo
                </h1>

                <p className="mt-6 text-slate-300">
                    student • builder • researcher
                </p>
            </div>

            {/*RIGHT SIDE*/}
            <GlassCard className="w-[320px] p-6">
                <div
                    className="
            h-[250px]
            rounded-3xl
            bg-gradient-to-br
            from-blue-200
            to-slate-700
            "
                />

                <h3 className="mt-4 text-2xl font-serif">
                    Moonlight
                </h3>

                <p className="opacity-60">
                    Now Playing
                </p>
            </GlassCard>
        </section>
    );
}