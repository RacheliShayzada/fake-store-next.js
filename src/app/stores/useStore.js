import { create } from 'zustand';

const useStore = create((set) => ({
    count: 0, // מצב התחלתי
    increment: () => set((state) => ({ count: state.count + 1 })), // פונקציה להגדלה
    decrement: () => set((state) => ({ count: state.count - 1 })), // פונקציה להקטנה
    reset: () => set({ count: 0 }) // פונקציה לאיפוס
}));

export default useStore;
