import { useState } from "react";
import { ModalOverlay } from "../comps/Modal/ModalOverlay";
import { ModalBox } from "../comps/Modal/ModalBox";

export default function useModal() {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState(null);

    return {
        Modal : () => open && <ModalOverlay onClick={e => {
            if(e.target === e.currentTarget) setOpen(false);
        }}>
            <ModalBox>
                {content}
            </ModalBox>
        </ModalOverlay>,
        open : (content) => { setOpen(true); setContent(content); },
        close : () => { setOpen(false); setContent(null); },
    }
}