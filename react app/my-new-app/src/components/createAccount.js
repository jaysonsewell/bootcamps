import React from 'react';

const CreateAccount = () => (
    <div>
    <form id="myAccountForm" action="get">
    <input type="text" name="userName" />
    <input type="password" name="password" />
    <input id='sub' type="submit" />
    </form>
    </div>
);

export default CreateAccount
