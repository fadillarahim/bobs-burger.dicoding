import './member-item.js';

class MemberList extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({
            mode: 'open'
        });
    }

    set members(members){
        this._members = members;
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = "";
        this._members.forEach(member => {
            const memberItemElement = document.createElement("member-item");
            memberItemElement.member = member;
            this.shadowDOM.appendChild(memberItemElement);
        });
    }
}

customElements.define("member-list", MemberList);