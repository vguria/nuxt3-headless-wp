import { ref } from "vue";

const isSidenavOpen = ref(false);
const canToggle = ref(true);
const keyupListener = (e : KeyboardEvent) => {
  if (e.key === "Escape") {
    closeSidenav();
  }
};

const openSidenav = () => {
  if (!canToggle.value) return;
  isSidenavOpen.value = true;
  canToggle.value = false;
  setToggleTimer();
};

const closeSidenav = () => {
  if (!canToggle.value) return;
  isSidenavOpen.value = false;
  document.removeEventListener("keyup", keyupListener);
};

const toggleSidenav = () => {
  isSidenavOpen.value = !isSidenavOpen.value;
};

//A function to add a timeout when the sidenav is opened
const setToggleTimer = () => {
  setTimeout(() => {
    canToggle.value = true;
  }, 10);

  // Add event listener to close sidenav with esc key
  document.addEventListener("keyup", keyupListener);
};

export const useSidenavState = () => {
  return {
    isSidenavOpen,
    openSidenav,
    closeSidenav,
    toggleSidenav,
  };
};
