class Dropdown {
  constructor(select, options) {

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
