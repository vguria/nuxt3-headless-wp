export const useSidenavState = () => {
  const isSidenavOpen = useState("isSidenavOpen", () => false);

  function toggleSidenav() {
    isSidenavOpen.value = !isSidenavOpen.value;
  }

  return {
    isSidenavOpen,
    toggleSidenav,
  };
};
