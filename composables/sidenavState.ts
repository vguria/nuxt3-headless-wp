import { ref } from "vue";

const isSidenavOpen = ref(false);
const canToggle = ref(true);

const openSidenav = () => {
  if (!canToggle.value) return;
  isSidenavOpen.value = true;
  canToggle.value = false;
  setToggleTimer();
};

const closeSidenav = () => {
  if (!canToggle.value) return;
  isSidenavOpen.value = false;
};

const toggleSidenav = () => {
  isSidenavOpen.value = !isSidenavOpen.value;
};

//A function to add a timeout when the sidenav is opened
const setToggleTimer = () => {
  setTimeout(() => {
    canToggle.value = true;
  }, 10);
};

export const useSidenavState = () => {
  return {
    isSidenavOpen,
    openSidenav,
    closeSidenav,
    toggleSidenav,
  };
};
