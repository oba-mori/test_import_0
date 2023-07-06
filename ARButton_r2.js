// 
class ARButton {

	
  constructor() {
    this.value = 0;
  }

  incrementValue() {
    this.value += 1;
    console.log('Bで変更された値:', this.value);
  }

}
export { ARButton };