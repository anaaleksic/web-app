import User from '../view/entities/User'

const fetchUsers = () => {

    const url = 'https://randomuser.me/api/?results=15';

    return fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.results);



            const myUsers = data.results.map((userData) => {
                return new User(userData)
            })

            return myUsers


        })
}

export { fetchUsers }; //ovako pisemo da bi obuhvati ceo fetch jer ima dva then-a