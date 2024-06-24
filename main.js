// Selecting the sidebar, buttons, and main content
const sidebar = document.querySelector(".sidebar");
const sidebarOpenBtn = document.querySelector("#sidebar-open");
const sidebarCloseBtn = document.querySelector("#sidebar-close");
const sidebarLockBtn = document.querySelector("#lock-icon");
const mainContent = document.getElementById("main-content");

// Function to toggle the lock state of the sidebar
const toggleLock = () => {
  sidebar.classList.toggle("locked");
  if (!sidebar.classList.contains("locked")) {
    sidebar.classList.add("hoverable");
    sidebarLockBtn.classList.replace("bx-lock-alt", "bx-lock-open-alt");
  } else {
    sidebar.classList.remove("hoverable");
    sidebarLockBtn.classList.replace("bx-lock-open-alt", "bx-lock-alt");
  }
};

// Function to hide the sidebar when the mouse leaves
const hideSidebar = () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.add("close");
    mainContent.style.marginLeft = "75px"; // Adjust this value as necessary
  }
};

// Function to show the sidebar when the mouse enters
const showSidebar = () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("close");
    mainContent.style.marginLeft = "300px"; // Adjust this value as necessary
  }
};

// Function to show and hide the sidebar
const toggleSidebar = () => {
  sidebar.classList.toggle("close");
  if (sidebar.classList.contains("close")) {
    mainContent.style.marginLeft = "75px"; // Adjust this value as necessary
    closeAllSubMenus(); // Close all submenus when sidebar is closed
  } else {
    mainContent.style.marginLeft = "300px"; // Adjust this value as necessary
  }
};

// Function to toggle submenus
function toggleSubMenu(event, submenuId) {
  event.preventDefault();
  const submenu = document.getElementById(submenuId);
  submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
  const toggleIcon = event.currentTarget.querySelector('.toggle-icon');

  submenu.classList.toggle('active');
  toggleIcon.classList.toggle('bx-chevron-down');
  toggleIcon.classList.toggle('bx-chevron-up');
}

// Function to close all submenus
function closeAllSubMenus() {
  const submenus = document.querySelectorAll('.submenu');
  submenus.forEach(submenu => {
    submenu.style.display = 'none';
  });
}

// Adding event listeners to buttons and sidebar for the corresponding actions
sidebarLockBtn.addEventListener("click", toggleLock);
sidebar.addEventListener("mouseleave", hideSidebar);
sidebar.addEventListener("mouseenter", showSidebar);
sidebarOpenBtn.addEventListener("click", toggleSidebar);
sidebarCloseBtn.addEventListener("click", toggleSidebar);

// Additional event listener for window resize to adjust sidebar and content responsively
window.addEventListener('resize', () => {
  if (window.innerWidth < 800) {
    sidebar.classList.add("close");
    sidebar.classList.remove("locked");
    sidebar.classList.remove("hoverable");
    mainContent.style.marginLeft = "0";
  } else {
    if (!sidebar.classList.contains("close")) {
      mainContent.style.marginLeft = "300px"; // Adjust this value as necessary
    }
  }
});