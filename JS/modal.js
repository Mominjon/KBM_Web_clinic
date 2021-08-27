const firstModal = document.querySelector(".first__modal")
const secondModal = document.querySelector(".second__modal")
function openFirstModal(modal, modal2){
    modal.classList.add("actived-modal")
    const closeBtn = document.querySelector(".closeBtn")
    const closeBtn2 = document.querySelector(".closeBtn2")
    const sendBtn = document.querySelector(".sendBtn")
    const sendBtn2 = document.querySelector(".sendSecondQuestion")
    closeBtn.addEventListener('click', () => {
        modal.classList.remove("actived-modal")
    })
    sendBtn.addEventListener('click', () => {
        modal.classList.remove("actived-modal")
        modal2.classList.add("actived-modal")
    })
    closeBtn2.addEventListener('click', () => {
        modal2.classList.remove("actived-modal")
    })
    sendBtn2.addEventListener('click', () => {
        modal2.classList.remove("actived-modal")
    })
}