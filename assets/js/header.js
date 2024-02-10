function sidebar() {
  /* sidebar start */
  const sidebar = document.querySelector("#sidebar");
  const btnOpenSidebar = document.querySelector("#btn-menu");
  const btnCloseSidebar = document.querySelector("#close-sidebar");
  btnOpenSidebar.addEventListener("click", () => {
    sidebar.style.left = "0";
  });
  btnCloseSidebar.addEventListener("click", () => {
    sidebar.style.left = "-100%";
  });
  //! click outside start
  document.addEventListener("click", (event) => {
    if (
      !event.composedPath().includes(sidebar) &&
      !event.composedPath().includes(btnOpenSidebar)
    ) {
      sidebar.style.left = "-100%";
    }
  });
  //! click outside end
  /* sidebar end */
}

function modalSearch() {
  /* search modal start */
  const btnOpenSearch = document.querySelector(".search-button");
  const btnCloseSearch = document.getElementById("close-search");
  const modalSearch = document.querySelector(".modal-search");
  const modalSearchWrapper = document.querySelector(".modal-wrapper");
  btnOpenSearch.addEventListener("click", () => {
    modalSearch.style.visibility = "visible";
    modalSearch.style.opacity = "1";
  });
  btnCloseSearch.addEventListener("click", () => {
    modalSearch.style.visibility = "hidden";
    modalSearch.style.opacity = "0";
  });
  //! click outside start
  document.addEventListener("click", (event) => {
    if (
      !event.composedPath().includes(modalSearchWrapper) &&
      !event.composedPath().includes(btnOpenSearch)
    ) {
      modalSearch.style.visibility = "hidden";
      modalSearch.style.opacity = "0";
    }
  });
  //! click outside end
  /* search modal end */
}

function header() {
  sidebar();
  modalSearch();
}

export default header();
