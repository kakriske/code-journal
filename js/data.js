/* exported data */

let data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};

window.addEventListener('beforeunload', function (event) {
  const serializeData = JSON.stringify(data);
  localStorage.setItem('data', serializeData);
});

const storedData = localStorage.getItem('data');
if (storedData) {
  data = JSON.parse(storedData);
}
