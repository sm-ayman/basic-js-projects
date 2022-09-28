let data = [
    {
        name: 'Ronaldo',
        age: '36'
    },
    {
        name: 'Sarah',
        age: '25'
    },
    {
        name: 'John',
        age: '34'
    },
    {
        name: 'Tim',
        age: '60'
    },
    {
        name: 'Messi',
        age: '35'
    },
    {
        name: 'Neymar',
        age: '30'
    },
];

const info = document.querySelector('#info');

let details = data.map(function (item) {
    return (
        '<div>' + item.name + ' ' + 'is ' + item.age + ' years old.' + '</div>'
    )
})

info.innerHTML = details.join('\n');