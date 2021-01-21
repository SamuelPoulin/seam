import React, { useContext } from 'react';
import { createContext, useState } from "react";

export const DialogOpenContext = createContext({
    dialogOpen: false,
    setDialogOpen: (dialogOpen: boolean): void => {} 
});

export function DialogOpenProvider(props: any) {
    const [dialogOpen, setDialogOpen] = useState(false);

    const value = {
        dialogOpen: props.dialogOpen || dialogOpen,
        setDialogOpen: props.setDialogOpen || setDialogOpen
    }

    return (
        <DialogOpenContext.Provider value={value}>
            {props.children}
        </DialogOpenContext.Provider>
    );
}

export function useDialogOpen() {
  return useContext(DialogOpenContext);
}