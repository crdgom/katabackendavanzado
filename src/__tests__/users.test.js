

    describe('Purebas para CRUD de usuarios', () => {
        
        test('getUsersTest debe retornar 200', () => {
            const getUsersTest = async () => {
                const response = await fetch('http://localhost:3000/api/v1/getUsers');
                const data = await response.json();
                console.log(data);
                return data;
            }
            expect(data).toBe(200)
        })

        test('getUsersTest debe retornar 400', () => {
            const getUsersTest = async () => {
                const response = await fetch('http://localhost:3000/api/v1/getUsers');
                const data = await response.json();
                console.log(data);
                return data;
            }
            expect(data).toBe(400)
        })
    })

const userMock ={
        "userAlias": "Carl1",
        "userName": "Carlos1",
        "userLastName": "Moctezuma1",
        "userAge": "401",
        "userMail": "carlos1@carlos.com",
        "userPassword": "1111",
        "userPhone": "5555555555",
        "userAddress": "calle algo # 234, col. algo, cdmx",
        "userStatus": "active",
        "userImage": "https://www.facebook.com/photo/?fbid=1655305311374391&set=a.1655305324707723",
        "rol": ""
}