function highlight(table) {
  let rows = table.rows;
  for (let i = 0; i < rows.length; i++) {
    let row = rows[i];
    let ageCell = row.cells[1];
    let genderCell = row.cells[2];
    let statusCell = row.cells[3];

    if (parseInt(ageCell.innerText) < 18) {
      row.style.textDecoration = 'line-through';
    }

    if (genderCell.innerText === 'm') {
      row.classList.add('male');
    } else {
      row.classList.add('female');
    }

    if (statusCell.dataset.available) {
      if (statusCell.dataset.available === 'true') {
        row.classList.add('available');
      } else {
        row.classList.add('unavailable');
      }
    } else {
      row.setAttribute('hidden', 'hidden');
    }
  }
}
