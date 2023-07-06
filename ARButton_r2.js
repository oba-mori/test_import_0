// 
class ARButton {
  constructor() {
    this.value = 0;
  }

  createButton() {
    const button = document.createElement('button');
    button.textContent = 'ボタン';
    button.addEventListener('click', () => {
      this.incrementValue();
      console.log('ボタンクリック後の値:', this.value);
      this.dispatchEvent(new CustomEvent('valueChanged', { detail: this.value }));
    });
    return button;
  }

  incrementValue() {
    this.value++;
  }
}

export {ARButton};