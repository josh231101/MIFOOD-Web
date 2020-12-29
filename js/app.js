const sidebar = document.querySelector(".sidebar");

const openSideBar = () => {
  sidebar.classList.remove("sidebar--closed");
  sidebar.classList.add("sidebar--open");
};
const closeSidebar = () => {
  sidebar.classList.remove("sidebar--open");
  sidebar.classList.add("sidebar--closed");
};
