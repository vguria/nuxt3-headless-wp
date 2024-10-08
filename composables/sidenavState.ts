export const useSidenavState = () => {
  const isSidenavOpen = useState("isSidenavOpen", () => false)

  function toggleSidenav() {
    isSidenavOpen.value = !isSidenavOpen.value
  }

  function openSidenav() {
    isSidenavOpen.value = true
  }

  function closeSidenav() {
    isSidenavOpen.value = false
  }

  return {
    isSidenavOpen,
    toggleSidenav,
    openSidenav,
    closeSidenav
  };
};
