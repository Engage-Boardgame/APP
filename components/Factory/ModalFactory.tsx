"use client";
import ConnexionModal from "@/components/Modal/ConnexionModal";

const ModalFactory = (modalName:string|null) => {

    if (!modalName) {
        return null;
    }

    switch (modalName) {
        case CONNEXION_MODAL:
            return <ConnexionModal />
        default:
            return null;
    }
}

export default ModalFactory

export const CONNEXION_MODAL = 'connexion'