import create from "zustand";

const useAuthStore = create((set) => ({
  email: "nobody",
  loggedIn: false,
}));

export { useAuthStore };