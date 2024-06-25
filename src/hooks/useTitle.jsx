import { useEffect, useState } from "react";

export default function useTitle() {
    const [title, setTitle] = useState('');

    useEffect(() => {
        document.title = title;
    }, [title]);

    return {
        set : (title) => setTitle(title),
    }
}