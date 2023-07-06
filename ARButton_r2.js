// 
class ARButton {
  constructor() {
    this.value = 0;
    this.valueChangedCallbacks = [];
  }

  createButton() {
    const button = document.createElement('button');
    button.textContent = 'ボタン';


		// ボタンクリックイベント
    button.addEventListener('click', () => {
			//変数値を変更する関数
      this.incrementValue();

			//表示
      console.log('ボタンクリック後の値:', this.value);

			// 
      this.dispatchValueChangedEvent();
    });
    return button;
  }

	//変数値を変更する関数
  incrementValue() {
		if (this.value == 0)
		{
  	  this.value = 1;
		}
		else
		{
			this.value = 0;
		}
	}

	// 
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
