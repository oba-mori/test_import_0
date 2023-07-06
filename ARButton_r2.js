// 
class ARButton {
  constructor() {
    this.value = 0;
    this.valueChangedCallbacks = [];
  }

  createButton() {
    const button = document.createElement('button');
    button.textContent = 'ボタン';
    button.addEventListener('click', () => {
      this.incrementValue();
      console.log('ボタンクリック後の値:', this.value);
      this.dispatchValueChangedEvent();
    });
    return button;
  }

  incrementValue() {
    this.value++;
  }

  addValueChangedCallback(callback) {
    this.valueChangedCallbacks.push(callback);
  }

  dispatchValueChangedEvent() {
    for (const callback of this.valueChangedCallbacks) {
      callback(this.value);
    }
  }
}

export {ARButton};
