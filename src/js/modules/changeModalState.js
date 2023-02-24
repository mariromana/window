import checkNumInputs from "./checkNumINputs";

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

       checkNumInputs('#width');
       checkNumInputs('#height');


       function bindActionToElems(event, elem, prop) {
        elem.forEach((item, i ) => {
            item.addEventListener(event, () => {
                if (elem.length > 1) {
                    state[prop] = i;
                } else {
                    state[prop] = item.value;
                }
                console.log(state);
            });

        });

       }

  
       bindActionToElems('click', windowForm, 'form');
       bindActionToElems('input', windowHeight, 'heigth');
       bindActionToElems('input', windowWidth, 'width');
       bindActionToElems('change', windowType, 'type');
       bindActionToElems('change', windowProfile, 'profile');




};

export default changeModalState;