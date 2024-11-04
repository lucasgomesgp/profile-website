export function TitleSection({ title, onCenter = false }: { title: string, onCenter?: boolean }) {
    return (
        <h3 className={`font-lufga  text-purple-principal font-bold text-2xl md:text-5xl tracking-[4.16px] md:tracking-[6.24px] w-full ${onCenter ? "text-center" : "self-start"}`}>
            {title}
        </h3>
    );
}