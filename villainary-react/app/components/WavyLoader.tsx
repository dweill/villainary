type WavyLoaderProps = {
    text: string;
};

export default function WavyLoader(props: WavyLoaderProps) {
    const { text } = props;
    return (
        <div className="wavy">
            {text.split('').map((char: string, index) => {
                const style = { '--i': index } as React.CSSProperties;
                return (
                    <span
                        style={style}
                        className={'--' + index}
                        key={index + char}
                    >
                        {char}
                    </span>
                );
            })}
        </div>
    );
}
