const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                modal.style.display = 'block';
                // document.body.classList.add('moda-open');
                document.body.style.overflow = 'hidden';
            });
        });

        close.addEventListener('click', () => {
            modal.style.display = "none";
            // document.body.classList.remove('modal-open');
            document.body.style.overflow = "";
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
                // document.body.classList.remove('modal-open');
                document.body.style.overflow = "";

            }

        });

      
    }

    function showByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "";
        }, time);
    }
    


    
    bindModal('.popup_engineer_btn', '.popup_engineer' , '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup_content .popup_close');
    showByTime('.popup', 4000);
//   console.log(modalEngineerClose);
};


export default modals;