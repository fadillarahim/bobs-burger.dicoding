import '../component/member-list.js';
import DataSource from '../data/data-source.js';

const main = () =>{
    const memberListElement = document.querySelector('member-list');

    const onDomLoad = async ()=>{
        try {
            const result = await DataSource.loadMember();
            renderResult(result);
        } catch (error) {
            fallbackResult(error);
        }
    };

    const renderResult = results => {
        memberListElement.members = results;
    };
    
    const fallbackResult = message => {
        memberListElement.renderError(message);
    };   
    
    document.addEventListener('DOMContentLoaded', onDomLoad());
};

