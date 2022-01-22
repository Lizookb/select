class Dropdown {
  constructor(select, options) {
    this.element = document.querySelector(select)
    // console.log(this.element)
    this.items = options.items
    this.element.querySelector('.dropdown__label').textContent = this.items[0].label
  }
  open() {
    this.element.classList.add('open')
  }

  close() {
    this.element.classList.remove('open')
  }
}


const dropdown = new Dropdown('#dropdown', {
  items: [
    { label: 'Москва', id: 'spb' },
    { label: 'Киев', id: 'kiev' },
    { label: 'Одесса', id: 'od' },
    { label: 'Николаев', id: 'nik' },
    { label: 'Питер', id: 'pt' },
    { label: 'Ney York', id: 'new' }
  ]
});
