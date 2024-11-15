import Link from "next/link";

export function LinkToggleMenu({ link, title, hideMenuFn }: { link: string, title: string, hideMenuFn: () => void }) {
    return (
        <Link
            href={`#${link}`}
            onClick={hideMenuFn}
            className="bg-black-principal hover:bg-black hover:scale-110 text-center transition-all w-full py-4">
            {title}
        </Link>
    );
}