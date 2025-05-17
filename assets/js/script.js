// Menu Mobile
const buttonMenuMobile = document.querySelector(".header .inner-button-menu");
if (buttonMenuMobile) {
    const sider = document.querySelector(".sider");
    const siderOverlay = document.querySelector(".sider-overlay");
    buttonMenuMobile.addEventListener("click", () => {
        sider.classList.add("active");
        siderOverlay.classList.add("active");
    })
    siderOverlay.addEventListener("click", () => {
        sider.classList.remove("active");
        siderOverlay.classList.remove("active");
    })
}
// End Menu Mobile

// Schedule Section 8
const scheduleSection8 = document.querySelector(".section-8 .inner-schedule");
if(scheduleSection8) {
    const buttonCreate = scheduleSection8.querySelector(".inner-schedule-create");
    const listItem = scheduleSection8.querySelector(".inner-schedule-list");

    buttonCreate.addEventListener("click", () => {
        const firstItem = listItem.querySelector(".inner-schedule-item");
        const cloneItem = firstItem.cloneNode(true);
        cloneItem.querySelector("input").value = "";
        cloneItem.querySelector("textarea").value = "";

        listItem.appendChild(cloneItem);
    })

    listItem.addEventListener("click", (event) => {
        if(event.target.closest(".inner-more")){
            const item = event.target.closest(".inner-schedule-item");
            if(item) {
                item.classList.toggle("hidden");
            }
        }

        if(event.target.closest(".inner-remove")){
            const item = event.target.closest(".inner-schedule-item");
            const totalItem = listItem.querySelectorAll(".inner-schedule-item").length;
            if(item && totalItem > 1) {
                listItem.removeChild(item);
            }
        }
    })
}
// End Schedule Section 8