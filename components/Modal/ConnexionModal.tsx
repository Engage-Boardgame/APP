import {
    Drawer, DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
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
import {setModal} from "@/features/appSlice";
import {useTranslation} from "react-i18next";
import {useAppDispatch, useAppSelector} from "@/hooks/hooks";

// -------------

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
                    <DialogDescription/>
                    <form className={cn("grid items-start gap-4")} onSubmit={handleFormSubmit}>
                        <div className="grid gap-2">
                            <Label htmlFor="username">{t("Username")}</Label>
                            <Input type="text" id="username" value={username} onChange={handleUsernameChange}/>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">{t("Password")}</Label>
                            <Input type="password" id="password" value={password} onChange={handlePasswordChange}/>
                        </div>
                        <Button type="submit">{t("Log in")}</Button>
                    </form>
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
                <form className={cn("grid items-start gap-4 pl-4 pr-4")} onSubmit={handleFormSubmit}>
                    <div className="grid gap-2">
                        <Label htmlFor="username">{t("Username")}</Label>
                        <Input type="text" id="username" value={username} onChange={handleUsernameChange}/>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">{t("Password")}</Label>
                        <Input type="password" id="password" value={password} onChange={handlePasswordChange}/>
                    </div>
                </form>
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <div className={"flex flex-col gap-2"}>
                            <Button type="submit">{t("Log in")}</Button>
                            <Button variant="outline">{t("Cancel")}</Button>
                        </div>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}


export default ConnexionModal