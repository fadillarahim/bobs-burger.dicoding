class MemberItem extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM =this.attachShadow({mode: 'open'});
    }

    set member(member){
        this._member = member;
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML =`
        <style>
        .search-container {
            max-width: 800px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            padding: 16px;
            border-radius: 5px;
            display: flex;
            position: sticky;
            top: 10px;
            background-color: gren;
        }
        
        .search-container > input {
            width: 75%;
            padding: 16px;
            border: 0;
            border-bottom: 1px solid #d35343;
            font-weight: bold;
        }
        
        .search-container > input:focus {
            outline: 0;
            border-bottom: 2px solid #d35343;
        }
        
        .search-container > input:focus::placeholder {
            font-weight: bold;
        }
        
        .search-container > input::placeholder {
            color: #d35343;
            font-weight: normal;
        }
        
        .search-container > button {
            width: 23%;
            cursor: pointer;
            margin-left: auto;
            padding: 16px;
            background-color: #d35343;
            color: white;
            border: none;
            text-transform: uppercase;
        }
        
        @media screen and (max-width: 550px) {
            .search-container {
            flex-direction: column;
            position: static;
            }
        
            .search-container > input {
            width: 100%;
            margin-bottom: 12px;
            }
        
            .search-container > button {
            width: 100%;
            }
        }
        </style>
        
        <div class="row list member-list">
            <div class="card mb-2" style="max-width: 480px;">
                <div class="row ">
                    <div class="col-md-4">
                        <img src="https://bobsburgers-api.herokuapp.com/images/characters/48.jpg" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">Walter White</h5>
                          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}

customElements.define("member-item", MemberItem);