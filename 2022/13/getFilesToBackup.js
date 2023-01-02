function getFilesToBackup(lastBackup, changes) {
  return [...new Set(changes.filter( change => {
    return change[1] > lastBackup
  }).map( change => change[0]).sort((a,b) => a-b))] || [];
}

const lastBackup = 1546300800;
const changes = [
  [2, 1546300800],
  [3, 1546301100],[(1, 1546300800)],
  [1, 1546300900],
  [1, 1546301000],
];

console.log(getFilesToBackup(lastBackup, changes)); //[ 1, 3 ]