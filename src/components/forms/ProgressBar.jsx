export default function ProgressBar({ goal, current, textInsideBar, height }) {
    const progress = (current / goal) * 100;

    const progressStyle = {
        width: `${progress}%`,
        borderRadius: 'inherit',
        transition: 'width 0.5s ease-in-out'
    };

    return (
        <section className='w-[100%] h-4 rounded-2xl bg-slate-300' style={height && { height: height }}>
            <div className='h-full bg-primary rounded-2xl flex flex-col justify-center' style={progressStyle}>
                {
                    textInsideBar &&
                    <p className='text-white text-center'>{textInsideBar}</p>
                }
            </div>
        </section>
    );
}
