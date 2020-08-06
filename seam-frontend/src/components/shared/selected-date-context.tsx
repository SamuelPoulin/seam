import { createContext } from 'react';

const SelectedDateContext = createContext({
    selectedDate: new Date(),
    setSelectedDate: (date: Date) => { }
});

export default SelectedDateContext;