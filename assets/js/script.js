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
if (scheduleSection8) {
    const buttonCreate = scheduleSection8.querySelector(".inner-schedule-create");
    const listItem = scheduleSection8.querySelector(".inner-schedule-list");

    buttonCreate.addEventListener("click", () => {
        const firstItem = listItem.querySelector(".inner-schedule-item");
        const cloneItem = firstItem.cloneNode(true);
        cloneItem.querySelector("input").value = "";

        const body = cloneItem.querySelector(".inner-schedule-body");
        const id = `mce_${Date.now()}`;
        body.innerHTML = `<textarea id = "${id}"></textarea>`;
        listItem.appendChild(cloneItem);
        initTinimce(`#${id}`);
    })

    listItem.addEventListener("click", (event) => {
        if (event.target.closest(".inner-more")) {
            const item = event.target.closest(".inner-schedule-item");
            if (item) {
                item.classList.toggle("hidden");
            }
        }

        if (event.target.closest(".inner-remove")) {
            const item = event.target.closest(".inner-schedule-item");
            const totalItem = listItem.querySelectorAll(".inner-schedule-item").length;
            if (item && totalItem > 1) {
                listItem.removeChild(item);
            }
        }
    })

    new Sortable(listItem, {
        handle: '.inner-move', // handle's class
        animation: 150,
        onStart: (event) => {
            const textarea = event.item.querySelector(".inner-schedule-body textarea");
            const id = textarea.id;
            tinymce.get(id).remove();
        },
        onEnd: (event) => {
            const textarea = event.item.querySelector(".inner-schedule-body textarea");
            const id = textarea.id;
            initTinimce(`#${id}`);
        }
    });
}
// End Schedule Section 8

// Filepond Image
const listFilePondImage = document.querySelectorAll("[filepond-image]");
if (listFilePondImage.length > 0) {
    listFilePondImage.forEach(filePondImage => {
        FilePond.registerPlugin(
            // FilePondPluginImageExifOrientation,
            FilePondPluginFileValidateType,
            FilePondPluginImagePreview
            // FilePondPluginImageCrop,
            // FilePondPluginImageResize,
            // FilePondPluginImageTransform,
            // FilePondPluginImageEdit
        );

        FilePond.create(filePondImage, {
            labelIdle: "+",
            imagePreviewHeight: 150,
            imageCropAspectRatio: '1:1',
            imageResizeTargetWidth: 150,
            imageResizeTargetHeight: 150,
            stylePanelLayout: 'compact',
            // styleLoadIndicatorPosition: 'center bottom',
            // styleProgressIndicatorPosition: 'right bottom',
            styleButtonRemoveItemPosition: 'right top'
            // styleButtonProcessItemPosition: 'right bottom',
        });
    })
}
// End Filepond Image

// Chart 1
const chart1 = document.querySelector("#chart1");
if (chart1) {
    new Chart(chart1, {
        type: 'line',
        data: {
            labels: ["01", "02", "03", "04", "05"],
            datasets: [
                {
                    label: "Tháng 5/2025",
                    data: ["900000", "600000", "1300000", "1900000", "1500000"],
                    borderColor: "#FF6384",
                    borderWidth: 1.5
                },
                {
                    label: "Tháng 4/2025",
                    data: ["1000000", "800000", "900000", "3200000", "1800000"],
                    borderColor: "#36A2EB",
                    borderWidth: 1.5
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                }
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Ngày'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Doanh thu (VNĐ)'
                    }
                }
            },
            maintainAspectRatio: false
        },
    });
}
// End Chart 1