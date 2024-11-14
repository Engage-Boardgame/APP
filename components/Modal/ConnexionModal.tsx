import {
    Drawer, DrawerClose,
    DrawerContent,
    DrawerDescription, DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer";
import {Button} from "@/components/ui/button";
import {
    Dialog,
    DialogContent, DialogDescription,
    DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {cn} from "@/lib/utils";
import useMediaQuery from "@/utils/useMediaQuery";
import React, {useState} from "react";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {setModal} from "@/features/appSlice";
import TypographieH2 from "@/components/ui/TypographieH2";
import {useTranslation} from "react-i18next";

const ConnexionModal = () => {

    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const appSlice = useAppSelector((state) => state.app);
    const modal = appSlice.modal.modal;
    const isOpen = modal !== null;

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
            console.log("Username:", username);
        console.log("Password:", password);
    };

    const isDesktop = useMediaQuery("(min-width: 768px)")

    const handleClose = () => {
        dispatch(setModal(null));
    }

    if (isDesktop) {
        return (
            <Dialog open={isOpen} onOpenChange={handleClose}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>{t("Connection")}</DialogTitle>
                    </DialogHeader>
                    <DialogDescription />
                    <ProfileForm />
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={isOpen} onOpenChange={handleClose}>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>{t("Connection")}</DrawerTitle>
                </DrawerHeader>
                <ProfileForm className="px-4" />
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">{t("Cancel")}</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )

    function ProfileForm({ className }: React.ComponentProps<"form">) {
        return (
            <form className={cn("grid items-start gap-4", className)} onSubmit={handleFormSubmit}>
                <div className="grid gap-2">
                    <Label htmlFor="username">{t("Username")}</Label>
                    <Input type="text" id="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">{t("Password")}</Label>
                    <Input type="password" id="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <Button type="submit">{t("Log in")}</Button>
            </form>
        )
    }
}


export default ConnexionModal