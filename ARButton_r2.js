// 
class ARButton {
  constructor() {
    this.value = 0;
    this.valueChangedCallbacks = [];

    this.a = 0;
    this.k = 0;
  }






  static q = 0;

  //static関数
  static createButton_static() {
    ARButton.q = 1;
    console.log('createButton 呼び出し q:', ARButton.q);
  }










  
  // ボタン作成
  button_sakusei(){
    // ボタン要素を作成
    const button = document.createElement('button');
    button.textContent = '新ボタン';

    // ボタンクリックイベントを設定
    button.addEventListener('click', () => {
      console.log('新ボタンがクリックされました');
      // ここにボタンがクリックされたときの処理を記述します
      this.k = this.k + 1;
      //表示
      console.log('ボタンクリック後の値 k:', this.k);


      ARButton.q = ARButton.q + 1;
      console.log('ボタンクリック後の値 q:', ARButton.q);
    });

    // body要素にボタン要素を追加
    document.body.appendChild(button);
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

			// 値の変更を検知し、登録されたコール関数に通知するためのもの
      this.dispatchValueChangedEvent();
    });

		// ボタン要素を返す
    return button;
  }

	//クリックした時にこの関数が処理される
	//変数値を変更する関数
  incrementValue() {
		if (this.value == 0)
		{
  	  this.value = 1;
  	  this.a = 1;
		}
		else
		{
			this.value = 0;
      this.a = 0;
		}
	}

	// 値が変更された時に実行したい関数を配列に登録する
  // 今回はHTMLから関数を登録する
  addValueChangedCallback(callback) {
    this.valueChangedCallbacks.push(callback);
  }

	// 値の変更を検知し、登録されたコール関数に通知するためのもの
	// ボタンをクリックすると実行される
	// 変数valueに配列valueChangedCallbacksに入っている値を入れる
	// そうすることで、最新の値をvalueに入れることが出来る
  dispatchValueChangedEvent() {
    for (const callback of this.valueChangedCallbacks) {
      callback(this.value);
    }
    console.log("this.valueChangedCallbacks : ", this.valueChangedCallbacks);
  }
}

export {ARButton};

