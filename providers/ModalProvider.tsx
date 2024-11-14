"use client";
import modalFactory from "@/components/Factory/ModalFactory";
import {useAppSelector} from "@/lib/hooks";

const ModalProvider = ({children}) => {
    const appSlice = useAppSelector((state) => state.app);
    const modal = appSlice.modal.modal;

    return (
        <>
            {children}
            {modalFactory(modal)}
        </>
    );
}

export default ModalProvider