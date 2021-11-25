const bookContainer = document.querySelector(".bookContainer");
const database = firebase.database();
const auth = firebase.auth();
const logout = document.querySelector(".btnLogout");


auth.onAuthStateChanged(


    (user) => {

        //hay un usuario logeado
        if (user != null) {   

            const books = [{
                id: "1",
                name: "The stranger",
            
            
            },
            {
                id: "2",
                name: "The dark Hours"
            },
            
            {
                id: "3",
                name: "Will"
            }, {
            
                id: "4",
                name: "Sapiens"
            },
            
            {
                id: "5",
                name: "It ends with us"
            }
            
            ];
            
            
            books.forEach(book => {
                
                let tempB = new Book(book);
                bookContainer.appendChild(tempB.Render());
            })

            logout.addEventListener("click",()=>{

                auth.signOut();
            })
        }

        else {

            alert("por favor inicie sesión")
            window.location.href = "login.html"

        }
    }
)

