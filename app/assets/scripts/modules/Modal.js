import $ from 'jquery';

class Modal {
  constructor() {
    this.body = document.querySelector('body');
    this.openModalButton = $('.open-modal');
    this.modal = $('.modal');
    this.closeModalButton = $('.modal__close');
    this.events();
  }

  events() {
    // clicking the open modal button
    this.openModalButton.click(this.openModal.bind(this));

    // clicking the x close button
    this.closeModalButton.click(this.closeModal.bind(this));
    
    // user hits any key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if (e.keyCode === 27) {
      this.closeModal();
    }
  }

  openModal(event) {
    this.body.classList.add('modal-open');
    this.modal.addClass('modal--is-visible');
    event.preventDefault();
  }

  closeModal() {
    this.body.classList.remove('modal-open');
    this.modal.removeClass('modal--is-visible');
  }
}

export default Modal;