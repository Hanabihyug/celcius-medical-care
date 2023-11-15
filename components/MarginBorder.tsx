export default function MarginBorder() {
    return (
        <div className="absolute container inset-0 pointer-events-none grid place-items-center">
            <div className="h-full w-[calc(100%+1rem)] border-x-[2px] margin-border"></div>
        </div>
    );
}
